import './style.css';
import React from 'react';
import Menu from '../../components/Menu/Menu';
import Vlibras from '../../components/Vlibras/Vlibras';

export default function Admin() {

    return (
        <>
            <Menu />
            <main id="cadastro">
            <img src="../imgs/gestora.png" alt="" />
            
                <section id="cadastro__section">
                
                <div className="section__form">
                <div className="form__admin">
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
                </div>
                </div>
                </section>
                <img src="../imgs/vase.png" alt="" />
            </main>
            <Vlibras />
        </>
    )
}
