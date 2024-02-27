import React, { useState, useEffect } from 'react'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import './style.css'
import Axios from 'axios'

export default function Perfil_User() {
    const [fotoPerfil, setFotoPerfil] = React.useState("../assets/camera.svg");
    const [data, setData] = useState()
    const [stepE, setEStep] = React.useState("Editar_Perfil");
    const id = localStorage.getItem("id")
    const editar = {
        Editar_Perfil: <Editar_Perfil data={data} id={id}/>,
        Alterar_Senha: <Alterar_Senha data={data} id={id} />,
        Alterar_Email: <Alterar_Email data={data} id={id} />,
        Deletar_Conta: <Deletar_Conta data={data} id={id}/>,
    }

    useEffect(() => {
        if(id === null){
            window.location.pathname = "/"
        }else{
            Axios.get("https://socieloo-back.up.railway.app/api/v1/user/" + id)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
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
           {/* <div class="container container-imgs">
                <div class="circle">
                    <img src={fotoPerfil} alt="Alterar Foto" class="fileImg" />
                </div>
                <div class="select-image">
                    <p>Selecione uma imagem</p>
                    <div class="images">
                    <img src="../imgs/voluntario-img1.png" alt="Imagem 1" title="Imagem 1" onClick={() => setFotoPerfil("../imgs/voluntario-img1.png")}/>
                    <img src="../imgs/voluntario-img2.png" alt="Imagem 2" title="Imagem 2" onClick={() =>setFotoPerfil("../imgs/voluntario-img2.png")}/>
                    <img src="../imgs/voluntario-img3.png" alt="Imagem 3" title="Imagem 3" onClick={() =>setFotoPerfil("../imgs/voluntario-img3.png")}/>
                    <img src="../imgs/voluntario-img4.png" alt="Imagem 4" title="Imagem 4" onClick={() =>setFotoPerfil("../imgs/voluntario-img4.png")}/>
                    <img src="../imgs/voluntario-img5.png" alt="Imagem 5" title="Imagem 5" onClick={() =>setFotoPerfil("../imgs/voluntario-img5.png")}/>
                </div>
            </div>          
            </div>*/}  
            <aside className="edit__options">
                <ul className="options__itens">
                    <li className={stepE === "Editar_Perfil" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Editar_Perfil")}><i className='bx bx-pencil'></i> Editar perfil</a></li>
                    <li className={stepE === "Alterar_Senha" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Alterar_Senha")}><i className='bx bxs-lock-alt'></i> Alterar senha</a></li>
                    <li className={stepE === "Alterar_Email" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Alterar_Email")}><i className='bx bxs-lock-alt'></i> Alterar email</a></li>
                    <li className={stepE === "Deletar_Conta" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Deletar_Conta")}><i className='bx bxs-message-square-x'></i> Deletar conta</a></li>
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
function Editar_Perfil({data, id}){
    useEffect(_=> {
        setAlterar({...alterar, nome: data?.nome||"", sobrenome: data?.sobrenome||""})
    },[data])
    const [msg, setMsg] = useState("")
    const [alterar, setAlterar] = useState({
        nome:'',
        sobrenome:'',
    })

    const handleClickEditar_Perfil = e =>{
        
        setPopUp(popBox);
        e.preventDefault()
        Axios.put(`https://socieloo-back.up.railway.app/api/v1/user/${id}`,{
            nome: alterar.nome,
            sobrenome: alterar.sobrenome
        }).then((response) => {
            setTimeout(() => {
                console.log(response)
                setPopUp("");
                window.location.pathname = "/perfil"
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
function Alterar_Email({ stepE, setEStep, data, id }) {
    const [msg, setMsg] = useState("")
    const [email, setEmail] = useState("")
    const handleClickAlterarEmail = e =>{
         setPopUp(popBox);
        e.preventDefault()
        console.log(email);
        Axios.put(`https://socieloo-back.up.railway.app/api/v1/user/${id}`, {
            email: email,
        }).then((response) => {
        
            console.log(response);
            setTimeout(() => {
                setPopUp("")
                window.location.pathname = "/perfil"
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
                <input type="email" id="email" name="email" value={data?.email} />
                <label for="newEmail">Email novo</label>
                <input type="email" id="newEmail" name="newEmail" onChange={e => setEmail(e.target.value)}/>
                <button type="submit" className="button-as">Alterar</button>
            </form>
            {popUp}
        </>
    )
}

function Alterar_Senha({ data, id}) {
    
    const [msg, setMsg] = useState("")
    const [senhaErrada, setSenhaErrada] = useState("")
    const [senhaFraca, setSenhaFraca] = useState("")
    const [senha, setSenha] = useState("")
    const [senhaDiferente, setSenhaDiferente] = useState("")
    const [novaSenha, setNovaSenha] = useState("")
    const [senhaAtual, setSenhaAtual] = useState("")

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
                }).then((response) => {
                    console.log(response);
                    setPopUp(popBox);
                    setTimeout(() => {
                        setPopUp("");
                        window.location.pathname = "/perfil"
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

                <button type="submit" className="button-as" href="/perfil">Salvar alterações</button>

            </form>
            
         {popUp}
        </>
    )
}

function Deletar_Conta({data, id }) {
    function Delete() {
        Axios.delete("https://socieloo-back.up.railway.app/api/v1/user/" + id)
        .then((response) => {
            setPopUp(popBox);
            console.log(response.data);        
            localStorage.removeItem("id");
            localStorage.removeItem("tipo");
            setTimeout(() => {
                window.location.pathname = "/"
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
                    <a className="button-s" onClick={() => setDeletar(true)}>Sim</a>
                    <a className="button-as" href="/perfil">Não</a>
                </div>
                {deletar === true ? <a className="button-as delete" onClick={Delete}>Deletar conta</a> : ""}
            </form>
            {popUp}
        </>
    )
}
