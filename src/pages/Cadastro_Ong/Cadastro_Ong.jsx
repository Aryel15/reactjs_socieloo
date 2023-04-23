import React from 'react'
import './style.css'
import Menu from '../../components/Menu/Menu'
import Controle_Cadastros from '../../components/Controle_Cadastros/Controle_Cadastros'
import Vlibras from '../../components/Vlibras/Vlibras'

export default function Cadastro_Ong() {
    const [step, setStep] = React.useState(0);
    const pages = [
      <Etapa1 step={step} setStep={setStep}/>, 
      <Etapa2 step={step} setStep={setStep} />,
      <Etapa3 step={step} setStep={setStep} />,
    ];
  return (
    <>
      <Menu />
        <main id="cadastro">
            <aside className='aside'>
                <img src="../imgs/icons.svg" alt=""/>
            </aside>
            {pages[step]}
        </main>
      <Controle_Cadastros />
      <Vlibras />
    </>
  )
}

export function Etapa1({step, setStep}) {
  return (
    <section id="cadastro__section">
        <div className="section__form">
            <form action="#" method="post">
                <h1 className="section__title">Cadastre sua ONG</h1>
                <section className="form__group">
                    <div className="group__text">
                        <label for="nome">Nome</label>
                        <input type="text" id="nome" name="nome" required placeholder="Socieloo"/>

                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" required placeholder="noobmaster69@hotmail.com"/>

                        <label for="telefone">Telefone</label>
                        <input type="text" id="telefone" name="telefone" required placeholder="+55 (11) 98765-4321"/>

                        <label for="regiao">Região</label>

                        <div id="group__select">
                            <select name="regiao" id="regiao" required>
                                <option value="#" selected disabled>Selecione uma opção</option>
                                <option value="norte">Zona Norte</option>
                                <option value="sul">Zona Sul</option>
                                <option value="centro">Centro</option>
                                <option value="leste">Zona Leste</option>
                                <option value="oeste">Zona Oeste</option>
                            </select>
                        </div>
                    </div>

                    <div className="group__about">
                        <div className="about__radios">
                            <p>Qual a causa da sua ONG?</p>
                            <div className="radio__options">
                                <input type="radio" id="saude" name="causa"/>
                                <label for="saude">Saúde</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="educacao" name="causa"/>
                                <label for="educacao">Educação</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="cidadania" name="causa"/>
                                <label for="cidadania">Cidadania</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="culturaOuEsporte" name="causa"/>
                                <label for="culturaOuEsporte">Cultura ou esporte</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="generoOudiversidade" name="causa"/>
                                <label for="generoOudiversidade">Gênero e diversidade</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="meioAmbiente" name="causa"/>
                                <label for="meioAmbiente">Meio ambiente</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="protecaoAmbiental" name="causa"/>
                                <label for="protecaoAmbiental">Proteção Ambiental</label>
                            </div>
                            <div className="radio__options">
                                <input type="radio" id="outro" name="causa"/>
                                <label for="outro">Outro</label>
                            </div>
                        </div>
                        <div className="options__checkbox">
                            <input type="checkbox" name="termos" id="termos"/>
                            <label for="termos">Eu concordo com os <a href="#">termos e condições</a></label>
                        </div>
                        <a href="javascript:void(0);" className="options__submit" onClick={() => { setStep(step + 1);}}>Avançar</a>
                    </div>
                </section>
            </form>
        </div>
        <div className="section__radio">
            <ul className="radio__group">
                <li><input className="radio__input" name="process" id="radio-one" type='radio' checked/><span className="radio__span-one"></span></li>
                <li><input className="radio__input" name="process" id="radio-two" type='radio' onClick={() => { setStep(step + 1);}}/><span className="radio__span-two"></span></li>
                <li><input className="radio__input" name="process" id="radio-three" type='radio'onClick={() => { setStep(step + 2);}}/></li>
            </ul>
        </div>
    </section>
  )
}
function Etapa2({step, setStep}) {
    return (
        <section id="cadastro__section">
            <div className="section__form 2">
                <h1 className="section__title">Cadastre sua ONG</h1>
                <form action="" className='form-2'>
                    <div className="collum">
                        <label for="cnpj">CNPJ</label>
                        <input type="text" id="cnpj" name="cnpj" required/>
                        <div className="banco">
                            <div className="agencia">
                                <label for="agencia">Agência</label>
                                <input type="text" id="agencia" name="agencia" required/>
                            </div>
                            <div className="conta">
                                <label for="conta">Conta</label>
                                <input type="text" id="conta" name="conta" required/>
                            </div>
                        </div>
                        <label for="pix">Pix</label>
                        <input type="text" id="pix" name="pix" required/>
                        <label htmlFor="imagens">Imagens</label>
                        <input type="file" name="imagens" id="imagens" />
                    </div>
                    <div className="collum">
                        <label for="desc">Descrição</label>
                        <textarea name="desc" id="desc" cols="30" rows="10"></textarea>
                    </div>
                </form>
                <div className="buttons-form2">
                    <a href="javascript:void(0);" className="voltar" onClick={() => { setStep(step - 1);}}>Voltar</a>
                    <a href="javascript:void(0);" className="options__submit" onClick={() => { setStep(step + 1);}}>Avançar</a>
                </div>
            </div>
            <div className="section__radio">
                <ul className="radio__group">
                    <li><input className="radio__input" name="process" id="radio-one" type='radio'  onClick={() => { setStep(step - 1);}}/><span className="radio__span-one"></span></li>
                    <li><input className="radio__input" name="process" id="radio-two" type='radio' checked/><span className="radio__span-two"></span></li>
                    <li><input className="radio__input" name="process" id="radio-three" type='radio' onClick={() => { setStep(step + 1);}}/></li>
                </ul>
            </div>
        </section>
    )
}

function Etapa3({step, setStep}) {
    return(
        <section id="cadastro__section">
            <div className="section__form 2">
            <h1 className="section__title">Cadastre sua ONG</h1>
            <form action="" className='form-3'>
                <label for="senha">Senha</label>
                <input type="password" id="senha" name="senha" required/>
                <label for="confirmsenha">Confirmar senha</label>
                <input type="password" id="confirmsenha" name="confirmsenha" required/>
                <div className="buttons-form2">
                    <a href="javascript:void(0);" className="voltar" onClick={() => { setStep(step - 1);}}>Voltar</a>
                    <a href="/" className="options__submit">Seja Bem-Vindo</a>
                </div>
            </form>
            </div>
            <div className="section__radio">
                <ul className="radio__group">
                    <li><input className="radio__input" name="process" id="radio-one" type='radio'  onClick={() => { setStep(step - 2);}}/><span className="radio__span-one"></span></li>
                    <li><input className="radio__input" name="process" id="radio-two" type='radio' onClick={() => { setStep(step - 1);}}/><span className="radio__span-two"></span></li>
                    <li><input className="radio__input" name="process" id="radio-three" type='radio' checked/></li>
                </ul>
            </div>
        </section>
    )
}
