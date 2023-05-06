import React from 'react'
import './style.css'
import Menu from '../../components/Menu/Menu'
import Controle_Cadastros from '../../components/Controle_Cadastros/Controle_Cadastros'
import Vlibras from '../../components/Vlibras/Vlibras'


export default function Cadastro_User() {
  const [step, setStep] = React.useState(0);
  const pages = [
    <Etapa1 step={step} setStep={setStep}/>, 
    <Etapa2 step={step} setStep={setStep} />, 
    <Etapa3 step={step} setStep={setStep} />,
    <Etapa4 step={step} setStep={setStep} />
  ];
  return (
    <>
      <Menu />
      <main className='cad-user'>
        <img src="../imgs/doacaoAnimal.png" alt=""/>
        {pages[step]}
        <img src="../imgs/cadeirarodas.png" alt=""/>
      </main>
        <Controle_Cadastros /><Vlibras />
    </>
  )


}

export function Etapa1({step, setStep}){
  return(
    <section className="section-user">
      <form action="#" method="post" className="form-container">
        <h2 className="form-title">Faça seu cadastro</h2>
        <div>
          <input className="input-field" type="text" id="name" name="name" placeholder="Nome" required />
          <input className="input-field" type="text" id="secondName" name="secondName" placeholder="Sobrenome" required />
        </div>
        <input className='input-field' type="email" id="email" name="email" placeholder="E-mail" />
        <input className="input-field" type="password" id="password" name="password" placeholder="Senha" />
        <div className="buttons">
          <a href="#" className="button-white" ><img src='./imgs/google.png' alt="" />Cadastrar-se com Google</a>
          <a href="javascript:void(0);" class="button-blue" onClick={() => { setStep(step + 1);}}>Próximo</a>
        </div>
      </form>
    </section>
  )
}
export function Etapa2({step, setStep}){
  return(
    <section className="section-user">
          <form action="#" method="post" class="form-container">
            <h1 class="section__title">
              Deseja selecionar uma região de preferência?
            </h1>
            <div class="input-group">
              <div class="input">
                <input type="checkbox" name="north" id="north" title="Zona Norte" />
                <label for="north">Zona Norte</label>
              </div>
              <div class="input">
                <input type="checkbox" name="south" id="south" title="Zona Sul" />
                <label for="south">Zona Sul</label>
              </div>
              <div class="input">
                <input type="checkbox" name="east" id="east" title="Zona Leste" />
                <label for="east">Zona Leste</label>
              </div>
              <div class="input">
                <input type="checkbox" name="west" id="west" title="Zona Oeste" />
                <label for="west">Zona Oeste</label>
              </div>
            </div>
            <div class="buttons">
              <a href="javascript:void(0);" class="button-white" onClick={() => { setStep(step - 1);}}>
                Voltar
              </a>
              <a href="javascript:void(0);" class="button-blue" onClick={() => { setStep(step + 1);}}>
                Próximo
              </a>
            </div>
          </form>
      </section>
  )
}

export function Etapa3({step, setStep}) {
  return (
    <section className="section-user">
        <form action="#" method="post" class="form-container">
            <h1 class="section__title">
                Selecione seus segmentos favoritos
            </h1>

            <div class="input-group">
                <div class="input">
                    <input type="checkbox" name="citizenship" id="citizenship" title="Cidadania" />
                    <label for="citizenship">Cidadania</label>
                </div>

                <div class="input">
                    <input type="checkbox" name="animalProtection" id="animalProtection" title="Cidadania" />
                    <label for="animalProtection">Proteção Animal</label>
                </div>

                <div class="input">
                    <input type="checkbox" name="cultureSports" id="cultureSports" title="Zona Oeste" />
                    <label for="cultureSports">Cultura e Esportes</label>
                </div>

                <div class="input">
                    <input type="checkbox" name="genderDiversity" id="genderDiversity" title="Gênero e Diversidade" />
                    <label for="genderDiversity">Gênero e Diversidade</label>
                </div>

                <div class="input">
                    <input type="checkbox" name="education" id="education" title="Educação" />
                    <label for="education">Educação</label>
                </div>

                <div class="input">
                    <input type="checkbox" name="health" id="health" title="Saúde" />
                    <label for="health">Saúde</label>
                </div>

                <div class="input">
                    <input type="checkbox" name="environment" id="environment" title="Saúde" />
                    <label for="environment">Meio Ambiente</label>
                </div>
            </div>
            <div class="buttons">
              <a href="javascript:void(0);" class="button-white" onClick={() => { setStep(step - 1);}}>
                Voltar
              </a>
              <a href="javascript:void(0);" class="button-blue" onClick={() => { setStep(step + 1);}}>
                Próximo
              </a>
            </div>
        </form>
    </section>
  )
}
export function Etapa4({step, setStep}) {
  return (
    <section className="section-user">
        <form action="#" method="post" class="form-container">
          <h1 class="section__title">
            Digite o código enviado pelo e-mail
          </h1>
          <p>Um email de confirmação foi enviado para: <br/> <label>******@email.com</label></p>
          <input class="input-field" type="text" id="code" name="code" placeholder="Código" required />
          <div class="buttons">
            <a href="javascript:void(0);" class="button-white" onClick={() => { setStep(step - 1);}}>
              Voltar
            </a>
            <a href="/perfil" class="button-blue">
              Finalizar
            </a>
          </div>
        </form>
    </section>
  )
}

