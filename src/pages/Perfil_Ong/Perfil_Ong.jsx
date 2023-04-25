import React, {useState, useEffect} from 'react'
import './style.css'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import Axios from 'axios'

export default function Perfil_Ong() {
    const id = localStorage.getItem("id")
    const [data, setData] = useState()
    const [ong, setOng] = useState(true);
    const [stepE, setEStep] = React.useState("Editar_Perfil");
    const editar = {
        Editar_Perfil: <Editar_Perfil step={stepE} setStep={setEStep} data={data}/>, 
        Alterar_Senha: <Alterar_Senha step={stepE} setStep={setEStep} data={data}/>,
        Alterar_Email: <Alterar_Email step={stepE} setStep={setEStep} data={data}/>,
        Deletar_Conta: <Deletar_Conta step={stepE} setStep={setEStep} data={data} id={id}/>,
    }
    useEffect(() =>{
        Axios.get("http://localhost:8080/api/v1/ong/" + id)
        .then((response) =>{
            setData(response.data);
        })
    },[])

  return (
    <>
    <Menu/>
    <main id="edit" >
        <section className="edit__conteiner" id="conteudo" >

            <aside className="edit__options">
                <div className="options__photos">
                    {ong === true ? <img src="../imgs/fotosOng/fotos01.jpg" alt="foto de perfil escolhida pela ong"/> :""}
                    <h1>{data?.nome}</h1>
                </div>

                <ul className="options__itens">
                    {ong === true ? 
                    <>
                        <li className={stepE === "Editar_Perfil" ? "select": ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Editar_Perfil")}><i className='bx bx-pencil'></i> Editar perfil</a></li>
                        <li className={stepE === "Alterar_Senha" ? "select": ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Alterar_Senha")}><i className='bx bxs-lock-alt'></i> Alterar senha</a></li>
                        <li className={stepE === "Alterar_Email" ? "select": ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Alterar_Email")}><i className='bx bxs-lock-alt'></i> Alterar email</a></li>
                        <li className={stepE === "Deletar_Conta" ? "select": ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Deletar_Conta")}><i className='bx bxs-message-square-x'></i> Deletar conta</a></li>
                    </>:""
                    }
                </ul>

            </aside>

            <section className="edit__content">
                {ong === true ? editar[stepE] : <Criar_Conta />}
            </section>
        </section>
    </main>
    <Vlibras/>
    </>
  )
}
function Editar_Perfil({stepE, setEStep, data}){
    return(
        <>
            <h2>Editar perfil</h2>
            <form action="#" className="content__form">
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" value={data?.nome}/>

                <label for="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone" value={data?.telefone}/>

                <label for="endereço">Endereço</label>
                <input type="text" id="endereço" name="endereço" value={data?.endereco}/>

                <label for="Sobre">Descrição</label>
                <textarea name="Sobre" id="Sobre" value={data?.descrição}></textarea>

                <div className="form__button">
                    <button>Salvar edição</button>
                </div>
            </form>
        </>
    )
}
function Alterar_Email ({stepE, setEStep, data}){
    return(
        <>
            <form action="#" className="content__form senha">
                <h2>Alterar senha</h2>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" value={data?.email}/>
                <label for="newEmail">Email novo</label>
                <input type="email" id="newEmail" name="newEmail"/>
                <button type="submit" className="button-as">Alterar</button>
            </form>
        </>
    )
}
function Alterar_Senha({stepE, setEStep, data}){
    return(
        <>
            <form action="#" className="content__form senha">
                <h2>Alterar email</h2>
                <div>
                <label for="senha">Senha atual</label>
                <input type="password" name="senha" id="senha" value={data?.senha}/>
                </div>

                <div>
                <label for="novaSenha">Nova senha</label>
                <input type="password" name="novaSenha" id="novaSenha" />
                </div>

                <div>
                <label for="repeteSenha">Repita nova senha</label>
                <input type="password" name="repeteSenha" id="repeteSenha" />
                </div>

                <button type="submit" className="button-as">Salvar alterações</button>
            </form>
        </>
    )
}
function Deletar_Conta({stepE, setEStep, data, id}){
    function Delete(){
        Axios.delete("http://localhost:8080/api/v1/ong/" + id)
        .then((response) =>{
            console.log(response.data);
        })
        localStorage.removeItem("id");
        window.location.pathname = "/";
    }
    const [deletar, setDeletar] = useState(false)
    return(
        <>
            <form action="#" className="content__form senha">
                <h2>Deletar Conta</h2>
                <p>Tem certeza que deseja deletar sua conta?</p>
                <div className="buttons-delete">
                    <a className="button-s" onClick={() => setDeletar(true)}>Sim</a>
                    <a className="button-as" href="/perfil-ong">Não</a>
                </div>
                {deletar === true ? <a className="button-as delete" onClick={Delete}>Deletar conta</a> : ""}
            </form>
        </>
    )
}
function Criar_Conta(){
    const [cadastro, setCadastro] = useState({
        regiao:'',
        agencia:'',
        conta:'',
        pix:'',
        imagens:'',
        descrição:'',
        segmento:''
    })
    function handleClickCadastro(){
        console.log(cadastro);
    }
    return(
        <>
        <form action="#" method="post" onSubmit={handleClickCadastro}>
                <h1 className="section__title">Cadastre sua ONG</h1>
                <section className="form__group">
                    <div className="group__text">
                        <label for="regiao">Região</label>
                        <div id="group__select">
                            <select name="regiao" id="regiao" onChange={valorCadastro} required>
                                <option value="#" selected disabled>Selecione uma opção</option>
                                <option value="norte">Zona Norte</option>
                                <option value="sul">Zona Sul</option>
                                <option value="centro">Centro</option>
                                <option value="leste">Zona Leste</option>
                                <option value="oeste">Zona Oeste</option>
                            </select>
                        </div>
                        <div className="banco">
                            <div className="agencia">
                                <label for="agencia">Agência</label>
                                <input type="text" id="agencia" name="agencia" onChange={valorCadastro} required/>
                            </div>
                            <div className="conta">
                                <label for="conta">Conta</label>
                                <input type="text" id="conta" name="conta" onChange={valorCadastro} required/>
                            </div>
                        </div>
                        <label for="pix">Pix</label>
                        <input type="text" id="pix" name="pix" onChange={valorCadastro} required/>
                        <label htmlFor="imagens">Imagens</label>
                        <input type="file" name="imagens" id="imagens" onChange={valorCadastro} />
                        <label for="desc">Descrição</label>
                        <textarea name="desc" id="desc" cols="30" rows="10" onChange={valorCadastro} ></textarea>
                    </div>

                    <div className="group__about">
                        <div className="about__radios">
                            <p>Qual a causa da sua ONG?</p>
                            <div className="radio__options">
                                <input type="radio" id="saude" name="causa"/>
                                <label for="saude">Saúde</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="educacao" name="causa"/>
                                <label for="educacao">Educação</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="cidadania" name="causa"/>
                                <label for="cidadania">Cidadania</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="culturaOuEsporte" name="causa"/>
                                <label for="culturaOuEsporte">Cultura ou esporte</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="generoOudiversidade" name="causa"/>
                                <label for="generoOudiversidade">Gênero e diversidade</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="meioAmbiente" name="causa"/>
                                <label for="meioAmbiente">Meio ambiente</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="protecaoAmbiental" name="causa"/>
                                <label for="protecaoAmbiental">Proteção Ambiental</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="outro" name="causa"/>
                                <label for="outro">Outro</label>
                            </div>
                        </div>
                        <div className="form__button">
                            <button>Finalizar Cadstro</button>
                        </div>
                    </div>
                </section>
            </form>
        </>
    )
}
