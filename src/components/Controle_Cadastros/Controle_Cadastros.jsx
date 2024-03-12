import './style.css';
import { Link } from 'react-router-dom'

export default function Controle_Cadastros() {
    return (
        <>
            <div className="cadastros">
                <div className={window.location.pathname == "/cadastro-usuario" ? "link ativado" : "link"}><Link to="/cadastro-usuario"><i className="fa-solid fa-user"></i> Usuário</Link><br /></div>
                <div className={window.location.pathname == "/cadastro-ong" ? "link ativado" : "link"}><Link to="/cadastro-ong"><i className="fa-solid fa-handshake-angle"></i>Ong's</Link><br /></div>
            </div>
        </>
    )
}