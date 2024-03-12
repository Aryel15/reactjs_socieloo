import './style.css';
import React, {useState} from 'react';
import Menu from '../../components/Menu/Menu';
import Vlibras from '../../components/Vlibras/Vlibras';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';

export default function Admin() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState(true)
    const [popUp, setPopUp] = useState("")

    const navigate = useNavigate()

    const handleClickCadastro = e => {
        e.preventDefault() 
        const popBox = (
            <section className="popup">
              <div className="boxpopup">
                <i class="fa-solid fa-circle-check"></i>
                <p>Seja bem-vindo de volta!</p>
                <div className="progress-bar"></div>
              </div>
            </section>
        )
 
        Axios.post(`https://socieloo-back.up.railway.app/api/v1/admin/login`, {
            senha: senha,
            login: email
        }).then((response) => {
            const { token } = response.data
            if(token){
                setPopUp(popBox);
                const { id } = jwtDecode(token)
                localStorage.setItem("id", id)
                localStorage.setItem("token", token)
                localStorage.setItem("tipo", "admin");
                setTimeout(() => {
                    navigate("/gerenciamento")
                }, 1000);
            }
        }, (err) => {
            setError(false)
            console.log(err);
        });
    }

    return (
        <>
            <Menu />
            <main id="cadastro">
            <img src="../imgs/gestora.png" alt="" />
            
                <section id="cadastro__section">
                
                <div className="section__form"  id='conteudo'>
                <div className="form__admin">
                    <form id="admin" action="" onSubmit={handleClickCadastro}>
                        <h2>Admin</h2>
                        <label for="email">E-mail:</label><br />
                        <input type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value.trim()); setError(true) }}/><br />
                        <label for="senha">Senha:</label><br />
                        <input type="password" name="senha" id="senha" onChange={(e) => {setSenha(e.target.value.trim()); setError(true)}}/><br />
                        <p className={error ? 'error' : 'show'}>Email ou senha inválidos</p>
                        <input type="submit" value="Entrar" id="entrar" /><br />
                    </form>
                </div>
                {popUp}
                </div>
                </section>
                <img src="../imgs/vase.png" alt="" />
            </main>
            <Vlibras />
        </>
    )
}
