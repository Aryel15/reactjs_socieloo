import React from 'react'
import './style.css'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'

export default function Excluir_Cadastro() {
  return (
    <>
      <Menu/>
      <main>
        <div className="painel">
            <div className="dados">
                <p>Tipo de usuário: Ong</p>
                <h1>Adote Sempre Cabe mais Um</h1>
                <img src="../imgs/fotosOng/fotos01.jpg" className='imagem' alt="" />
                <div>
                    <a href="#" className="button">Proteção Animal</a>
                    <a href="#" className="button">Zona Leste</a>
                </div>
            </div>
            <div className="buttons">
                <a href="#" className='btn'>Verificar Detalhes</a>
                <a href="#" className='btn'>Cancelar</a>
                <a href="#" className='btn excluir'><i class="fa-regular fa-trash-can"></i>Excluir</a>      
            </div>
        </div>
      </main>
      <Footer/>
      <Vlibras/>
    </>
  )
}
