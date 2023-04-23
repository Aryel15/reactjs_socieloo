import React from 'react'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import './style.css'
import RemoveCard from '../../components/RemoveCard/RemoveCard'

export default function Favoritos() {
  return (
    <>
        <Menu/>
        <main id="main__fav">
            <section className="section-fav">
                <div className="fav__text">
                    <h1>Favoritos</h1>
                    <p>Todas as suas ONGs e projetos favoritos </p>
                </div>
                <div className="fav__options">
                    <div className="options__select">
                        <select name="Segmentos" id="segmentos">
                                <option value="Cidadania">Cidadania</option>
                                <option value="Cultura e Esportes">Cultura e Esportes</option>
                                <option value="Educação">Educação</option>
                                <option value="Gênero e Diversidade">Gênero e Diversidade</option>
                                <option value="Meio Ambiente">Meio Ambiente</option>
                                <option value="Proteção Animal">Proteção Animal</option>
                                <option value="Saúde">Saúde</option>
                                <option value="Segmentos" selected disabled>Segmentos</option>
                            </select>
                            <select name="Região" id="Região">
                                <option value="Zona Leste">Zona Leste</option>
                                <option value="Zona Norte">Zona Norte</option>
                                <option value="Centro">Centro</option>
                                <option value="Zona Oeste">Zona Oeste</option>
                                <option value="Zona Sul">Zona Sul</option>
                                <option value="Região" selected disabled>Região</option>
                            </select>
                            <div className="options__search">
                                <input type="search" placeholder="Pesquisar"/>
                                <span className="search__icon__container">
                                    <img src="../assets/search.svg" alt="icone de pesquisa" className="search__icon"/>
                                </span>
                            </div>
                            <div className="search">
                                <a href="#">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </a>
                            </div>
                    </div>
                </div>
            </section>
            <section className="fav__cards" id="conteudo">
                <div className="cards__title">
                    <h2>Proteção Animal</h2>
                </div>

                <div className="card__conteiner">
                    <RemoveCard categoria="Proteção Animal" titulo="Sempre cabe mais um" icon='./imgs/cil_animal.png' regiao="Zona Leste" link="/ong"/>
                    <RemoveCard categoria="Proteção Animal" titulo="Sempre cabe mais um" icon='./imgs/cil_animal.png' regiao="Zona Leste" link="/ong"/>

                </div>
            </section>
        </main>
        <Vlibras/>
    </>
  )
}
