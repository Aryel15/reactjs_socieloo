import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import Vlibras from '../../components/Vlibras/Vlibras';
import Menu from '../../components/Menu/Menu';
import Card from '../../components/Card/Card';
import Axios from 'axios';
import { useParams } from 'react-router';

export default function Ongs() {
  const { tipo } = useParams()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(null)
  const [filter, setFilter] = useState({
    regiao: "Todas",
    segmento: "Todas",
  })
  const [regiao, setRegiao] = useState("Todas")
  const [segmento, setSegmento] = useState("Todas")
  const [title, setTitle] = useState("")


  useEffect(() => {
    setLoading((
      <div className="load">
          <span class="loader"></span>
      </div>
    ))
    Axios.get("https://socieloo-back.up.railway.app/api/v1/ong")
      .then((response) => {
        setData(response.data);
        setLoading(null)
    })
    if (tipo === 'Cidadania' || tipo === 'Cultura e Esporte' || tipo === 'Cultura e esporte' || tipo === 'Educação' || tipo === 'Gênero e Diversidade' || tipo === 'Gênero e diversidade' || tipo === 'Meio Ambiente' || tipo === 'Proteção Animal' || tipo === 'Saúde') {
      setSegmento(tipo)
      setTitle("Ongs: " + tipo)
    }else if (tipo === 'Zona Leste' || tipo === 'Zona Norte' || tipo === 'Centro' || tipo === 'Zona Oeste' || tipo === 'Zona Sul'){
      setRegiao(tipo)
      setTitle("Ongs: " + tipo)
    }else{
      setTitle("Ongs não encontradas!")
      setRegiao(null)
      setSegmento(null)
    }
    console.log(segmento);

  }, [regiao, segmento, tipo])


  return (
    <>
      <Menu />
      <main className="main_home">
        <section id="main-index">
          <h1>{title}</h1>
          <div className="section__cards" id='conteudo'>
            {loading}
            {
              data.filter(
                ong =>
                  (regiao === 'Todas' || ong.regiao.toLowerCase() === regiao.toLowerCase()) &&
                  (segmento === 'Todas' || ong.segmento.toLowerCase() === segmento.toLowerCase())
              ).map(ong => (
                <Card titulo={ong.nome} regiao={ong.regiao} segmento={ong.segmento} link={`/ong/${ong.id}/`} id={ong.id} key={ong.id}/>
              ))
            }
          </div>
          <Vlibras />
        </section>
      </main>
    </>
  )
}
