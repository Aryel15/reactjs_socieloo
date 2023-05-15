import React, { useState, useEffect } from 'react';
import './style.css';
import Menu from '../../components/Menu/Menu';
import Vlibras from '../../components/Vlibras/Vlibras';
import Axios from 'axios';
import { useParams } from 'react-router-dom';


export default function Ong() {
    const { id } = useParams()
    const [ong, setOng] = useState(id != null ? true : false);
    const [data, setData] = useState()

    const descricao_padrao = "Animais de rua são vistos cada vez com mais frequência por moradores da Zona Leste, pensando nisso, Abghail Deaij Carluci, protetora de animais há 18 anos, fundadora e presidente da ONG “Adote sempre cabe mais um”, em que 70% dos animais resgatados são da região leste. Os animais são doados já castrados, vacinados, vermifugados e entregues na residência do adotante. Atualmente a fundadora Abghail alocou um espaço para poder cuidar dos animais abandonados e proporcionar maior conforto a eles. Porém, a verba das doações ainda é baixa em compensação ao número de animais abrigados. Para completar a renda, Abigail oferece projetos vinculados com seu projeto com da ONG, como hospedagem para cães e gatos, táxi dog e decoração para festas."

    useEffect(() => {
        console.log(id);
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
    const [step, setStep] = React.useState("Ong");
    const pages = {
        Ong: <OngInfo ong={ong} step={step} setStep={setStep} data={data} id={id} />,
        Comentarios: <Comentarios step={step} setStep={setStep} data={data} id={id} />,
        Avaliar: <Avaliar step={step} setStep={setStep} data={data} id={id} />,
    }

    return (
        <>
            <Menu />
            <main className="OngPage">
                {/* Carrossel*/}
                <div className="options__photos">
                    <img src={`../../imgs/icons/${data?.segmento}.png`} alt="foto de perfil escolhida pela ong" />
                    <h1>{data?.nome}</h1>
                </div>
                <aside className="edit__options">
                    <ul className="options__itens">
                        <li className={step === "Ong" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setStep("Ong")}><i className='bx bx-pencil'></i> Ong</a></li>
                        <li className={step === "Comentarios" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setStep("Comentarios")}><i className='bx bxs-lock-alt'></i> Comentarios</a></li>
                        <li className={step === "Avaliar" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setStep("Avaliar")}><i className='bx bxs-lock-alt'></i> Avaliar</a></li>
                    </ul>
                </aside>
                <section className="section__ong">
                    <section className="ong__imagens">
                        <img src={`../../imgs/icons/${data?.segmento}.png`} class="ong__image" alt="Imagem da ong mostrando os integrantes" />
                        <div className="btns_card">
                            <a href={data?.segmento} className="button">{data?.segmento}</a>
                            <a href={data?.regiao} className="button">{data?.regiao}</a>
                        </div>
                        {/*<ul id="imagens__container">
                            <li className="container__item">
                                <img src="../imgs/fotosOng/fotos01.jpg" alt="Imagem da ong mostrando os integrantes" />
                            </li>

                            <li className="container__item">
                                <img src="../imgs/fotosOng/fotos02.jpg" alt="Imagem de um cachorro muito engraçado" />
                            </li>

                            <li className="container__item">
                                <img src="../imgs/fotosOng/fotos03.jpg" alt="Localização da Ong no Google Maps" />
                            </li>
                        </ul>*/}

                    </section>
                    {pages[step]}

                </section>
            </main>
            <Vlibras />
        </>
    )
}
function OngInfo({ ong, step, setStep, data, id }) {
    return (
        <section className="ong__informations">
            <div className="informations__description">

                <div id="description__container">

                    <div className="description__about">
                        <span>Descrição:</span>
                        <p>
                            {data?.descricao}
                        </p>
                    </div>
                    <div className='description__adress__bank'>
                        <div className="description__adress">
                            <p> <span>Endereço:</span> {ong ? data?.endereco : "Av. Miguel Ignácio Curi"} </p>
                            <p>  111 - Artur Alvim, São Paulo - SP </p>
                            <p> {ong ? data?.cep : "08295-005"} </p>
                        </div>

                        <div className="description__bank">
                            <p>Dados bancários:</p>
                            <br />
                            <span>Agência:</span>
                            <p>{ong ? data?.agencia : "1234"}</p>
                            <br />
                            <span>Conta corrente:</span>
                            <p>{ong ? data?.contaCorrente : "12345678-9"}</p>
                            <br />
                            <span>Pix</span>
                            <p>{ong ? data?.pix : "adotemaisumPix@gmail.com"}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="informations__botons">
                <div className="buttons__container">
                    <script>
                        let url = location.href;
                        document.getElementById("demo").innerHTML = url;
                    </script>
                    <button onClick={openModal}>
                        <p>Compartilhar</p> <img src="../../assets/share.svg" alt="instagram icon" />
                    </button>
                    <div className="modal-wrapper">
                        <div className="modal-content">
                            <button className="button-close">
                                <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                            <h3 className="modal-title">
                                Compartilhar ONG
                            </h3>
                            <h4 className="modal-subtitle">
                                Compartilhe a ONG com seus amigos!
                            </h4>
                            <div className="modal-link">
                                <span id="link-span">{window.location.href}</span>
                                <button className="btn-copy" onClick={copyURL}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                    Copiar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function openModal() {
    const modalWrapper = document.querySelector(".modal-wrapper")

    modalWrapper.classList.add("opened-modal")
    document.body.classList.add("body-no_scroll")
}

function closeModal() {
    const modalWrapper = document.querySelector(".modal-wrapper")

    modalWrapper.classList.remove("opened-modal")
    document.body.classList.remove("body-no_scroll")
}

async function copyURL() {
    const link = window.location.href

    await navigator.clipboard.writeText(link)

    alert("Link copiado com sucesso!")

    console.log(link)
}

function Comentarios({ step, setStep, data, id }) {
    return (
        <section className="secao_coments">
            <div className="informations__description">

                <div id="coment_usuario">
                    <img src="../../imgs/user.png" alt="Ícone de usuário" id="img-feed" />
                    <div className="texto">
                        <p id="comentarioLogado"><i>Seu comentário</i></p>
                        <h4>@User_logado</h4>

                        <div className="pos_editbotao">
                            <button className="editbotao">Editar comentário</button>
                            <button className="editbotao">Deletar comentário</button>
                        </div><br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>

                <div className="coments">
                    <img src="../../imgs/user.png" alt="Ícone de usuário" id="img-feed" />
                    <div className="texto">
                        <h4>@User</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>

                <div className="coments">
                    <div>
                        <img src="../../imgs/user.png" alt="Ícone de usuário" id="img-feed" />
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
    )
}
function Avaliar({ step, setStep, data, id }) {
    return (
        <>
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
                                            placeholder="Escreva o nome da ONG" required />
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
                                            <input type="checkbox" name="termos" id="termos" />
                                            <label className="check_label" for="termos">Eu concordo com os <a href="#">termos e
                                                condições</a></label>
                                        </div>
                                        <div className="submit">
                                            <input type="hidden" name="acao" value="enviar" />
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
        </>
    )
}