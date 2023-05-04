import React, { useState, useEffect } from 'react';
import './style.css';
import Menu from '../../components/Menu/Menu';
import Vlibras from '../../components/Vlibras/Vlibras';
import Axios from 'axios';


export default function Ong() {
    const id = localStorage.getItem("id")
    const [ong, setOng] = useState(id != null ? true : false);
    const [data, setData] = useState()

    const descricao_padrao = "Animais de rua são vistos cada vez com mais frequência por moradores da Zona Leste, pensando nisso, Abghail Deaij Carluci, protetora de animais há 18 anos, fundadora e presidente da ONG “Adote sempre cabe mais um”, em que 70% dos animais resgatados são da região leste. Os animais são doados já castrados, vacinados, vermifugados e entregues na residência do adotante. Atualmente a fundadora Abghail alocou um espaço para poder cuidar dos animais abandonados e proporcionar maior conforto a eles. Porém, a verba das doações ainda é baixa em compensação ao número de animais abrigados. Para completar a renda, Abigail oferece projetos vinculados com seu projeto com da ONG, como hospedagem para cães e gatos, táxi dog e decoração para festas."

    useEffect(() => {
        Axios.get("http://localhost:8080/api/v1/ong/" + id)
            .then((response) => {
                setOng(true)
                setData(response.data)
                console.log(descricao);
            }, (err) => {
                setOng(false)
                console.log(err);
            })
    }, [])

    return (
        <>
            <Menu />
            {/* Carrossel*/}
            <section className="section__ong">
                <section className="ong__imagens">

                    <ul id="imagens__container">
                        <li className="container__item">
                            <img src="../imgs/fotosOng/fotos01.jpg" alt="Imagem da ong mostrando os integrantes" />
                        </li>

                        <li className="container__item">
                            <img src="../imgs/fotosOng/fotos02.jpg" alt="Imagem de um cachorro muito engraçado" />
                        </li>

                        <li className="container__item">
                            <img src="../imgs/fotosOng/fotos03.jpg" alt="Localização da Ong no Google Maps" />
                        </li>
                    </ul>

                </section>

                <section className="ong__informations">
                    <div className="informations__description">
                        <h1>{ong ? data?.nome : "Adote Sempre Cabe Mais Um - Zona Leste"}</h1>

                        <br />
                        <div id="description__container">

                            <div className="description__about">
                                <span>Descrição:</span>
                                <p>
                                    {ong ? data?.descricao : descricao_padrao}
                                </p>
                            </div>

                            <br />
                            <div className='description__adress__bank'>
                                <div className="description__adress">
                                    <span>Endereço:</span>
                                    <p>{ong ? data?.endereco :"Av. Miguel Ignácio Curi"}, 111 - Artur Alvim, São Paulo - SP, {ong ? data?.cep : "08295-005"}</p>
                                </div>

                                <div className="description__bank">
                                    <p>Dados bancários:</p>
                                    <p>Agência:</p>
                                    <p>{ong ? data?.agencia : "1234"}</p>
                                    <p>Conta corrente:</p>
                                    <p>{ong ? data?.contaCorrente : "12345678-9"}</p>
                                    <br />
                                    <p>Pix:</p>
                                    <p>{ong ? data?.pix : "adotemaisumPix@gmail.com"}</p>
                                </div>
                            </div>

                        </div>


                    </div>


                    <div className="informations__botons">
                        <div className="informations__comments">
                            <textarea name="comments" id="comments" cols="100" rows="6" placeholder="Comente o que achou..."></textarea>

                            <div className="buttons__container">
                                <button>
                                    <p>Enviar</p>
                                </button>
                                <button>
                                    <p>Compartilhar</p> <img src="../assets/share.svg" alt="instagram icon" />
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
            <Vlibras />
        </>
    )
}
