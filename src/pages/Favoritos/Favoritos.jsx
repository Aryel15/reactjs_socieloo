import React, { useEffect, useState } from 'react'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import './style.css'
import RemoveCard from '../../components/RemoveCard/RemoveCard'
import Axios from 'axios'

export default function Favoritos() {
    const id = localStorage.getItem("id")
    const [ongs, setOngs] =  useState()
    const [filter, setFilter] = useState({
        regiao: "Todas",
        segmento: "Todas",
        nome:"",
      })
    const [regiao, setRegiao] = useState("Todas")
    const [segmento, setSegmento] = useState("Todas")
    const [nomeong, setNomeong] = useState("")
    useEffect(()=>{
        Axios.get(`https://socieloo-back.up.railway.app/api/v1/ong/favoritos/${id}`)
        .then((response) =>{
            setOngs(response.data);
        }).catch((err) => {
            console.log(err)
            
        })
    })
    function handleClickSearch() {
        if (filter.regiao !== regiao || filter.segmento !== segmento) {
          setRegiao(filter.regiao);
          setSegmento(filter.segmento);
          setNomeong(filter.nome)
        } else if (filter.regiao === "Todas" && filter.segmento === "Todas") {
          setRegiao("Todas");
          setSegmento("Todas");
          setNomeong(filter.nome)
        }
      }

  return (
    <>
        <Menu/>
        <main id="main__fav">
            <section className="section-fav" id='conteudo'>
                <div className="fav__text">
                    <h1>Favoritos</h1>
                    <p>Todas as suas ONGs e projetos favoritos </p>
                </div>
                <div className="fav__options">
                    <div className="options__select">
                        <select name="Segmentos" id="segmentos" onChange={(e) => setFilter({ ...filter, segmento: e.target.value })}>
                                <option value="Cidadania">Cidadania</option>
                                <option value="Cultura e Esportes">Cultura e Esportes</option>
                                <option value="Educação">Educação</option>
                                <option value="Gênero e Diversidade">Gênero e Diversidade</option>
                                <option value="Meio Ambiente">Meio Ambiente</option>
                                <option value="Proteção Animal">Proteção Animal</option>
                                <option value="Saúde">Saúde</option>
                                <option value="Todas">Todos</option>
                                <option value="Segmentos" selected disabled>Segmentos</option>
                            </select>
                            <select name="Região" id="Região" onChange={(e) => setFilter({ ...filter, regiao: e.target.value })} value={filter.regiao}>
                                <option value="Zona Leste">Zona Leste</option>
                                <option value="Zona Norte">Zona Norte</option>
                                <option value="Centro">Centro</option>
                                <option value="Zona Oeste">Zona Oeste</option>
                                <option value="Zona Sul">Zona Sul</option>
                                <option value="Todas">Todas</option>
                                <option value="Região" selected disabled>Região</option>
                            </select>
                            <div className="options__search">
                                <input type="search" placeholder="Pesquisar" onChange={e=> setFilter({ ...filter, nome:e.target.value})} list='search'/>
                                <datalist name="search" id="search" className="fav-select" >
                                    {
                                        ongs?.map(ong => (
                                            <option key={ong.id} value={ong.nome}>{ong.nome}</option>
                                        ))
                                    }
                                </datalist>
                                <span className="search__icon__container">
                                    <img src="../assets/search.svg" alt="icone de pesquisa" className="search__icon"/>
                                </span>
                            </div>
                            <div className="search">
                                <a href="javascript:void(0)" onClick={handleClickSearch}>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </a>
                            </div>
                    </div>
                </div>
            </section>
            <section className="fav__cards" id="conteudo">

                <div className="card__conteiner">
                    {
                        ongs?.filter(
                            ong =>
                              (regiao === 'Todas' || ong.regiao.toLowerCase() === regiao.toLowerCase()) &&
                              (segmento === 'Todas' || ong.segmento.toLowerCase() === segmento.toLowerCase())&&
                              (nomeong === "" || nomeong === ong.nome)
                          ).map(ong => (
                            <RemoveCard titulo={ong.nome} regiao={ong.regiao} segmento={ong.segmento} link={`/ong/${ong.id}/`} id={ong.id} key={ong.id}/>
                          ))
                    }
                </div>
            </section>
        </main>
        <Vlibras/>
    </>
  )
}
