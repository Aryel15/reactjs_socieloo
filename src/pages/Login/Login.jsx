import React, { useState } from 'react'
import './style.css'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import Axios from 'axios'

export default function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState(true)
    const [popUp, setPopUp] = useState("")

    const popBox = (
        <section className="popup">
          <div className="boxpopup">
            <i class="fa-solid fa-circle-check"></i>
            <p>Seja bem-vindo de volta!</p>
            <div className="progress-bar"></div>
          </div>
        </section>
    )


    const handleClickCadastro = e => {
        e.preventDefault() 
 
        Axios.post(`http://socieloo-back.up.railway.app/api/v1/login`, {
            senha: senha,
            email: email
        }).then((response) => {
            setPopUp(popBox)
            const id = response.data.id
            localStorage.setItem("id", id)
            if(response.data.role === "ONG"){
                localStorage.setItem("tipo", "ong");
                setTimeout(() => {
                    window.location.pathname = `/ong/${id}`
                }, 1000);
            }else if(response.data.role === "USUARIO") {
                localStorage.setItem("tipo", "usuario");
                setTimeout(() => {
                    window.location.pathname = "/"
                }, 1000);
            }else if(response.data.role === "ADMIN"){
                setTimeout(() => {
                    window.location.pathname = "/admin"
                }, 1000);
            }
 
        }, (err) => {
            setError(false);
            console.log(err);
        });
    }

    return (
        <>
            <Menu />
            <main id="cadastro">
                <img src="../imgs/gestora.png" alt="" />
                {
                    <section id="cadastro__section">
                        <div className="section__form" id='conteudo'>
                            <div className="form__login">
                                <form id="login" action="javascript:void(0)" onSubmit={handleClickCadastro}>
                                    <h2>Bem vindo!</h2>
                                    <p>Faça login na sua conta</p>
                                    <br/>
                                    <label for="email">E-mail:</label><br />
                                    <input type="email" name="email" id="email" onChange={(e) => {
                                        setEmail(e.target.value.trim())
                                        setError(true)
                                    }} />
                                    <br />
                                    <label for="senha">Senha:</label><br />
                                    <input type="password" name="senha" id="senha" onChange={(e) => {
                                        setSenha(e.target.value.trim())
                                        setError(true)
                                    }} />
                                    <br />
                                    <p className={error ? 'error' : 'show'}>Email ou senha inválidos</p>
                                    <input type="submit" value="Entrar" id="entrar" /><br />
                                    {/*<button id="google"><img src='./imgs/google.png' alt="" /> Entrar com o Google</button>*/}
                                    <p className="cadastro-login">Não tem conta? <a href="/cadastro-ong">Cadastre-se</a></p>
                                </form>
                            </div>
                        </div>
                    </section>
                }
                <img src="../imgs/caixaDoacao.png" alt="" />
            {popUp}
            </main>
            <Vlibras />
        </>
    )
}
