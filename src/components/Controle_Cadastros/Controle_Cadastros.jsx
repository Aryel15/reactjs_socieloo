import './style.css';

export default function Controle_Cadastros() {
    return (
        <>
            <div className="cadastros">
                <div className="link"><a href="/cadastro-usuario"><i className="fa-solid fa-user"></i> Usuário</a><br /></div>
                <div className="link ativado"><a href="/cadastro-ong"><i className="fa-solid fa-handshake-angle"></i>Ong's</a><br /></div>
                <div className="link"><a href="/cadastro-moderador"><i className="fa-solid fa-gears"></i>Moderador</a><br /></div>
            </div>
        </>
    )
}