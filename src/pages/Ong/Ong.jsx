import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import Menu from '../../components/Menu/Menu';
import Vlibras from '../../components/Vlibras/Vlibras';
import Axios from 'axios';
import { useParams } from 'react-router-dom';


export default function Ong() {
    const { id } = useParams()
    const [ong, setOng] = useState(id != null ? true : false);
    const [data, setData] = useState()
    const [map, setMap] = useState(<p>...</p>)

    useEffect(() => {
        console.log(id);
        Axios.get("http://localhost:8080/api/v1/ong/" + id)
            .then((response) => {
                setOng(true)
                setData(response.data)
            }, (err) => {
                setOng(false)
                console.log(err);
            })
    }, [])

    useEffect(_ => {
        if(data?.cep != undefined && data?.endereco != undefined){
            let src = 'https://maps.google.com/maps?width=100%25&height=600&hl=pt-br&q=' + (data?.endereco + ", " + data?.cep).replaceAll(" ", "%20").toString() + '+(adress)&t=&z=14&ie=UTF8&iwloc=B&output=embed'

            setMap(<iframe width="100%" height="600" frameborder="0"  marginheight="0" marginwidth="0" src={src}></iframe>)
        }
    }, [data])


    const [step, setStep] = React.useState("Ong");
    const pages = {
        Ong: <OngInfo ong={ong} step={step} setStep={setStep} data={data} id={id} map={map} />,
        Comentarios: <Comentarios step={step} setStep={setStep} data={data} id={id} />,
        Avaliar: <Avaliar step={step} setStep={setStep} data={data} id={id} />,
    }

    return (
        <>
            <Menu />
            <main className="OngPage">
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
                            <p href={data?.segmento} className="button">{data?.segmento}</p>
                            <p href={data?.regiao} className="button">{data?.regiao}</p>
                        </div>

                    </section>
                    {pages[step]}

                </section>
            </main>
            <Vlibras />
        </>
    )
}
function OngInfo({ ong, step, setStep, data, id, map }) {
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
                            <p> <span>Endereço:</span> {data?.endereco}, São Paulo - SP {data?.cep} </p>
                            <br />
                            {map}
                        </div>

                        <div className="description__bank">
                            <p>Dados bancários:</p>
                            <br />
                            <span>Banco:</span>
                            <p>...</p>
                            <br />
                            <span>Agência:</span>
                            <p>{data?.agencia}</p>
                            <br />
                            <span>Conta corrente:</span>
                            <p>{data?.contaCorrente}</p>
                            <br />
                            <span>Pix</span>
                            <p>{data?.pix}</p>
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
                    <button a href={window.location.href}>
                        <p>Compartilhar</p> <img src="../../assets/share.svg" alt="instagram icon" />
                    </button>

                </div>
            </div>
        </section>
    )
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