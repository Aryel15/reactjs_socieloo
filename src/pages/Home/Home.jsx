import React, { useState, useEffect } from 'react';
import './style.css';
import Vlibras from '../../components/Vlibras/Vlibras';
import Menu from '../../components/Menu/Menu';
import Card from '../../components/Card/Card';
import Axios from 'axios';

export default function Home() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState({
    regiao: "",
    segmento: "",
  })
  const [regiao, setRegiao] = useState("todas")
  const [segmento, setSegmento] = useState("todas")
  useEffect(() =>{
    Axios.get("http://localhost:8080/api/v1/ong")
    .then((response) =>{
        setData(response.data);
    })
  },[])
  function handleClickSearch(){
    setRegiao(filter.regiao);
    setSegmento(filter.segmento);
  }

  return (
    <>
      <Menu />
      <main className="main_home">
        <section className="principal">
          <div className="busca">
              <h1 id="title-index">Um ato de bondade pode ajudar muita gente!</h1>
              <br/>
              <div className="buscador">
                  <select name="Segmentos" id="segmentos" onChange={(e) => setFilter({...filter, segmento:e.target.value})}>
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
                  <select name="Região" id="Região" onChange={(e) => setFilter({...filter, regiao:e.target.value})}>
                      <option value="Zona Leste">Zona Leste</option>
                      <option value="Zona Norte">Zona Norte</option>
                      <option value="Centro">Centro</option>
                      <option value="Zona Oeste">Zona Oeste</option>
                      <option value="Zona Sul">Zona Sul</option>
                      <option value="Todas">Todas</option>
                      <option value="Região" selected disabled>Região</option>
                  </select>
                  <div className="search">
                      <a href="javascript:void(0)" onClick={handleClickSearch}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </a>
                  </div>
              </div>
          </div>
      </section>
      <section id="main-index">
        <div className="section__cards">
        {
          data.filter((ong) => (regiao === 'Todas' && segmento === 'Todas') || (regiao === ong.regiao && segmento === ong.segmento) ||  (regiao === ong.regiao && segmento === 'Todas') || (regiao === 'Todas' && segmento === ong.segmento)).map(ong => (
            <Card categoria="Proteção Animal" titulo={ong.nome} regiao={ong.regiao} segmento={ong.segmento} link=""/>
          ))
        }

        </div>
        <Vlibras />
      </section>
      </main>
    </>
  )
}
