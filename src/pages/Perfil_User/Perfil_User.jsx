import React, { useState, useEffect } from 'react'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import './style.css'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function Perfil_User() {
    const [fotoPerfil, setFotoPerfil] = React.useState("../assets/camera.svg");
    const [data, setData] = useState()
    const [stepE, setEStep] = React.useState("Editar_Perfil");
    const id = localStorage.getItem("id")
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    const editar = {
        Editar_Perfil: <Editar_Perfil data={data} id={id} token={token}/>,
        Alterar_Senha: <Alterar_Senha data={data} id={id} token={token} />,
        Alterar_Email: <Alterar_Email data={data} id={id} token={token} />,
        Deletar_Conta: <Deletar_Conta data={data} id={id} token={token}/>,
    }

    useEffect(() => {
        if(id === null){
            navigate("/")
        }else{
            Axios.get(`https://socieloo-back.up.railway.app/api/v1/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                setData(response.data);
            })
        }
    }, []) 
  return (
    <>
        <Menu />
        <main class="profile column">
            <div className="options__photos">
                <i class="fa-solid fa-user"></i>
                <h1>{data?.nome} {data?.sobrenome}</h1>
            </div>
            <aside className="edit__options">
                <ul className="options__itens">
                    <li className={stepE === "Editar_Perfil" ? "select" : ""}><Link to="javascript:void(0);" className="options__item" onClick={() => setEStep("Editar_Perfil")}><i className='bx bx-pencil'></i> Editar perfil</Link></li>
                    <li className={stepE === "Alterar_Senha" ? "select" : ""}><Link to="javascript:void(0);" className="options__item" onClick={() => setEStep("Alterar_Senha")}><i className='bx bxs-lock-alt'></i> Alterar senha</Link></li>
                    <li className={stepE === "Alterar_Email" ? "select" : ""}><Link to="javascript:void(0);" className="options__item" onClick={() => setEStep("Alterar_Email")}><i className='bx bxs-lock-alt'></i> Alterar email</Link></li>
                    <li className={stepE === "Deletar_Conta" ? "select" : ""}><Link to="javascript:void(0);" className="options__item" onClick={() => setEStep("Deletar_Conta")}><i className='bx bxs-message-square-x'></i> Deletar conta</Link></li>
                </ul>
            </aside>
            <section className="edit__content"  id='conteudo'>
            {editar[stepE]}
            </section>
        </main>
        <Vlibras />
    </>
  )
}
function Editar_Perfil({data, id, token}){
    useEffect(_=> {
        setAlterar({...alterar, nome: data?.nome||"", sobrenome: data?.sobrenome||""})
    },[data])
    const [msg, setMsg] = useState("")
    const [alterar, setAlterar] = useState({
        nome:'',
        sobrenome:'',
    })

    const handleClickEditar_Perfil = e =>{
        e.preventDefault()
        Axios.put(`https://socieloo-back.up.railway.app/api/v1/user/${id}`,{
            id: data.id,
            login: data.login,
            dataCadastro: data.dataCadastro,
            favoritos: data.favoritos,
            role: data.role,
            authorities: data.authorities,
            nome: alterar.nome,
            sobrenome: alterar.sobrenome
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setPopUp(popBox);
            setTimeout(() => {
                setPopUp("");
            }, 2000); 
        }).catch((err) => console.log(err))
    }
    const popBox = (
        <section className="popup">
          <div className="boxpopup">
            <i class="fa-solid fa-circle-check"></i>
            <p>Dados atualizados com sucesso!</p>
            <div className="progress-bar"></div>
          </div>
        </section>
    )

    const [popUp, setPopUp] = useState("")
    return(
        <>
            <form action="#" class="content__form">
                <h2>Editar Perfil</h2>
                <div>
                    <label for="nome">Nome</label>
                    <input type="text" name="nome" id="nome" value={alterar?.nome} onChange={e => setAlterar({...alterar, nome:e.target.value})}/>
                </div>
                <div>
                    <label for="sobrenome">Sobrenome</label>
                    <input type="text" name="sobrenome" id="sobrenome" value={alterar?.sobrenome} onChange={e => setAlterar({...alterar, sobrenome:e.target.value})}/>
                </div>
                <button type="submit" class="button_perfil" onClick={handleClickEditar_Perfil}>Salvar alterações</button>
            </form>
            {popUp}
        </>
    )
}
function Alterar_Email({ stepE, setEStep, data, id, token }) {
    const [msg, setMsg] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    const handleClickAlterarEmail = e =>{
        e.preventDefault()
        Axios.put(`https://socieloo-back.up.railway.app/api/v1/user/${id}`, {
            login: email,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            
            setPopUp(popBox);
            setTimeout(() => {
                setPopUp("")
                navigate("/perfil")
            }, 2000); 

        })
    }
    const popBox = (
        <section className="popup">
          <div className="boxpopup">
            <i class="fa-solid fa-circle-check"></i>
            <p>Seu Email foi atualizado com sucesso!</p>
            <div className="progress-bar"></div>
          </div>
        </section>
    )

    const [popUp, setPopUp] = useState("")
    return (
        <>
            <form action="#" className="content__form senha" onSubmit={handleClickAlterarEmail}>
                <h2>Alterar Email</h2>
                <p className="mensagem-as">{msg}</p>
                <label for="email">Email</label>
                <input type="email" id="email" name="login" value={data?.login} />
                <label for="newEmail">Email novo</label>
                <input type="email" id="newEmail" name="newEmail" onChange={e => setEmail(e.target.value)}/>
                <button type="submit" className="button-as">Alterar</button>
            </form>
            {popUp}
        </>
    )
}

function Alterar_Senha({ data, id, token}) {
    
    const [msg, setMsg] = useState("")
    const [senhaErrada, setSenhaErrada] = useState("")
    const [senhaFraca, setSenhaFraca] = useState("")
    const [senha, setSenha] = useState("")
    const [senhaDiferente, setSenhaDiferente] = useState("")
    const [novaSenha, setNovaSenha] = useState("")
    const [senhaAtual, setSenhaAtual] = useState("")
    const navigate = useNavigate()

    const senhaForte = (senha) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return regex.test(senha);
    };


    const popBox = (
        <section className="popup">
          <div className="boxpopup">
            <i class="fa-solid fa-circle-check"></i>
            <p>Sua senha foi alterada com sucesso!</p>
            <div className="progress-bar"></div>
            
          </div>
        </section>
    )
    const [popUp, setPopUp] = useState("")

    const handleClickAlterarSenha = e => {

        e.preventDefault()
        if (!senhaForte(senha)) {
            setSenhaFraca('Senha fraca');
            setSenhaErrada("")
            return;
        } else {
            if (senha !== novaSenha) {
                setSenhaFraca('');
                setSenhaDiferente('As senhas são diferentes');
                console.log('As senhas são diferentes');
                return;
            } else {
                setSenhaDiferente('');
                Axios.put(`https://socieloo-back.up.railway.app/api/v1/user/${id}`,{
                    senha: senha,
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then((response) => {
                    setPopUp(popBox);
                    setTimeout(() => {
                        setPopUp("");
                        navigate("/perfil")
                    }, 2000); 
                })
            }
        }
/*         if(senhaAtual == data.senha){
        }else{
            setSenhaErrada("Senha atual está errada")
        } */
        
    
    }


    return (
        <>
            <form action="#" className="content__form senha" onSubmit={handleClickAlterarSenha}>
                <h2>Alterar Senha</h2>
                <p className="mensagem-as">{msg}</p>
{/*                 <div>
                    <label for="senha">Senha atual</label>
                    <input type="password" name="senha" id="senha" onChange={e => setSenhaAtual(e.target.value)}/>
                    <p className="senha-fraca">{senhaErrada}</p>
                </div> */}

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

                <button type="submit" className="button-as" to="/perfil">Salvar alterações</button>

            </form>
            
         {popUp}
        </>
    )
}

function Deletar_Conta({data, id, token }) {
    function Delete() {
        Axios.delete(`https://socieloo-back.up.railway.app/api/v1/user/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            setPopUp(popBox);
            localStorage.removeItem("id");
            localStorage.removeItem("tipo");
            setTimeout(() => {
                navigate("/")
            }, 2000); 
        })

        
    }
    const [deletar, setDeletar] = useState(false)
    const [msg, setMsg] = useState("")

    const popBox = (
        <section className="popup">
          <div className="boxpopup">
            <i class="fa-solid fa-circle-check"></i>
            <p>Sua conta foi deletada com sucesso!</p>
            <div className="progress-bar"></div>
          </div>
        </section>
    )
    const [popUp, setPopUp] = useState("")

    return (
        <>
            <form action="#" className="content__form senha">
                <h2>Deletar Conta</h2>
                <p>Tem certeza que deseja deletar sua conta?</p>
                <div className="buttons-delete">
                    <Link className="button-s" onClick={() => setDeletar(true)}>Sim</Link>
                    <Link className="button-as" to="/perfil">Não</Link>
                </div>
                {deletar === true ? <Link className="button-as delete" onClick={Delete}>Deletar conta</Link> : ""}
            </form>
            {popUp}
        </>
    )
}
