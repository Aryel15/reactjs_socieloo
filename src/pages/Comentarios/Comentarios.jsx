import React from 'react'
import './style.css'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

export default function Ong() {

  return (
    <>
      <Menu />
      <div className="carrossel">
        <Carousel>
            <Carousel.Item>
                <img className='d-block w-100' src="../imgs/fotosOng/fotos01.jpg" alt="Imagem da ong mostrando os integrantes"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100' src="../imgs/fotosOng/fotos02.jpg" alt="Imagem da ong mostrando os integrantes"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100' src="../imgs/fotosOng/fotos03.jpg" alt="Imagem da ong mostrando os integrantes"/>
            </Carousel.Item>
        </Carousel>
      </div>
      <div class="title">
            <h1>Adote Sempre Cabe Mais Um - Zona Leste</h1>
            <div class="pos_botao">
                <a href="../pages/ong.html" class="botao">Visão Geral da ONG</a>
            </div>
      </div>
      <section class="section__ong">
            <section class="ong__imagens">

                <ul id="imagens__container">
                    <li class="container__item">
                        <img src="../imgs/fotosOng/fotos01.jpg" alt="Imagem da ong mostrando os integrantes"/>
                    </li>

                    <li class="container__item">
                        <img src="../imgs/fotosOng/fotos02.jpg" alt="Imagem de um cachorro muito engraçado"/>
                    </li>

                    <li class="container__item">
                        <img src="../imgs/fotosOng/fotos03.jpg" alt="Localização da Ong no Google Maps"/>
                    </li>
                </ul>
            </section>

            <section class="secao_coments">
                <div class="informations__description">

                    <div id="coment_usuario">         
                        <img src="../imgs/user.png" alt="Ícone de usuário" id="img-feed"/>  
                        <div class="texto">
                            <h4>@User_logado</h4>
                            <p><i>Seu comentário</i></p>
                            <div class="pos_editbotao">
                                <button class="editbotao">Editar comentário</button>
                                <button class="editbotao">Deletar comentário</button>
                            </div><br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                
                    <div class="coments">
                        <img src="../imgs/user.png" alt="Ícone de usuário" id="img-feed"/>
                        <div class="texto">
                            <h4>@User</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                          
                    <div class="coments">
                        <div>
                            <img src="../imgs/user.png" alt="Ícone de usuário" id="img-feed"/>
                        </div>
                        <div class="texto">
                            <h4>@User</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>

                    <div class="coments">
                        <div>
                            <img src="../imgs/user.png" alt="Ícone de usuário" id="img-feed"/>
                        </div>
                        <div class="texto">
                            <h4>@User</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>

                    <div class="coments">
                        <div>
                            <img src="../imgs/user.png" alt="Ícone de usuário" id="img-feed"/>
                        </div>
                        <div class="texto">
                            <h4>@User</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>

                    <div class="informations__comments">
                        <textarea name="comments" id="comments" cols="100" rows="6" placeholder="Comente o que achou..."></textarea>
                        <button class="botao">Enviar</button>
                    </div>
                </div>
            </section>
      </section>
      <Footer/>
      <Vlibras/>
    </>
  )
}  