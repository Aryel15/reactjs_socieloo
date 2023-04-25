import React, {useState, useEffect} from 'react'
import './style.css'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import Axios from 'axios'

export default function Perfil_Ong() {
    const [ong, setOng] = useState(true);
    const [stepE, setEStep] = React.useState("Editar_Perfil");
    const editar = {
        Editar_Perfil: <Editar_Perfil step={stepE} setStep={setEStep}/>, 
        Alterar_Senha: <Alterar_Senha step={stepE} setStep={setEStep} />,
        Alterar_Email: <Alterar_Email step={stepE} setStep={setEStep} />,
        Deletar_Conta: <Deletar_Conta step={stepE} setStep={setEStep} />,
    }
    useEffect(() =>{
        Axios.get("")
        .then((response) =>{
            console.log(response);
        })
    })

  return (
    <>
    <Menu/>
    <main id="edit" >
        <section className="edit__conteiner" id="conteudo" >

            <aside className="edit__options">
                <div className="options__photos">
                    {ong === true ? <img src="../imgs/fotosOng/fotos01.jpg" alt="foto de perfil escolhida pela ong"/> :""}
                    <h1>Adote Sempre Cabe Mais Um</h1>
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
function Editar_Perfil({stepE, setEStep}){
    return(
        <>
            <h2>Editar perfil</h2>
            <form action="#" className="content__form">
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" value="Adote Sempre Cabe Mais Um"/>

                <label for="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone" value="+55 (11) 98765-4321"/>

                <label for="endereço">Endereço</label>
                <input type="text" id="endereço" name="endereço" value="R. das Alamandas - Jardim Estancia Brasil"/>

                <label for="Sobre">Descrição</label>
                <textarea name="Sobre" id="Sobre"></textarea>

                <div className="form__button">
                    <button>Salvar edição</button>
                </div>
            </form>
        </>
    )
}
function Alterar_Email ({stepE, setEStep}){
    return(
        <>
            <form action="#" className="content__form senha">
                <h2>Alterar senha</h2>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" value="noobmaster69@hotmail.com"/>
                <label for="email">Email novo</label>
                <input type="email" id="email" name="email"/>
                <button type="submit" className="button-as">Alterar</button>
            </form>
        </>
    )
}
function Alterar_Senha({stepE, setEStep}){
    return(
        <>
            <form action="#" className="content__form senha">
                <h2>Alterar email</h2>
                <div>
                <label for="name">Senha atual</label>
                <input type="text" name="name" id="name" />
                </div>

                <div>
                <label for="nameUser">Nova senha</label>
                <input type="text" name="nameUser" id="nameUser" />
                </div>

                <div>
                <label for="email">Repita nova senha</label>
                <input type="text" name="email" id="email" />
                </div>

                <button type="submit" className="button-as">Salvar alterações</button>
            </form>
        </>
    )
}
function Deletar_Conta({stepE, setEStep}){
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
                {deletar === true ? <a className="button-as delete">Deletar conta</a> : ""}
            </form>
        </>
    )
}
function Criar_Conta(){
    return(
        <>
        <form action="#" method="post">
                <h1 className="section__title">Cadastre sua ONG</h1>
                <section className="form__group">
                    <div className="group__text">
                        <label for="regiao">Região</label>
                        <div id="group__select">
                            <select name="regiao" id="regiao" required>
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
                                <input type="text" id="agencia" name="agencia" required/>
                            </div>
                            <div className="conta">
                                <label for="conta">Conta</label>
                                <input type="text" id="conta" name="conta" required/>
                            </div>
                        </div>
                        <label for="pix">Pix</label>
                        <input type="text" id="pix" name="pix" required/>
                        <label htmlFor="imagens">Imagens</label>
                        <input type="file" name="imagens" id="imagens" />
                        <label for="desc">Descrição</label>
                        <textarea name="desc" id="desc" cols="30" rows="10"></textarea>
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
