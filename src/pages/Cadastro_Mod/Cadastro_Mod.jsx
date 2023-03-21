import './style.css';
import React from 'react';
import Controle_Cadastros from '../../components/Controle_Cadastros/Controle_Cadastros';
import Footer from '../../components/footer/Footer';
import Menu from '../../components/Menu/Menu';
import Vlibras from '../../components/Vlibras/Vlibras';

export default function Cadastro_Mod() {

  return (
    <>
        <Menu />
        <main className="main_content container">
        <section className="section-seu-codigo container">
            <div className="content">
                <div id="box-artigo" className="box-artigo">

                    <div className="container_form">
                        <h1>Cadastro do moderador</h1>
                        <form className="form" action="#" method="post">
                            <div className="form_grupo">
                                <label for="nome" className="form_label">Nome</label>
                                <input type="text" name="nome" className="form_input" id="nome" placeholder="Nome" required/>
                            </div>

                            <div className="form_grupo">
                                <label for="e-mail" className="form_label">Email</label>
                                <input type="email" name="email" className="form_input" id="email"
                                    placeholder="seuemail@email.com" required/>
                            </div>

                            <div className="form_grupo">
                                <label for="datanascimento" className="form_label">Data de Nascimento</label>
                                <input type="date" name="datanascimento" className="form_input" id="datanascimento"
                                    placeholder="Data de Nascimento" required/>
                            </div>
                            <span className="legenda2">Permitir acesso</span>
                            <br />
                            <div className="form_grupo">
                                <div className="btn__container">
                                    <input type="checkbox" id="exc-cad" className="checkbox-input"/>
                                    <label for="exc-cad" className="checkbox-label">Exclusão de Cadastros</label>
                                </div>
                                <div className="btn__container">
                                    <input type="checkbox" id="edit-page" className="checkbox-input"/>
                                    <label for="edit-page" className="checkbox-label">Edição de Página</label>
                                </div>
                                <div className="btn__container">
                                    <input type="checkbox" id="exc-com" className="checkbox-input"/>
                                    <label for="exc-com" className="checkbox-label">Exclusão de comentários</label>
                                </div>
                                <div className="btn__container">
                                    <input type="checkbox" id="exc-mid" className="checkbox-input"/>
                                    <label for="exc-mid" className="checkbox-label">Exclusão de mídia</label>
                                </div>
                                <div className="form_grupo">
                                    <span className="legenda form_label">Confirmação de Senha</span>
                                    <div className="inputsenha">
                                        <input type="password" className="form_input" placeholder="Senha" id="password" required/>
                                        <input type="password" className="form_input" placeholder="Confirme Senha" id="confirm_password"required/>
                                        <button type="submit" className="confirm_btn">Confirmar</button>
                                    </div>
                                </div>
                                <div className="form_message">
                                    <label for="message" className="form_message_label"> Digite aqui sua sua
                                        mensagem:</label>
                                    <textarea name="mensagem" id="message" cols="30" rows="3"className="form_input message_input" required></textarea>
                                    <div className="options__checkbox">
                                        <input type="checkbox" name="termos" id="termos"/>
                                        <label className="check_label label_termos" for="termos">Eu concordo com os <a href="#">termos e condições</a></label>
                                    </div>
                                </div>
                                <div className="submit">
                                    <input type="hidden" name="acao" value="enviar"/>
                                    <button type="submit" name="Submit" className="submit_btn">Cadastrar</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            
                <div className="clear"></div>
            </div>
        </section>

        <Footer />
        </main>
        <Controle_Cadastros />
        <Vlibras />

    </>
  )
}