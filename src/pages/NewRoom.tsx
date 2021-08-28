import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../components/button';

import '../styles/global.css'
import '../styles/auth.css'

export function NewRoom() { 
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
        <h2>Criar uma nova sala</h2>
          <form>
            <input type="text"
            placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <h3>
            Quer entrar em uma sala existente ? <a href="#">clique aqui.</a>
          </h3>
        </div>
      </main>
    </div>
  )
}