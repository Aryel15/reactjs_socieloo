import React, { useState, useEffect } from 'react'
import './style.css'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import Axios from 'axios'

export default function Perfil_Ong() {
    let id  = localStorage.getItem("id");

    var name;
    const [data, setData] = useState()
    const [stepE, setEStep] = React.useState("Editar_Perfil");
    const editar = {
        Editar_Perfil: <Editar_Perfil step={stepE} setStep={setEStep} data={data}/>,
        Alterar_Senha: <Alterar_Senha step={stepE} setStep={setEStep} data={data} id={id}  />,
        Alterar_Email: <Alterar_Email step={stepE} setStep={setEStep} data={data} id={id}  />,
        Deletar_Conta: <Deletar_Conta step={stepE} setStep={setEStep} data={data} id={id} />,
    }
    useEffect(() => {
       if(id === null){
           window.location.pathname = "/perfil-ong"
       }else{
           Axios.get("http://localhost:8080/api/v1/ong/" + id)
           .then((response) => {
               setData(response.data);
               console.log(response.data);
           })
       }
   }, [])

    return (
        <>
            <Menu />
            <main id="edit" >
                <section className="edit__conteiner" id="conteudo" >

                    <aside className="edit__options">
                        <div className="options__photos">
                            <img src="../imgs/fotosOng/fotos01.jpg" alt="foto de perfil escolhida pela ong" />
                            <h1>{data?.nome}</h1>
                        </div>

                        <ul className="options__itens">
                            <li className={stepE === "Editar_Perfil" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Editar_Perfil")}><i className='bx bx-pencil'></i> Editar perfil</a></li>
                            <li className={stepE === "Alterar_Senha" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Alterar_Senha")}><i className='bx bxs-lock-alt'></i> Alterar senha</a></li>
                            <li className={stepE === "Alterar_Email" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Alterar_Email")}><i className='bx bxs-lock-alt'></i> Alterar email</a></li>
                            <li className={stepE === "Deletar_Conta" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Deletar_Conta")}><i className='bx bxs-message-square-x'></i> Deletar conta</a></li>
                        </ul>

                    </aside>

                    <section className="edit__content">
                        {editar[stepE]}
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

                <label for="descricao">Descrição</label>
                <textarea name="descricao" id="descricao" value={data?.descricao}></textarea>
                
                <label for="agencia">Agência</label>
                <input type="text" id="agencia" name="agencia" value={data?.agencia} />

                <label for="contaCorrente">Conta</label>
                <input type="text" id="contaCorrente" name="contaCorrente" value={data?.contaCorrente} />

                <label for="pix">Pix</label>
                <input type="text" id="pix" name="pix" value={data?.pix} />
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