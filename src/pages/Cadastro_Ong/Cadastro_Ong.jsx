
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
      <Etapa4 step={step} setStep={setStep} />,
    ];
  return (
    <>
      <Menu />
        <main id="cadastro">
            <img src="../imgs/doacaoAnimal.png" alt=""/>
            {pages[step]}
            <img src="../imgs/cadeirarodas.png" alt=""/>
        </main>
      <Controle_Cadastros />
      <Vlibras />
    </>
  )
}

export function Etapa1({step, setStep}) {
    const valorCadastro = e => {
        const { name, value } = e.target;
        if (name === 'telefone') {
          const telefone_int = value.replace(/[^\d]/g, '');
          setCadastro({
            ...cadastro,
            telefone: telefone_int,
          });
        } else {
          setCadastro({
            ...cadastro,
            [name]: value
          });
        }
      };
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

                        <label for="cnae">Cnae</label>
                        <select name="cnae" id="cnae" onChange={valorCadastro} className="select-regiao" required>
                            <option value="#" selected disabled>Selecione uma opção</option>
                            <option value="9430-8/00 - ASSOCIAÇÃO DE PROTEÇÃO DE MINORIAS ÉTNICAS">9430-8/00 - ASSOCIAÇÃO DE PROTEÇÃO DE MINORIAS ÉTNICAS</option>
                            <option value="9430-8/00 - ASSOCIAÇÃO, ONG, DE DEFESA DO MEIO AMBIENTE">9430-8/00 - ASSOCIAÇÃO, ONG, DE DEFESA DO MEIO AMBIENTE</option>
                            <option value="9430-8/00 - ASSOCIAÇÃO, ONG, DE DEFESA DOS DIREITOS HUMANOS">9430-8/00 - ASSOCIAÇÃO, ONG, DE DEFESA DOS DIREITOS HUMANOS</option>
                            <option value="9430-8/00 - ASSOCIAÇÃO, ONG, DE GRUPOS MINORITÁRIOS">9430-8/00 - ASSOCIAÇÃO, ONG, DE GRUPOS MINORITÁRIOS</option>
                            <option value="9430-8/00 - ASSOCIAÇÃO, ONG, DE MOVIMENTOS ECOLÓGICOS">9430-8/00 - ASSOCIAÇÃO, ONG, DE MOVIMENTOS ECOLÓGICOS</option>
                            <option value="9430-8/00 - ATIVIDADE DE OPERAÇÃO DE CENTRAIS DE DISQUE DENUNCIA QUANDO REALIZADO POR ENTIDADES SEM FINS LUCRATIVOS">9430-8/00 - ATIVIDADE DE OPERAÇÃO DE CENTRAIS DE DISQUE DENUNCIA QUANDO REALIZADO POR ENTIDADES SEM FINS LUCRATIVOS</option>
                            <option value="Outro">Outro</option>
                        </select>

                    </div>
                    <a href="javascript:void(0);" className="options__submit" onClick={() => { setStep(step + 1);}}>Avançar</a>
                </section>
            </form>
        </div>
        <div className="section__radio">
            <ul className="radio__group">
                <li><input className="radio__input" name="process" id="radio-one" type='radio' checked/></li>
                <li><input className="radio__input" name="process" id="radio-two" type='radio' onClick={() => { setStep(step + 1);}}/></li>
                <li><input className="radio__input" name="process" id="radio-three" type='radio'onClick={() => { setStep(step + 2);}}/></li>
                <li><input className="radio__input" name="process" id="radio-three" type='radio'onClick={() => { setStep(step + 3);}}/></li>
            </ul>
        </div>
    </section>
  )
}
  function Etapa2({step, setStep}) {
    const valorCadastro = e => {
        const { name, value } = e.target;
        if (name === 'telefone') {
          const telefone_int = value.replace(/[^\d]/g, '');
          setCadastro({
            ...cadastro,
            telefone: telefone_int,
          });
        } else {
          setCadastro({
            ...cadastro,
            [name]: value
          });
        }
      };
      return (
          <section id="cadastro__section">
              <div className="section__form 2">
                  <h1 className="section__title">Cadastre sua Ong</h1>
                  <form action="" className='form-2'>
                      <div className="collum">
                        <label for="regiao">Região</label>
                        <select name="regiao" id="regiao" onChange={valorCadastro} className="cad-select" required>
                        <option value="#" selected disabled>Selecione uma opção</option>
                        <option value="Zona Norte">Zona Norte</option>
                        <option value="Zona Sul">Zona Sul</option>
                        <option value="Centro">Centro</option>
                        <option value="Zona Leste">Zona Leste</option>
                        <option value="Zona Oeste">Zona Oeste</option>
                        </select>
                        <label for="select-regiao"className="select-label">Qual a causa da sua ONG?</label>
                        <select name="segmento" id="segmento" onChange={valorCadastro} className="select-regiao" required>
                        <option value="#" selected disabled>Selecione uma opção</option>
                        <option value="Saúde">Saúde</option>
                        <option value="Educação">Educação</option>
                        <option value="Cidadania">Cidadania</option>
                        <option value="Cultura ou esporte">Cultura ou esporte</option>
                        <option value="Gênero e diversidade">Gênero e diversidade</option>
                        <option value="Meio ambiente">Meio ambiente</option>
                        <option value="Proteção Ambiental">Proteção Ambiental</option>
                        <option value="Outro">Outro</option>
                        </select>
                      </div>
                      <label for="descricao">Descrição</label>
                      <textarea name="descricao" id="descricao" cols="30" rows="10" onChange={valorCadastro} ></textarea>
                  </form>
                  <div className="buttons-form2">
                      <a href="javascript:void(0);" className="voltar" onClick={() => { setStep(step - 1);}}>Voltar</a>
                      <a href="javascript:void(0);" className="options__submit" onClick={() => { setStep(step + 1);}}>Avançar</a>
                  </div>
              </div>
              <div className="section__radio">
                  <ul className="radio__group">
                      <li><input className="radio__input" name="process" id="radio-one" type='radio'  onClick={() => { setStep(step - 1);}}/></li>
                      <li><input className="radio__input" name="process" id="radio-two" type='radio' checked/></li>
                      <li><input className="radio__input" name="process" id="radio-three" type='radio' onClick={() => { setStep(step + 1);}}/></li>
                      <li><input className="radio__input" name="process" id="radio-three" type='radio' onClick={() => { setStep(step + 2);}}/></li>
                  </ul>
              </div>
          </section>
      )
  }

  function Etapa3({step, setStep}) {
      return (
          <section id="cadastro__section">
              <div className="section__form 2">
                  <h1 className="section__title">Dados Bancários</h1>
                  <form action="" className='form-2'>
                      <div className="collum">
                          <div className="agencia">
                              <label for="agencia">Agência</label>
                              <input type="text" id="agencia" name="agencia" required/>
                          </div>
                          <div className="conta">
                              <label for="conta">Conta</label>
                              <input type="text" id="conta" name="conta" required/>
                          </div>
                          <label for="pix">Pix</label>
                          <input type="text" id="pix" name="pix" required/>
                      </div>
                  </form>
                  <div className="buttons-form2">
                      <a href="javascript:void(0);" className="voltar" onClick={() => { setStep(step - 1);}}>Voltar</a>
                      <a href="javascript:void(0);" className="options__submit" onClick={() => { setStep(step + 1);}}>Avançar</a>
                  </div>
              </div>
              <div className="section__radio">
                  <ul className="radio__group">
                      <li><input className="radio__input" name="process" id="radio-one" type='radio'  onClick={() => { setStep(step - 2);}}/></li>
                      <li><input className="radio__input" name="process" id="radio-two" type='radio' onClick={() => { setStep(step - 1);}}/></li>
                      <li><input className="radio__input" name="process" id="radio-three" type='radio' checked/></li>
                      <li><input className="radio__input" name="process" id="radio-three" type='radio' onClick={() => { setStep(step + 1);}}/></li>
                  </ul>
              </div>
          </section>
      )
  }

