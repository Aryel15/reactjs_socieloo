import React from 'react'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import './style.css'

export default function Perfil_User() {
    const [fotoPerfil, setFotoPerfil] = React.useState("../assets/camera.svg");
  return (
    <>
        <Menu />
        <main class="profile column">
            <div class="container container-imgs">
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
            <div class="container">
            <h1 class="page-subtitle">Perfil</h1>
            <form action="#" class="form-profile">
                <div>
                    <label for="name">Nome</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label for="nameUser">Nome de Usuário</label>
                    <input type="text" name="nameUser" id="nameUser" />
                </div>
                <div>
                    <label for="email">E-mail</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div>
                    <label for="bio">Biografia</label>
                    <input type="text" name="bio" id="bio" />
                </div>
                <button type="submit" class="button_perfil">Salvar alterações</button>
            </form>
            </div>
        </div>
        </main>
        <Vlibras />
        <Footer />
    </>
  )
}
