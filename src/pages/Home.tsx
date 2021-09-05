import { useHistory } from 'react-router-dom'
import { FormEvent, useState } from 'react'

import { auth, database, firebase } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../components/button';

import '../styles/global.css'
import '../styles/auth.css'
import { useAuth } from '../hooks/useAuth'

export function Home() { 
const history = useHistory();
const { user, signInWithGoogle } = useAuth()
const [roomCode, setRoomCode] = useState('');

async function handleCreateRoom() {
  if (!user) {
    await signInWithGoogle()
  }

    history.push('/rooms/new');

  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Sala não existente, te passaram o ID errado !');
      return;
    }

    if (roomRef.val().endedAt) {
      alert('Esta sala já foi finalizada !');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <div  id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando Q&A"/>
        <strong>Crie sala de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Let me Ask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google"/>
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input type="text"
            placeholder="Digite o código da sala"
            onChange={event => setRoomCode(event.target.value)}
            value={roomCode}
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
  }