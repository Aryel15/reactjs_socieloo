import React from 'react'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import './style.css'

export default function Avaliacao() {
  return (
    <>
      <Menu/>
      <main className="main_content container">
        <section className="section-seu-codigo container">
            <div className="content">
                <div id="box-artigo" className="box-artigo">
                    <div className="container_form">
                        <h1>Avaliação das ONGs</h1>
                        <form className="form" action="#" method="post">
                            <div className="form_grupo">
                                <label for="nome" className="form_label">Avalie uma ONG de sua preferência</label>
                                <input type="text" name="nome" className="form_input" id="nome"
                                    placeholder="Escreva o nome da ONG" required/>
                            </div>

                            <div className="avaliacao__container">
                                <ul className="avaliacao">
                                    <li className="star-icon ativo" data-avaliacao="1"></li>
                                    <li className="star-icon" data-avaliacao="2"></li>
                                    <li className="star-icon" data-avaliacao="3"></li>
                                    <li className="star-icon" data-avaliacao="4"></li>
                                    <li className="star-icon" data-avaliacao="5"></li>
                                </ul>
                            </div>

                            <div className="form_grupo">
                                <div className="form_message">
                                    <label for="message" className="form_message_label"> Escreva sua revisão aqui:</label>
                                    <textarea name="mensagem" id="message" cols="30" rows="3"
                                        className="form_input message_input" required></textarea>
                                </div>
                                <div className="options__checkbox">
                                    <input type="checkbox" name="termos" id="termos"/>
                                    <label className="check_label" for="termos">Eu concordo com os <a href="#">termos e
                                            condições</a></label>
                                </div>
                                <div className="submit">
                                    <input type="hidden" name="acao" value="enviar"/>
                                    <button type="submit" name="Submit" className="submit_btn">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        </section>
      </main>
      <Footer/>
      <Vlibras/>
    </>
  )
}
