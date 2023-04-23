import './style.css';
import Vlibras from '../../components/Vlibras/Vlibras';
import Menu from '../../components/Menu/Menu';
import Card from '../../components/Card/Card';

export default function Home() {

  return (
    <>
      <Menu />
      <main className="main_home">
        <section className="principal">
          <div className="busca">
              <h1 id="title-index">Um ato de bondade pode ajudar muita gente!</h1>
              <br/>
              <div className="buscador">
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
                  <div className="search">
                      <a href="#">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </a>
                  </div>
              </div>
          </div>
      </section>
      <section id="main-index">
        <div className="section__cards">
        <Card categoria="Proteção Animal" titulo="Sempre cabe mais um" icon='./imgs/cil_animal.png' regiao="Zona Leste" link="/ong"/>
        <Card categoria="Proteção Animal" titulo="Sempre cabe mais um" icon='./imgs/cil_animal.png' regiao="Zona Leste" />
        <Card categoria="Proteção Animal" titulo="Sempre cabe mais um" icon='./imgs/cil_animal.png' regiao="Zona Leste" />
        <Card categoria="Proteção Animal" titulo="Sempre cabe mais um" icon='./imgs/cil_animal.png' regiao="Zona Leste" />
        <Card categoria="Proteção Animal" titulo="Sempre cabe mais um" icon='./imgs/cil_animal.png' regiao="Zona Leste" />
        <Card categoria="Proteção Animal" titulo="Sempre cabe mais um" icon='./imgs/cil_animal.png' regiao="Zona Leste" />

        </div>
        <Vlibras />
      </section>
      </main>
    </>
  )
}
