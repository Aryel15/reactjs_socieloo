import React from 'react'
import './style.css'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras';

export default function Ong() {

  return (
    <>
      <Menu />
      <div className="carrossel">
        <div id="carouselresponsive" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselresponsive" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselresponsive" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselresponsive" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className='d-block w-100' src="../imgs/fotosOng/fotos01.jpg" alt="Imagem da ong mostrando os integrantes"/>
                </div>
                <div className="carousel-item">
                    <img className='d-block w-100' src="../imgs/fotosOng/fotos02.jpg" alt="Imagem da ong mostrando os integrantes"/>
                </div>
                <div className="carousel-item">
                    <img className='d-block w-100' src="../imgs/fotosOng/fotos03.jpg" alt="Imagem da ong mostrando os integrantes"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselresponsive" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselresponsive" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
      </div>
      {/* Carrossel*/}
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

            <section className="ong__informations">
                <div className="informations__description">
                    <h1>Adote Sempre Cabe Mais Um - Zona Leste</h1>

                    <div id="description__container">

                        <div className="description__about">
                            <span>Descrição:</span>
                            <p>Animais de rua são vistos cada vez com mais frequência por moradores da Zona Leste,
                                pensando
                                nisso, Abghail Deaij Carluci, protetora de animais há 18 anos, fundadora e presidente da
                                ONG
                                “Adote sempre cabe mais um”, em que 70% dos animais resgatados são da região leste. Os
                                animais
                                são doados já castrados, vacinados, vermifugados e entregues na residência do adotante.
                            </p>
                            <br/>
                            <p>Atualmente a fundadora Abghail alocou um espaço para poder cuidar dos animais abandonados
                                e
                                proporcionar maior conforto a eles. Porém, a verba das doações ainda é baixa em
                                compensação ao
                                número de animais abrigados. Para completar a renda, Abigail oferece projetos vinculados
                                com seu
                                projeto com da ONG, como hospedagem para cães e gatos, táxi dog e decoração para festas.
                            </p>
                        </div>

                        <div className="description__contact">
                            <span>Contato:</span>
                            <ul id="description__social">
                                <li className="social__item">
                                    <a href="#" target="_blank"><img src="../assets/facebook.svg" alt="facebook icon"/></a>
                                </li>
                                <li className="social__item">
                                    <a href="#" target="_blank">
                                        <img src="../assets/instagram.svg" alt="instagram icon"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>


                <div className="informations__botons">
                    <div className="informations__donation">
                        <input type="button" value="DOE PARA ESSA ONG"/>
                    </div>

                    <div className="informations__comments">
                        <textarea name="comments" id="comments" cols="100" rows="6" placeholder="Comente o que achou..."></textarea>

                        <div className="buttons__container">
                            <button>
                                <p>Enviar</p>
                            </button>
                            <button>
                                <p>Compartilhar</p> <img src="../assets/share.svg" alt="instagram icon"/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </section>

        <section className="container__subtle">
            <h2 id="subTitle">Sugestões</h2>
        </section>

        <section className="section__cards">
        </section>
      <Vlibras/>
      <Footer />
    </>
  )
}
