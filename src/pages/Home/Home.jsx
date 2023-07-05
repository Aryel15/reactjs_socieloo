import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import Vlibras from '../../components/Vlibras/Vlibras';
import Menu from '../../components/Menu/Menu';
import Card from '../../components/Card/Card';
import Axios from 'axios';

export default function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(null)
  const [filter, setFilter] = useState({
    regiao: "Todas",
    segmento: "Todas",
  })
  const [regiao, setRegiao] = useState("Todas")
  const [segmento, setSegmento] = useState("Todas")


  useEffect(() => {
    setLoading((
      <div className="load">
          <span class="loader"></span>
      </div>
    ))
    handleClickSearch();
    Axios.get("https://socieloo-back.onrender.com/api/v1/ong")
      .then((response) => {
        setData(response.data);
        setLoading(null)
      })
  }, [regiao, segmento])

  function handleClickSearch() {
    if (filter.regiao !== regiao || filter.segmento !== segmento) {
      setRegiao(filter.regiao);
      setSegmento(filter.segmento);
    } else if (filter.regiao === "Todas" && filter.segmento === "Todas") {
      setRegiao("Todas");
      setSegmento("Todas");
    }
  }

  function NomeOngLink(nome) {
    return nome.toLowerCase().replace(/\s+/g, '-');
  }

  function setRegiaoPeloCep(cep) {
    if (cep >= 1000000 && cep <= 1599999) {
      return "Centro"
    } else if (cep >= 2000000 && cep <= 2999999) {
      return "Zona Norte"
    } else if ((cep >= 3000000 && cep <= 3999999) || (cep >= 8000000 && cep <= 8499999)) {
      return "Zona Leste"
    } else if (cep >= 4000000 && cep <= 4999999) {
      return "Zona Sul"
    } else if (cep >= 5000000 && cep <= 5899999) {
      return "Zona Oeste"
    } else {
      return null
    }
  }

  useEffect(_ => {
    navigator.geolocation.getCurrentPosition(async sucesso => {
      localStorage.setItem("lat", sucesso.coords.latitude);
      localStorage.setItem("long", sucesso.coords.longitude);
      await Axios.get(`https://nominatim.openstreetmap.org/search.php?q=${localStorage.getItem("lat")}%2C${localStorage.getItem("long")}&format=jsonv2`)
        .then((response) => {
          if (response.data[0].length != 0) {
            let searchCepPoint = response.data[0].display_name.search("-")
            let getCepFromAPI = response.data[0].display_name.slice(searchCepPoint - 4, searchCepPoint + 4).replace("-", "")
            let regiaoDefinidaPeloLocalidade = setRegiaoPeloCep(parseInt(getCepFromAPI));

            if (regiaoDefinidaPeloLocalidade != null) {
              setFilter({ ...filter, regiao: regiaoDefinidaPeloLocalidade })
              setRegiao(regiaoDefinidaPeloLocalidade);
            }
          }
        })
    }, erro => {
      console.log(erro);
      localStorage.setItem("lat", null);
      localStorage.setItem("long", null);
    })
      /*const hash = decodeURIComponent(window.location.hash.split("#")[1]);
      if (window.location.hash != "" || window.location.hash != hash) {
        console.log(hash);
        if(hash.startsWith('Zona') || hash === 'Centro'){
          setFilter({ ...filter, regiao:hash});
        }else{
          setFilter({ ...filter, segmento:hash});
        }
      } */
  }, [])


  return (
    <>
      <Menu />
      <main className="main_home">
        <section className="principal">
          <div className="busca">
            <h1 id="title-index">Um ato de bondade pode ajudar muita gente!</h1>
            <br />
            <div className="buscador">
              <select name="Segmentos" id="segmentos" onChange={(e) => setFilter({ ...filter, segmento: e.target.value })}>
                <option value="Cidadania">Cidadania</option>
                <option value="Cultura e Esporte">Cultura e Esporte</option>
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
              <div className="search">
                <a href="javascript:void(0)" onClick={handleClickSearch}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="main-index">
          <div className="section__cards" id='conteudo'> 
            {loading}
            {
              data.filter(
                ong =>
                  (regiao === 'Todas' || ong.regiao.toLowerCase() === regiao.toLowerCase()) &&
                  (segmento === 'Todas' || ong.segmento.toLowerCase() === segmento.toLowerCase())
              ).map(ong => (
                <Card titulo={ong.nome} regiao={ong.regiao} segmento={ong.segmento} link={`/ong/${ong.id}/`} id={ong.id} />
              ))
            }
          </div>
          <Vlibras />
        </section>
      </main>
    </>
  )
}
