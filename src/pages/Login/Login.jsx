import './style.css';
import Vlibras from '../../components/Vlibras/Vlibras';
import Menu from '../../components/Menu/Menu';

export default function Login() {

    return (
        <>
            <Menu />
            <main id="main-login">
                <section className="imagem">
                    <img src='./imgs/iconswhite.svg' alt="" />
                </section>
                <aside className="aside_login">
                    <form id="login" action="">
                        <h2>Bem vindo!</h2>
                        <p>Faça login na sua conta</p>
                        <label for="email">E-mail:</label><br />
                        <input type="email" name="email" id="email" /><br />
                        <label for="senha">Senha:</label><br />
                        <input type="password" name="senha" id="senha" /><br />
                        <div className="esqueceu_senha">
                            <div className="lembrar">
                                <input type="radio" name="lembrar" id="lembrar" />
                                <label for="lembrar">Lembrar-me</label>
                            </div>
                            <a href="">Esqueceu a senha?</a>
                        </div>
                        <input type="button" value="Entrar" id="entrar" /><br />
                        <button id="google"><img src='./imgs/google.png' alt="" /> Entrar com o Google</button>
                        <p className="cadastro-login">Não tem conta? <a href="./cadastro_usuario.html">Cadastre-se</a></p>
                    </form>
                </aside>
            </main>
            <Vlibras />
        </>
    )
}