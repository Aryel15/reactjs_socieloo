import './style.css';
import React from 'react';
import Menu from '../../components/Menu/Menu';
import Vlibras from '../../components/Vlibras/Vlibras';

export default function Admin() {

    return (
        <>
            <Menu />
            <main id="main-admin">
                <section className="imagem">
                </section>
                <aside className="aside_admin">
                    <form id="admin" action="">
                        <h2>Admin</h2>
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
                    </form>
                </aside>
            </main>
            <Vlibras />
        </>
    )
}