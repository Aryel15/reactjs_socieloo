import React, { useEffect, useState } from "react";
import './style.css';
import Vlibras from '../../components/Vlibras/Vlibras';
import Menu from '../../components/Menu/Menu';
import Axios from 'axios';

export default function Login() {


    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState(true)

    const handleClickCadastro = e => {
        e.preventDefault()
        console.log(email);
        console.log(senha);
        localStorage.setItem("email", email)
       
        Axios.post(`http://localhost:8080/api/v1/ong/login`, {
            senha: senha,
            email: email
        }).then((response) => {
            console.log(response);
            setTimeout(() => {
                window.location.pathname = "/perfil-ong"
            }, 1000);
        },(err) => {
            setError(false)
            console.log(err);
        });
    }


    return (
        <>
            <Menu />
            <main id="main-login">
                <section className="imagem">
                </section>
                <aside className="aside_login">
                    <form id="login" action="javascript:void(0)" onSubmit={handleClickCadastro}>
                        <h2>Bem vindo!</h2>
                        <p>Faça login na sua conta</p>
                        <label for="email">E-mail:</label><br />
                        <input type="email" name="email" id="email" onChange={(e) => {
                            setEmail(e.target.value)
                            setError(true)
                        }} />
                        <br />
                        <label for="senha">Senha:</label><br />
                        <input type="password" name="senha" id="senha" onChange={(e) => 
                        {
                            setSenha(e.target.value) 
                            setError(true)
                        }} />
                        <br />
                        <p className={error ? 'error' : 'show'}>Email ou senha inválidos</p>
                        <div className="esqueceu_senha">
                            <div className="lembrar">
                                <input type="radio" name="lembrar" id="lembrar" />
                                <label for="lembrar">Lembrar-me</label>
                            </div>
                            <a href="">Esqueceu a senha?</a>
                        </div>
                        <input type="submit" value="Entrar" id="entrar" /><br />
                        <button id="google"><img src='./imgs/google.png' alt="" /> Entrar com o Google</button>
                        <p className="cadastro-login">Não tem conta? <a href="./cadastro_usuario.html">Cadastre-se</a></p>
                    </form>
                </aside>
            </main>
            <Vlibras />
        </>
    )
}