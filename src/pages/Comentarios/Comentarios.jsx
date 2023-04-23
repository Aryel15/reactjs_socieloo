import React from 'react'
import './style.css'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras';

export default function Ong() {

  return (
    <>
      <Menu />
      <div className="title">
            <h1>Adote Sempre Cabe Mais Um - Zona Leste</h1>
            <div className="pos_botao">
                <a href="../pages/ong.html" className="botao">Visão Geral da ONG</a>
            </div>
      </div>
      <section className="section__ong">
            <section className="ong__imagens">

                <ul id="imagens__container">
                    <li className="container__item">
                        <img src="../imgs/fotosOng/fotos01.jpg" alt="Imagem da ong mostrando os integrantes"/>
                    </li>

                    <li className="container__item">
                        <img src="../imgs/fotosOng/fotos02.jpg" alt="Imagem de um cachorro muito engraçado"/>
                    </li>

                    <li className="container__item">
                        <img src="../imgs/fotosOng/fotos03.jpg" alt="Localização da Ong no Google Maps"/>
                    </li>
                </ul>
            </section>

            <section className="secao_coments">
                <div className="informations__description">

                    <div id="coment_usuario">         
                        <img src="../imgs/user.png" alt="Ícone de usuário" id="img-feed"/>  
                        <div className="texto">
                            <h4>@User_logado</h4>
                            <p><i>Seu comentário</i></p>
                            <div className="pos_editbotao">
                                <button className="editbotao">Editar comentário</button>
                                <button className="editbotao">Deletar comentário</button>
                            </div><br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                
                    <div className="coments">
                        <img src="../imgs/user.png" alt="Ícone de usuário" id="img-feed"/>
                        <div className="texto">
                            <h4>@User</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                          
                    <div className="coments">
                        <div>
                            <img src="../imgs/user.png" alt="Ícone de usuário" id="img-feed"/>
                        </div>
                        <div className="texto">
                            <h4>@User</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>

                    <div className="coments">
                        <div>
                            <img src="../imgs/user.png" alt="Ícone de usuário" id="img-feed"/>
                        </div>
                        <div className="texto">
                            <h4>@User</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>

                    <div className="coments">
                        <div>
                            <img src="../imgs/user.png" alt="Ícone de usuário" id="img-feed"/>
                        </div>
                        <div className="texto">
                            <h4>@User</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>

                    <div className="informations__comments">
                        <textarea name="comments" id="comments" cols="100" rows="6" placeholder="Comente o que achou..."></textarea>
                        <button className="botao">Enviar</button>
                    </div>
                </div>
            </section>
      </section>
      <Vlibras/>
    </>
  )
}  