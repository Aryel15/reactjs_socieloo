import React from 'react'
import './style.css'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import Vlibras from '../../components/Vlibras/Vlibras'

export default function Editar_Ong() {
  return (
    <>
    <Menu/>
    <main id="edit" >
        <section class="edit__conteiner" id="conteudo" >

            <aside class="edit__options">
                <div class="options__photos">
                    <img src="../imgs/fotosOng/fotos01.jpg" alt="foto de perfil escolhida pela ong"/>
                    <h1>Adote Sempre Cabe Mais Um</h1>
                </div>

                <ul class="options__itens">
                    <li><a href="#" class="options__item"><i class='bx bx-pencil'></i> Editar perfil</a></li>
                    <li><a href="#" class="options__item"><i class='bx bxs-lock-alt'></i> Alterar senha</a></li>
                    <li><a href="#" class="options__item"><i class='bx bxs-message-square-x'></i> Deletar conta</a></li>
                    <li><a href="#" class="options__item"><i class='bx bx-pencil'></i> item4</a></li>
                    <li><a href="#" class="options__item"><i class='bx bx-pencil'></i> item5</a></li>
                    <li><a href="#" class="options__item"><i class='bx bx-pencil'></i> item6</a></li>
                </ul>

            </aside>

            <section class="edit__content">
                <h2>Editar perfil</h2>

                <form action="#" class="content__form">
                    <label for="nome">Nome</label>
                    <input type="text" id="nome" name="nome" value="Adote Sempre Cabe Mais Um"/>

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" value="noobmaster69@hotmail.com"/>

                    <label for="telefone">Telefone</label>
                    <input type="tel" id="telefone" name="telefone" value="+55 (11) 98765-4321"/>

                    <label for="endereço">Endereço</label>
                    <input type="text" id="endereço" name="endereço" value="R. das Alamandas - Jardim Estancia Brasil"/>

                    <label for="Sobre">Sobre</label>
                    <textarea name="Sobre" id="Sobre"></textarea>

                    <div class="form__button">
                        <button>Salvar edição</button>
                    </div>
                </form>
            </section>
        </section>
    </main>
    <Footer/>
    <Vlibras/>
    </>
  )
}