function Etapa4({step, setStep}) {
    return(
        <section id="cadastro__section">
            <div className="section__form 2">
            <h1 className="section__title">Cadastre sua ONG</h1>
            <form action="" className='form-3'>
                <label for="senha">Senha</label>
                <input type="password" id="senha" name="senha" required/>
                <label for="confirmsenha">Confirmar senha</label>
                <input type="password" id="confirmsenha" name="confirmsenha" required/>
                <div className="options__checkbox">
                    <input type="checkbox" name="termos" id="termos"/>
                    <label for="termos">Eu concordo com os <a href="#">termos e condições</a></label>
                </div>
                <div className="buttons-form2">
                    <a href="javascript:void(0);" className="voltar" onClick={() => { setStep(step - 1);}}>Voltar</a>
                    <a href="/" className="options__submit">Seja Bem-Vindo</a>
                </div>
            </form>
            </div>
            <div className="section__radio">
                <ul className="radio__group">
                    <li><input className="radio__input" name="process" id="radio-one" type='radio'  onClick={() => { setStep(step - 3);}}/></li>
                    <li><input className="radio__input" name="process" id="radio-two" type='radio' onClick={() => { setStep(step - 2);}}/></li>
                    <li><input className="radio__input" name="process" id="radio-three" type='radio' onClick={() => { setStep(step - 1);}}/></li>
                    <li><input className="radio__input" name="process" id="radio-three" type='radio' checked/></li>
                </ul>
            </div>
        </section>
    )
}