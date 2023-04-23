import React from 'react'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import './style.css'

export default function Alterar_Senha() {
  return (
    <>
      <Menu/>
      <div className="section__form-as">
        <main className="profile">
            <div className="container">
            <h1 className="page-subtitle">Alterar Senha</h1>
            <form action="/perfil" className="form-profile">
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
            </div>

            <div className="container">
            <img src="../imgs/cadeado.png" alt="Imagem de um cadeado" className="container-img" />
            </div>
        </main>
        <script src="../js/user.js"></script>
      </div>
      <Vlibras/>
    </>
  )
}
