import React, { useState } from 'react'
import './style.css'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import Axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState(true)
    const [popUp, setPopUp] = useState("")
    const [login, setLogin] = useState("user")

    const navigate = useNavigate()

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
 
        Axios.post(`http://localhost:8080/api/v1/${login}/login`, {
            senha: senha,
            login: email
        }).then((response) => {
            setPopUp(popBox)
            const { token } = response.data
            const { id } = jwtDecode(token)
            localStorage.removeItem("id")
            localStorage.removeItem("tipo")
            localStorage.removeItem("token")
            localStorage.setItem("id", id)
            localStorage.setItem("token", token)
            localStorage.setItem("tipo", login);
            if(login === "ong"){
                setTimeout(() => {
                    navigate(`/ong/${id}`)
                }, 1000);
            }else if(login === "user") {
                setTimeout(() => {
                    navigate("/")
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
                                    <p>Faça login na sua conta de {login === "user" ? "usuário" : "ong"}</p>
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
                                    <p className="cadastro-login">Não tem conta? <Link to={`/cadastro-${login === "ong" ? "ong" : "usuario"}`}>Cadastre-se</Link></p>
                                </form>
                            </div>
                        </div>
                    </section>
                }
                <img src="../imgs/caixaDoacao.png" alt="" />
            {popUp}
                <div className="logins">
                    <div className={login == "user" ? "link ativado" : "link"}><span onClick={() => setLogin("user")}><i className="fa-solid fa-user"></i> Usuário</span><br /></div>
                    <div className={login == "ong" ? "link ativado" : "link"}><span onClick={() => setLogin("ong")}><i className="fa-solid fa-handshake-angle"></i>Ong's</span><br /></div>
                </div>
            </main>
            <Vlibras />
        </>
    )
}
