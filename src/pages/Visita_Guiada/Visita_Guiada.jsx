import React from 'react'
import Menu from '../../components/Menu/Menu';
import Vlibras from '../../components/Vlibras/Vlibras';
import './style.css'

export default function Visita_Guiada() {
    const [step, setStep] = React.useState(0);
    const pages = [
      <Etapa1 step={step} setStep={setStep}/>, 
      <Etapa2 step={step} setStep={setStep} />, 
      <Etapa3 step={step} setStep={setStep} />,
    ];
  return (
    <>
      <Menu/>
      <main className='visita'>
            {pages[step]}
      </main>  
      <Vlibras/>
    </>
  )
}
export function Etapa1({step, setStep}) {
    return(
        <>
            <div className="formulario">
                <form className='formvis' id="login" action="javascript:void(0)">
                    <div className="titulo">
                        <p>Formulário de visita guiada</p>
                        <h1>Faça uma visita a: <br/>
                            "Nome da Ong"
                        </h1>
                    </div>
                    <label for="name">Nome:</label><br/>
                    <input type="text" name="name" id="name" required/><br/>
                    <label for="email">E-mail:</label><br/>
                    <input type="email" name="email" id="email" required/><br/>
                    <label for="fone">Telefone:</label><br/>
                    <input type="tel" name="fone" id="fone" placeholder="+55(11)99999-9999" required/><br/>
                    <label for="quant">Quantidade de visitantes:</label><br/>
                    <select name="select" id="quant" required>
                        <option value="valor1">1</option>
                        <option value="valor2">2</option>
                        <option value="valor3">3</option>
                        <option value="valor4">4</option>
                        <option value="valor5">5</option>
                        <option value="valormais">...</option>
                    </select><br/>
                    <button className="options__submit" onClick={() => { setStep(step + 1);}} >Avançar</button>
                </form>
            </div>
        </>
    )
}

export function Etapa2({step, setStep}) {
  return (
    <>
      <div className="horarios">
        <div className="titulo">
            <p>Formulário de visita guiada</p>
            <h1>Faça uma visita a: <br/>
                "Nome da Ong"
            </h1>
        </div>
        <p>Escolha um dos horários disponiveis:</p>
        <div className="hdidisponiveis">
            <form className='forms' action="javascript:void(0)">
                <div className="checks">
                  <div>
                    <input type="radio" name="data" id="button-1" className="button-vg"/>
                    <label for="button-1" className="button-label">16/09 - 16:00 às 18:00</label>
                    <input type="radio" name="data" id="button-2" className="button-vg"/>
                    <label for="button-2" className="button-label">17/09 - 12:00 às 17:00</label>
                  </div><br />
                  <div>
                    <input type="radio" name="data" id="button-3" className="button-vg"/>
                    <label for="button-3" className="button-label">18/09 - 12:00 às 18:00</label>
                    <input type="radio" name="data" id="button-4" className="button-vg"/>
                    <label for="button-4" className="button-label">24/09 - 16:00 às 18:00</label>
                  </div>
                </div>
                <button className="options__submit segundo" onClick={() => { setStep(step - 1);}}>Voltar</button>
                <button className="options__submit segundo" onClick={() => { setStep(step + 1);}}>Confirmar</button>
            </form>
        </div>
    </div>
    </>
  )
}
export function Etapa3({step, setStep}) {
  return (
    <>
      <div className="horarios">
        <div className="titulo">
            <p>Formulário de visita guiada</p>
        </div>
        <p className='detalhes'>A Ong entrará em contato com você para mais detalhes, fique ligado no seu email:</p>
        <p className="email">seuemail@email.com</p>
        <button className="options__submit segundo" onClick={() => window.location.pathname = "/"}>Voltar para HOME</button>
      </div>
    </>
  )
}

