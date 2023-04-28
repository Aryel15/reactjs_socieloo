import React, { useState, useEffect } from 'react'
import './style.css'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import Axios from 'axios'

export default function Perfil_Ong() {
    const id = localStorage.getItem("id")
    const [data, setData] = useState()
    const [ong, setOng] = useState();
    const [stepE, setEStep] = React.useState("Editar_Perfil");
    const editar = {
        Editar_Perfil: <Editar_Perfil step={stepE} setStep={setEStep} data={data} />,
        Alterar_Senha: <Alterar_Senha step={stepE} setStep={setEStep} data={data} id={id}  />,
        Alterar_Email: <Alterar_Email step={stepE} setStep={setEStep} data={data} id={id}  />,
        Deletar_Conta: <Deletar_Conta step={stepE} setStep={setEStep} data={data} id={id} />,
    }
    useEffect(() => {
        Axios.get("http://localhost:8080/api/v1/ong/" + id)
            .then((response) => {
                setData(response.data);
                if(data.descricao === undefined){
                    setOng(false)
                }else{
                    setOng(true)
                }
            })
    }, [])

    return (
        <>
            <Menu />
            <main id="edit" >
                <section className="edit__conteiner" id="conteudo" >

                    <aside className="edit__options">
                        <div className="options__photos">
                            {ong === true ? <img src="../imgs/fotosOng/fotos01.jpg" alt="foto de perfil escolhida pela ong" /> : ""}
                            <h1>{data?.nome}</h1>
                        </div>

                        <ul className="options__itens">
                            {ong === true ?
                                <>
                                    <li className={stepE === "Editar_Perfil" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Editar_Perfil")}><i className='bx bx-pencil'></i> Editar perfil</a></li>
                                    <li className={stepE === "Alterar_Senha" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Alterar_Senha")}><i className='bx bxs-lock-alt'></i> Alterar senha</a></li>
                                    <li className={stepE === "Alterar_Email" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Alterar_Email")}><i className='bx bxs-lock-alt'></i> Alterar email</a></li>
                                    <li className={stepE === "Deletar_Conta" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Deletar_Conta")}><i className='bx bxs-message-square-x'></i> Deletar conta</a></li>
                                </> : ""
                            }
                        </ul>

                    </aside>

                    <section className="edit__content">
                        {ong === true ? editar[stepE] : <Criar_Conta data={data} id={id} setOng={setOng}/>}
                    </section>
                </section>
            </main>
            <Vlibras />
        </>
    )
}

function Editar_Perfil({ stepE, setEStep, data }) {
    return (
        <>
            <h2>Editar perfil</h2>
            <form action="#" className="content__form">
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" value={data?.nome} />

                <label for="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone" value={data?.telefone} />

                <label for="endereço">Endereço</label>
                <input type="text" id="endereço" name="endereço" value={data?.endereco} />

                <label for="Sobre">Descrição</label>
                <textarea name="Sobre" id="Sobre" value={data?.descricao}></textarea>

                <div className="form__button">
                    <button>Salvar edição</button>
                </div>
            </form>
        </>
    )
}

function Alterar_Email({ stepE, setEStep, data, id }) {
    const [msg, setMsg] = useState("")
    const [email, setEmail] = useState("")

    const handleClickAlterarEmail = e =>{
        e.preventDefault()
        console.log(email);
        Axios.put(`http://localhost:8080/api/v1/ong/${id}`,{
            email: email,
        }).then((response) => {
            console.log(response);
            setMsg("✔ Você mudou seu email")
            setTimeout(() => {
                window.location.pathname = "/perfil-ong"
            }, 2000); 
        })
    }

    return (
        <>
            <form action="#" className="content__form senha" onSubmit={handleClickAlterarEmail}>
                <h2>Alterar Email</h2>
                <p className="mensagem-as">{msg}</p>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" value={data?.email} />
                <label for="newEmail">Email novo</label>
                <input type="email" id="newEmail" name="newEmail" onChange={e => setEmail(e.target.value)}/>
                <button type="submit" className="button-as">Alterar</button>
            </form>
        </>
    )
}
function Alterar_Senha({ stepE, setEStep, data, id}) {

    const [msg, setMsg] = useState("")
    const [senhaFraca, setSenhaFraca] = useState("")
    const [senha, setSenha] = useState("")
    const [senhaDiferente, setSenhaDiferente] = useState("")
    const [novaSenha, setNovaSenha] = useState("")

    const senhaForte = (senha) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return regex.test(senha);
    };

    const handleClickAlterarSenha = e => {
        e.preventDefault()
        if (!senhaForte(senha)) {
            setSenhaFraca('Senha fraca');
            return;
        } else {
            if (senha !== novaSenha) {
                setSenhaFraca('');
                setSenhaDiferente('As senhas são diferentes');
                return;
            } else {
                setSenhaDiferente('');
                Axios.put(`http://localhost:8080/api/v1/ong/${id}`,{
                    senha: senha,
                }).then((response) => {
                    console.log(response);
                    setMsg("✔ Você mudou sua senha")
                    setTimeout(() => {
                        window.location.pathname = "/perfil-ong"
                    }, 2000); 
                })
            }
        }
    }


    return (
        <>
            <form action="#" className="content__form senha" onSubmit={handleClickAlterarSenha}>
                <h2>Alterar Senha</h2>
                <p className="mensagem-as">{msg}</p>
                <div>
                    <label for="senha">Senha atual</label>
                    <input type="password" name="senha" id="senha" value={data?.senha} />
                </div>

                <div>
                    <label for="novaSenha">Nova senha</label>
                    <input type="password" name="novaSenha" id="novaSenha" onChange={e => setNovaSenha(e.target.value)}/>
                    <p className="senha-fraca">{senhaFraca}</p>
                </div>

                <div>
                    <label for="repeteSenha">Repita nova senha</label>
                    <input type="password" name="repeteSenha" id="repeteSenha" onChange={e => setSenha(e.target.value)}/>
                    <p className="senha-fraca">{senhaDiferente}</p>
                </div>

                <button type="submit" className="button-as">Salvar alterações</button>
            </form>
        </>
    )
}

function Deletar_Conta({ stepE, setEStep, data, id }) {
    function Delete() {
        Axios.delete("http://localhost:8080/api/v1/ong/" + id)
            .then((response) => {
                console.log(response.data);
            })
        localStorage.removeItem("id");
        setMsg("Sua Ong foi deletada")
        setTimeout(() => {
            window.location.pathname = "/"
        }, 2000); 
        
    }
    const [deletar, setDeletar] = useState(false)
    const [msg, setMsg] = useState("")
    return (
        <>
            <form action="#" className="content__form senha">
                <h2>Deletar Conta</h2>
                <p>Tem certeza que deseja deletar sua conta?</p>
                <div className="buttons-delete">
                    <a className="button-s" onClick={() => setDeletar(true)}>Sim</a>
                    <a className="button-as" href="/perfil-ong">Não</a>
                </div>
                {deletar === true ? <a className="button-as delete" onClick={Delete}>Deletar conta</a> : ""}
                <p className="mensagem">{msg}</p>
            </form>
        </>
    )
}
function Criar_Conta({ data, id, setOng }) {
    const [msg, setMsg] = useState("")
    const [cadastro, setCadastro] = useState({
        regiao: '',
        agencia: '',
        conta: '',
        pix: '',
        imagens: '',
        descricao: '',
        segmento: ''
    })

    const handleClickCadastro = e => {
        e.preventDefault()
        console.log(cadastro);
        setOng(true);
        /*Axios.put(`http://localhost:8080/api/v1/ong/${id}`, {
            endereco: cadastro.regiao,
            agencia: cadastro.agencia,
            conta: cadastro.conta,
            pix: cadastro.pix,
            imagens: cadastro.imagens,
            descricao: cadastro.descricao,
            segmento: cadastro.segmento
        }).then((response) => {
            localStorage.setItem("id", response.data.id);
            console.log(response.data);
            setMsg("✔ Você completou o cadastro")
            setTimeout(() => {
                setOng(true);
            }, 2000); 
        })*/
    }
    const valorCadastro = e => setCadastro({ ...cadastro, [e.target.name]: e.target.value });

    return (
        <>
            <form action="" method="post" onSubmit={handleClickCadastro}>
                <h1 className="section__title">Cadastre sua ONG</h1>
                <p className="mensagem-cad">{msg}</p>
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
                                <input type="text" id="agencia" name="agencia" onChange={valorCadastro} required />
                            </div>
                            <div className="conta">
                                <label for="conta">Conta</label>
                                <input type="text" id="conta" name="conta" onChange={valorCadastro} required />
                            </div>
                        </div>
                        <label for="pix">Pix</label>
                        <input type="text" id="pix" name="pix" onChange={valorCadastro} required />
                        <label htmlFor="imagens">Imagens</label>
                        <input type="file" name="imagens" id="imagens" onChange={valorCadastro} />
                        <label for="descricao">Descrição</label>
                        <textarea name="descricao" id="descricao" cols="30" rows="10" onChange={valorCadastro} ></textarea>
                    </div>

                    <div className="group__about">
                        <div className="about__radios">
                            <p>Qual a causa da sua ONG?</p>
                            <div className="radio__options">
                                <input type="radio" id="saude" name="segmento" value="saude" onChange={valorCadastro} />
                                <label for="saude">Saúde</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="educacao" value="educacao" name="segmento" onChange={valorCadastro} />
                                <label for="educacao">Educação</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="cidadania" value="cidadania" name="segmento" onChange={valorCadastro} />
                                <label for="cidadania">Cidadania</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="culturaOuEsporte" value="culturaOuEsporte" name="segmento" onChange={valorCadastro} />
                                <label for="culturaOuEsporte">Cultura ou esporte</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="generoOudiversidade" value="generoOudiversidade" name="segmento" onChange={valorCadastro} />
                                <label for="generoOudiversidade">Gênero e diversidade</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="meioAmbiente" value="meioAmbiente" name="segmento" onChange={valorCadastro} />
                                <label for="meioAmbiente">Meio ambiente</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="protecaoAmbiental" value="protecaoAmbiental" name="segmento" onChange={valorCadastro} />
                                <label for="protecaoAmbiental">Proteção Ambiental</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="outro" value="outro" name="segmento" onChange={valorCadastro} />
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
