import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import Menu from '../../components/Menu/Menu';
import Vlibras from '../../components/Vlibras/Vlibras';
import Axios from 'axios';
import { useParams } from 'react-router-dom';


export default function Ong() {
    const { id } = useParams()
    const idUser = localStorage.getItem("id")
    const tipo = localStorage.getItem("tipo")
    const [ong, setOng] = useState(id != null ? true : false);
    const [data, setData] = useState()
    const [map, setMap] = useState(<p>...</p>)
    const [favorito, setFavorito] = useState(false)
    const [favoritos, setFavoritos] = useState("")

    useEffect(() => {
        console.log(id);
        Axios.get("https://socieloo-back.onrender.com/api/v1/ong/" + id)
            .then((response) => {
                setOng(true)
                setData(response.data)
                Axios.get("https://socieloo-back.onrender.com/api/v1/ong/ongFavoritadas")
                .then((res) => {
                    const result = res.data.find(item => item[0] === response.data.nome);
                    setFavoritos(result[1])
                })
            }, (err) => {
                setOng(false)
                console.log(err);
            })
            Axios.get(`https://socieloo-back.onrender.com/api/v1/user/${idUser}`)
            .then((response) =>{
                var favoritos = response.data.favoritos
                const ongFav = favoritos.find(element => element == id);
                if (ongFav == id) {
                    setFavorito(true)
                }else{
                    setFavorito(false)
                }
            })
    }, [])

    useEffect(_ => {
        if(data?.cep != undefined && data?.endereco != undefined){
            let src = 'https://maps.google.com/maps?width=100%25&height=600&hl=pt-br&q=' + (data?.endereco + ", " + data?.cep).replaceAll(" ", "%20").toString() + '+(adress)&t=&z=14&ie=UTF8&iwloc=B&output=embed'

            setMap(<iframe width="400px" height="300px" frameborder="0"  marginheight="0" marginwidth="0" src={src}></iframe>)
        }
    }, [data])


    const [step, setStep] = React.useState("Ong");
    const pages = {
        Ong: <OngInfo ong={ong} step={step} setStep={setStep} data={data} id={id} map={map} />,
        Comentarios: <Comentarios step={step} setStep={setStep} data={data} id={id} />,
        Avaliar: <Avaliar step={step} setStep={setStep} data={data} id={id} />,
    }
    function Favoritar(){
        Axios.get(`https://socieloo-back.onrender.com/api/v1/user/${idUser}`)
        .then((response) =>{
            var favoritos = response.data.favoritos
            const ongPage = favoritos.find(element => element == id);
            if (ongPage == id) {
                favoritos.splice(favoritos.indexOf(parseInt(id)), 1);
                console.log(favoritos);
                setFavorito(false)
            }else{
                favoritos.push(id)
                console.log(favoritos);
                setFavorito(true)
            }
           
            Axios.put(`https://socieloo-back.onrender.com/api/v1/user/${idUser}`, {
                favoritos: favoritos
            })
            .then((response) =>{
                console.log(favoritos);
                console.log(response.data);
            })
    
        })
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
                            <br />
                        </div>
                        {tipo === 'admin' || tipo === 'ong' && idUser === id ?                         
                        <div className="btn_favoritar">
                            <label htmlFor="favorito" className="check">{favoritos} Favoritos<i class="fa-regular fa-heart"></i></label>
                        </div> 
                        : tipo === 'usuario' ?
                        <div className="btn_favoritar">
                            <input type="checkbox" name="favorito" id="favorito" checked={favorito}/>
                            <label htmlFor="favorito" className={favorito == true ? "check" : "notcheck"} onClick={Favoritar} ><i class="fa-regular fa-heart"></i>Favoritar</label>
                        </div> : null
                        }
                            {map}
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
                        </div>

                        <div className="description__bank">
                            <p>Dados para doação:</p>
                            <br />
                            <div className="bank">
                                <span>Banco:</span>
                                <p>{data?.banco}</p>
                            </div>
                            <br />
                            <div className="bank">
                                <span>Agência:</span>
                                <p>{data?.agencia}</p>
                            </div>
                            <br />
                            <div className="bank">
                                <span>Conta corrente:</span>
                                <p>{data?.contaCorrente}</p>
                            </div>
                            <br />
                            <div className="bank">
                                <span>Pix:</span>
                                <p>{data?.pix}</p>
                            </div>
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
    const [comentario, setComentario] = useState()
    const [editar, setEditar] = useState(false)
    const [newText, setNewText] = useState("")
    const [userText, setUserText] = useState("")
    const idUser = localStorage.getItem("id")
    const tipo = localStorage.getItem("tipo")

    Axios.get('https://socieloo-back.onrender.com/api/v1/comentario/todosComentarioOng/' + id)
    .then((response) =>{
        setComentario(response.data)
        const comentariou = response.data.find(
            (c) => c.usuario.id === idUser
          );
      
    })
    function Salvar(e, id){
        e.preventDefault
        console.log(id);
        console.log(newText);
/*         Axios.put('https://socieloo-back.onrender.com/api/v1/comentario'+ id,{
            textoComentario: newText,
        }).then((response) => {
            console.log(response.data)
            setEditar(false)
        }) */
    }
    return (
        <section className="secao_coments">
            <div className="informations__description">

                    {comentario?.map((comentario) => (
                        <div key={comentario.id} id={comentario.usuario.id == idUser && tipo !== "ong" ? "coment_usuario" : null} className={comentario.usuario.id == idUser && tipo !== "ong" ? null : "coments"}>
                            <img src="../../imgs/user.png" alt="Ícone de usuário" id="img-feed" />
                            <div className="texto">
                                {comentario.usuario.id == idUser && tipo !== "ong" ? <p id="comentarioLogado"><i>Seu comentário</i></p> : null}
                                <ul className="avaliacao">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <li className={ value< comentario.avaliacao ? "star-icon-comment" : "star-icon-comment ativo"} ></li>
                                        ))}
                                </ul>
                                <h4>@{comentario.usuario.nome}</h4>
                                {
                                    comentario.usuario.id == idUser && tipo !== "ong"  ? <>
                                    <div className="pos_editbotao">
                                        <button className="editbotao" onClick={() => setEditar(true)}>Editar</button>
                                        <button className="editbotao">Deletar</button><br /> 
                                        {
                                            editar == true ? 
                                            <button className="editbotao" onClick={() => Salvar(comentario.id)}>Salvar</button> : null
                                        }
                                    </div>
                                    <input type="text" className='textoComent' value={comentario.textoComentario} readOnly={!editar} onChange={(e) => setNewText(e.target.value)}/>
                                    </>: <p>{comentario.textoComentario}</p>
                                }
                                
                                
                            </div>
                        </div>
                    ))}

            </div>
        </section>
    )
}
function Avaliar({ step, setStep, data, id }) {
    const [rating, setRating] = useState(1);
    const [text, setText] = useState("")
    const [avaliacao, setAvaliacao] = useState()
    const idUser = localStorage.getItem("id")
    const tipo = localStorage.getItem("tipo")
    useEffect(() =>{
        Axios.get('https://socieloo-back.onrender.com/api/v1/comentario/avaliacoes/'+ id)
        .then((response)=>{
            setAvaliacao(response.data[0])
        })
    }, [])

    const handleClick = (value) => {
      setRating(value);
    };
    function enviarComentario(e){
        e.preventDefault
        Axios.post('https://socieloo-back.onrender.com/api/v1/comentario',{
            ongId: id,
            usuarioId: idUser,
            textoComentario: text,
            avaliacao: rating,
        }).then((response) => console.log(response.data))
    }
    return (
        <>
        {idUser === null ? 
            <main className="main_content container">
                <h1>Faça login para avaliar</h1>
                <div className="botão">
                    <a href="/login" className='link'>Login</a>
                </div>
            </main>
            : tipo === "ong" && idUser === id || tipo === 'admin' ? 
            <main className="main_content container">
                <h1>Avaliações</h1>
                <h3>Quantidade de avaliações:</h3>
                <p>{avaliacao?.qtdAvaliacoes}</p>
                <h3>Soma de avaliações:</h3>
                <p>{avaliacao?.somaAvaliacoes}</p>
                <h3>Média de avaliações:</h3>
                <ul className="avaliacao">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <li className={ value< avaliacao?.mediaAvaliacoes ? "star-icon-comment" : "star-icon-comment ativo"} ></li>
                    ))}
                </ul>
            </main>
            : tipo === "usuario" ?  
            <main className="main_content container">
                <section className="section-seu-codigo container">
                    <div className="content">
                        <div id="box-artigo" className="box-artigo">
                            <div className="container_form">
                                <h1>Avaliação das ONGs</h1>
                                <form className="form" action="javascript:void(0)" onSubmit={enviarComentario} method="post">
                                    <div className="avaliacao__container">
                                    
                                        <ul className="avaliacao">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <li className={value < rating ? "star-icon" : "star-icon ativo"} data-avaliacao="2" onClick={() => handleClick(value)}></li>
                                        ))}
                                        </ul>
                                    </div>

                                    <div className="form_grupo">
                                        <div className="form_message">
                                            <label for="message" className="form_message_label"> Escreva sua revisão aqui:</label>
                                            <textarea name="mensagem" id="message" cols="30" rows="3"
                                                className="form_input message_input" onChange={(e) => setText(e.target.value)} required></textarea>
                                        </div>
                                        <div className="options__checkbox">
                                            <input type="checkbox" name="termos" id="termos" />
                                            <label className="check_label" for="termos">Eu concordo com os <a href="#">termos e
                                                condições</a></label>
                                        </div>
                                        <div className="submit">
                                            <button type="submit" name="Submit" className="submit_btn">Enviar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </section>
            </main> : null}
        </>
    )
}