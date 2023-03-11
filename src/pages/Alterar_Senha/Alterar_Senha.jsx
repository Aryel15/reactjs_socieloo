import React from 'react'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import Vlibras from '../../components/Vlibras/Vlibras'
import './style.css'

export default function Alterar_Senha() {
  return (
    <>
      <Menu/>
      <div class="section__form-as">
        <main class="profile">
            <div class="container">
            <h1 class="page-subtitle">Alterar Senha</h1>
            <form action="/perfil" class="form-profile">
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

                <button type="submit" class="button-as">Salvar alterações</button>
            </form>
            </div>

            <div class="container">
            <img src="../imgs/cadeado.png" alt="Imagem de um cadeado" class="container-img" />
            </div>
        </main>
        <script src="../js/user.js"></script>
      </div>
      <Footer/>
      <Vlibras/>
    </>
  )
}
