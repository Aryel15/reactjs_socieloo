import React from 'react'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import './style.css'

export default function Avaliacao() {
  return (
    <>
      <Menu/>
      <main class="main_content container">
        <section class="section-seu-codigo container">
            <div class="content">
                <div id="box-artigo" class="box-artigo">
                    <div class="container_form">
                        <h1>Avaliação das ONGs</h1>
                        <form class="form" action="#" method="post">
                            <div class="form_grupo">
                                <label for="nome" class="form_label">Avalie uma ONG de sua preferência</label>
                                <input type="text" name="nome" class="form_input" id="nome"
                                    placeholder="Escreva o nome da ONG" required/>
                            </div>

                            <div class="avaliacao__container">
                                <ul class="avaliacao">
                                    <li class="star-icon ativo" data-avaliacao="1"></li>
                                    <li class="star-icon" data-avaliacao="2"></li>
                                    <li class="star-icon" data-avaliacao="3"></li>
                                    <li class="star-icon" data-avaliacao="4"></li>
                                    <li class="star-icon" data-avaliacao="5"></li>
                                </ul>
                            </div>

                            <div class="form_grupo">
                                <div class="form_message">
                                    <label for="message" class="form_message_label"> Escreva sua revisão aqui:</label>
                                    <textarea name="mensagem" id="message" cols="30" rows="3"
                                        class="form_input message_input" required></textarea>
                                </div>
                                <div class="options__checkbox">
                                    <input type="checkbox" name="termos" id="termos"/>
                                    <label class="check_label" for="termos">Eu concordo com os <a href="#">termos e
                                            condições</a></label>
                                </div>
                                <div class="submit">
                                    <input type="hidden" name="acao" value="enviar"/>
                                    <button type="submit" name="Submit" class="submit_btn">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </section>
      </main>
      <Footer/>
      <Vlibras/>
    </>
  )
}
