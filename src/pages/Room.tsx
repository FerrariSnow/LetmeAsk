import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/button';

import '../styles/room.scss'

export function Room() {
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Let me Ask" />
          <div className="code">#BullsNation</div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala teste</h1>
          <span>Nº de perguntas</span>
        </div>

        <form>
          <textarea placeholder="O que você quer perguntar ?"/>
        </form>

        <div className="form-footer">
          <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
          <Button type="submit">Enviar pergunta</Button>
        </div>
      </main>
    </div>
  );
}