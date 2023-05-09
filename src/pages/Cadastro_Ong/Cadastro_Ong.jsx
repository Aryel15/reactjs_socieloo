
import React, { useState } from 'react'
import './style.css'
import Menu from '../../components/Menu/Menu'
import Controle_Cadastros from '../../components/Controle_Cadastros/Controle_Cadastros'
import Vlibras from '../../components/Vlibras/Vlibras'
import emailjs from "emailjs-com";
import Axios from 'axios'

export default function Cadastro_Ong() {
    const [step, setStep] = useState(0);

    const [cadastro, setCadastro] = useState({
      nome: '',
      cnae: '',
      cnpj: '',
      email: '',
      telefone: '',
      senha: '',
      regiao: '',
      agencia: '',
      contaCorrente: '',
      pix: '',
      descricao: '',
      segmento: '',
      cep:'',
      endereco:'',
      complemento:'',
      n:'',
      uf:'',
      bairro:''
    })
    const [senha, setSenha] = useState("")
    const [cnae, setCnae] = useState("")
  
    // const valorCadastro = e => setCadastro({ ...cadastro, [e.target.name]: e.target.value });

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
  
    const senhaForte = (senha) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
      return regex.test(senha);
    };
  
    function gerarCodigo() {
      let codigo = "";
      for (let i = 0; i < 5; i++) {
        codigo += Math.floor(Math.random() * 10);
      }
      return codigo;
    }
  
    const pages = [
      <Etapa1 step={step} setStep={setStep} cadastro={cadastro} valorCadastro={valorCadastro} />, 
      <Etapa2 step={step} setStep={setStep} cadastro={cadastro} valorCadastro={valorCadastro}/>,
      <Etapa3 step={step} setStep={setStep} cadastro={cadastro} valorCadastro={valorCadastro} setCadastro={setCadastro}/>,
      <Etapa4 step={step} setStep={setStep} cadastro={cadastro} valorCadastro={valorCadastro}/>,
      <Etapa5 step={step} setStep={setStep} cadastro={cadastro} valorCadastro={valorCadastro} gerarCodigo={gerarCodigo} senhaForte={senhaForte}/>,
      <ValidaEmail cadastro={cadastro} />,
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

export function Etapa1({ step, setStep, cadastro, valorCadastro }) {
    const [mensagem, setMensagem] = useState('');
    const msg = (<><i class="fa-solid fa-triangle-exclamation"></i>Preencha todos os campos</>)
    const HandleClickAvançar = (e)=>{
        e.preventDefault()
        if((cadastro.nome !== '') && (cadastro.email !== '') && (cadastro.telefone !== '') && (cadastro.cnpj !== '') && (cadastro.cnae !== '')){
          setStep(step + 1)
        }else{
          setMensagem(msg)
          console.log(cadastro);
        }
    }
  return (
    <section id="cadastro__section">
        <div className="section__form">
            <form action="#" method="post">
                <p className='mensagem'>{mensagem}</p>
                <h1 className="section__title">Cadastre sua ONG</h1>
                <section className="form__group">
                    <div className="group__text">
                        <label for="nome">Nome</label>
                        <input type="text" id="nome" name="nome" value={cadastro?.nome} required placeholder="Socieloo" onChange={valorCadastro}/>

                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" value={cadastro?.email} required placeholder="noobmaster69@hotmail.com" onChange={valorCadastro}/>

                        <label for="telefone">Telefone</label>
                        <input type="text" id="telefone" name="telefone" value={cadastro?.telefone} required placeholder="+55 (11) 98765-4321" onChange={valorCadastro}/>

                        <label for="cnpj">CNPJ:</label>
                        <input type="text" name="cnpj" id="cnpj" value={cadastro?.cnpj} placeholder="000.000.000-00" onChange={valorCadastro} required/>

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
                    <a href="javascript:void(0);" className="options__submit" onClick={HandleClickAvançar}>Avançar</a>
                </section>
            </form>
        </div>
        <div className="section__radio">
            <ul className="radio__group">
                <li><input className="radio__input" name="process" id="radio-one" type='radio' checked/></li>
                <li><input className="radio__input" name="process" id="radio-two" type='radio' onClick={() => { setStep(step + 1);}}/></li>
                <li><input className="radio__input" name="process" id="radio-three" type='radio'onClick={() => { setStep(step + 2);}}/></li>
                <li><input className="radio__input" name="process" id="radio-four" type='radio'onClick={() => { setStep(step + 3);}}/></li>
                <li><input className="radio__input" name="process" id="radio-five" type='radio'onClick={() => { setStep(step + 4);}}/></li>
            </ul>
        </div>
    </section>
  )
}
function Etapa2({ step, setStep, cadastro, valorCadastro }) {
      const [mensagem, setMensagem] = useState('');
      const msg = (<><i class="fa-solid fa-triangle-exclamation"></i>Preencha todos os campos</>)
      const HandleClickAvançar = (e)=>{
          e.preventDefault()
          if((cadastro.regiao !== '') && (cadastro.segmento !== '') && (cadastro.descricao !== '')){
              setStep(step + 1)
          }else{
            setMensagem(msg)
          }
      }
      return (
          <section id="cadastro__section">
              <div className="section__form 2">
                  <p className='mensagem'>{mensagem}</p>
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
                        <option value="Proteção Animal">Proteção Animal</option>
                        <option value="Outro">Outro</option>
                        </select>
                      </div>
                      <label for="descricao">Descrição</label>
                      <textarea name="descricao" id="descricao" cols="30" rows="10" value={cadastro?.descricao} onChange={valorCadastro} ></textarea>
                  </form>
                  <div className="buttons-form2">
                      <a href="javascript:void(0);" className="voltar" onClick={() => { setStep(step - 1);}}>Voltar</a>
                      <a href="javascript:void(0);" className="options__submit" onClick={HandleClickAvançar}>Avançar</a>
                  </div>
              </div>
              <div className="section__radio">
                  <ul className="radio__group">
                      <li><input className="radio__input" name="process" id="radio-one" type='radio'  onClick={() => { setStep(step - 1);}}/></li>
                      <li><input className="radio__input" name="process" id="radio-two" type='radio' checked/></li>
                      <li><input className="radio__input" name="process" id="radio-three" type='radio' onClick={() => { setStep(step + 1);}}/></li>
                      <li><input className="radio__input" name="process" id="radio-four" type='radio' onClick={() => { setStep(step + 2);}}/></li>
                      <li><input className="radio__input" name="process" id="radio-five" type='radio' onClick={() => { setStep(step + 3);}}/></li>
                  </ul>
              </div>
          </section>
      )
  }

  function Etapa3({ step, setStep, cadastro, valorCadastro, setCadastro }) {
      const [mensagem, setMensagem] = useState('');
      const [dataCep, setDataCep] = useState()
      const msg = (<><i class="fa-solid fa-triangle-exclamation"></i>Preencha todos os campos</>)
      const HandleClickAvançar = (e)=>{
          e.preventDefault()
          if((cadastro.cep !== '') && (cadastro.n !== '') && (cadastro.complemento !== '') && (dataCep.uf !=='') && (dataCep.endereco !=='') && (dataCep.bairro !=='')){
              setStep(step + 1)
          }else{
            setMensagem(msg)
          }
      }
      Axios.get(`https://viacep.com.br/ws/${cadastro.cep}/json`)
      .then((response) => {
        if(response.data !== undefined){
          setDataCep(response.data)
          setCadastro({...cadastro, endereco: dataCep.logradouro, bairro: dataCep.bairro, uf: dataCep.uf})
        }
      })
      .catch((err) => console.log(err))
      return (
          <section id="cadastro__section">
              <div className="section__form 2">
                  <p className='mensagem'>{mensagem}</p>
                  <h1 className="section__title">Cadastre sua Ong</h1>
                  <form action="" className='form-2'>
                      <div className="collum">
                          <div className="row">
                            <div className="cep">
                                <label for="cep">CEP</label>
                                <input type="text" id="cep" name="cep" value={cadastro?.cep} onChange={valorCadastro} required/>
                            </div>
                            <div className="n">
                                <label for="n">N°</label>
                                <input type="text" id="n" name="n"  value={cadastro?.n} onChange={valorCadastro} required/>
                            </div>
                          </div>
                          <div className="complemento">
                              <label for="complemento">Complemento</label>
                              <input type="text" id="complemento" name="complemento" value={cadastro?.complemento} onChange={valorCadastro} required/>
                          </div>
                          {/* <div className="logradouro">
                              <label for="logradouro">Logradouro</label>
                              <input type="text" id="logradouro" name="logradouro" required/>
                          </div> */}
                          <div className="endereco">
                              <label for="endereco">Endereco</label>
                              <input type="text" id="endereco" name="endereco"  value={dataCep?.logradouro} onChange={valorCadastro} required/>
                          </div>
                          <div className="row">
                            <div className="bairro">
                                <label for="bairro">Bairro</label>
                                <input type="text" id="bairro" name="bairro"  value={dataCep?.bairro} onChange={valorCadastro} required/>
                            </div>
                            <div className="uf">
                                <label for="uf">UF</label>
                                <input type="text" id="uf" name="uf"  value={dataCep?.uf} onChange={valorCadastro} required/>
                            </div>
                          </div>
                      </div>
                  </form>
                  <div className="buttons-form2">
                      <a href="javascript:void(0);" className="voltar" onClick={() => { setStep(step - 1);}}>Voltar</a>
                      <a href="javascript:void(0);" className="options__submit" onClick={HandleClickAvançar}>Avançar</a>
                  </div>
              </div>
              <div className="section__radio">
                  <ul className="radio__group">
                      <li><input className="radio__input" name="process" id="radio-one" type='radio'  onClick={() => { setStep(step - 2);}}/></li>
                      <li><input className="radio__input" name="process" id="radio-two" type='radio' onClick={() => { setStep(step - 1);}}/></li>
                      <li><input className="radio__input" name="process" id="radio-three" type='radio' checked/></li>
                      <li><input className="radio__input" name="process" id="radio-four" type='radio' onClick={() => { setStep(step + 1);}}/></li>
                      <li><input className="radio__input" name="process" id="radio-five" type='radio' onClick={() => { setStep(step + 2);}}/></li>
                  </ul>
              </div>
          </section>
      )
  }
  function Etapa4({ step, setStep, cadastro, valorCadastro }) {
      const [mensagem, setMensagem] = useState('');
      const msg = (<><i class="fa-solid fa-triangle-exclamation"></i>Preencha todos os campos</>)
      const HandleClickAvançar = (e)=>{
          e.preventDefault()
          if((cadastro.agencia !== '') && (cadastro.contaCorrente !== '') && (cadastro.pix !== '')){
              setStep(step + 1)
          }else{
            setMensagem(msg)
          }
      }
      return (
          <section id="cadastro__section">
              <div className="section__form 2">
                  <p className='mensagem'>{mensagem}</p>
                  <h1 className="section__title">Cadastre sua Ong</h1>
                  <form action="" className='form-2'>
                      <div className="collum">
                          <div className="agencia">
                              <label for="agencia">Agência</label>
                              <input type="text" id="agencia" name="agencia" required value={cadastro?.agencia} onChange={valorCadastro}/>
                          </div>
                          <div className="conta">
                              <label for="contaCorrente">Conta</label>
                              <input type="text" id="contaCorrente" name="contaCorrente" required value={cadastro?.contaCorrente} onChange={valorCadastro}/>
                          </div>
                          <label for="pix">Pix</label>
                          <input type="text" id="pix" name="pix" required value={cadastro?.pix} onChange={valorCadastro}/>
                      </div>
                  </form>
                  <div className="buttons-form2">
                      <a href="javascript:void(0);" className="voltar" onClick={() => { setStep(step - 1);}}>Voltar</a>
                      <a href="javascript:void(0);" className="options__submit" onClick={HandleClickAvançar}>Avançar</a>
                  </div>
              </div>
              <div className="section__radio">
                  <ul className="radio__group">
                      <li><input className="radio__input" name="process" id="radio-one" type='radio'  onClick={() => { setStep(step - 3);}}/></li>
                      <li><input className="radio__input" name="process" id="radio-two" type='radio' onClick={() => { setStep(step - 2);}}/></li>
                      <li><input className="radio__input" name="process" id="radio-three" type='radio' onClick={() => { setStep(step - 1);}}/></li>
                      <li><input className="radio__input" name="process" id="radio-four" type='radio' checked/></li>
                      <li><input className="radio__input" name="process" id="radio-five" type='radio' onClick={() => { setStep(step + 1);}}/></li>
                  </ul>
              </div>
          </section>
      )
  }

function Etapa5({ step, setStep, cadastro, senhaForte, valorCadastro, gerarCodigo }) {
    const [senhaDiferente, setSenhaDiferente] = useState("")
    const [msgsenhaDiferente, setMsgSenhaDiferente] = useState("")
    const [mensagem, setMensagem] = useState('');
    const [senhaFraca, setSenhaFraca] = useState("")
    const msg = (<><i class="fa-solid fa-triangle-exclamation"></i>Preencha todos os campos</>)
    const popBox = (
      <section className="popup">
        <div className="boxpopup">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <p>Preencha todos os campos!</p>
          <div className="progress-bar"></div>
        </div>
      </section>
    )
    const [popUp, setPopUp] = useState("")

    function enviarEmail(destinatario, codigo) {
      return emailjs.send("serviceID", "template_xwxib2d", {
        to_email: destinatario,
        codigo: codigo.toString(),
      }, "QSlqTSkhTipqcM7El");
    }

    const isCadastroValido = () => {
      for (let campo in cadastro) {
        if (cadastro[campo] === '' || cadastro[campo] === null) {
          setPopUp(popBox);
          console.log(cadastro);
          setTimeout(() => {
            setPopUp("");
          }, 2000); 
          return;
        }
      }
      let codigo = gerarCodigo();
      setMsgSenhaDiferente('');
      sessionStorage.setItem("codigo", codigo);
    
      enviarEmail(cadastro.email, codigo)
        .then(() => {
          setStep(step + 1);
        })
        .catch((error) => {
          console.log(error);
      });
    }

    const HandleClickAvançar = (e) => {
      e.preventDefault();
    
      if (cadastro.senha === '' || senhaDiferente === '') {
        setMensagem(msg);
        console.log("não tem senha");
        console.log(cadastro);
        return;
      }
    
      if (!senhaForte(cadastro.senha)) {
        setMensagem('');
        setSenhaFraca('Senha fraca');
        console.log("senha fraca");
        return;
      }
    
      if (cadastro.senha !== senhaDiferente) {
        setSenhaFraca('');
        setMsgSenhaDiferente('As senhas são diferentes');
        console.log('As senhas são diferentes');
        return;
      }
    
      isCadastroValido();
    };

    return(
        <section id="cadastro__section">
            <div className="section__form 2">
            <p className='mensagem'>{mensagem}</p>
            <h1 className="section__title">Cadastre sua ONG</h1>
            <form action="" className='form-3'>
                <label for="senha">Senha</label>
                <input type="password" id="senha" name="senha" onChange={valorCadastro} required/>
                <p className='err-senha'>{senhaFraca}</p>
                <label for="confirmsenha">Confirmar senha</label>
                <input type="password" id="confirmsenha" name="confirmsenha" required onChange={(e) => setSenhaDiferente(e.target.value)}/>
                <p className='err-senha'>{msgsenhaDiferente}</p>
                <div className="options__checkbox">
                    <input type="checkbox" name="termos" id="termos"/>
                    <label for="termos">Eu concordo com os <a href="#">termos e condições</a></label>
                </div>
                <div className="buttons-form2">
                    <a href="javascript:void(0);" className="voltar" onClick={() => { setStep(step - 1);}}>Voltar</a>
                    <a href="javascript:void(0);" className="options__submit" onClick={HandleClickAvançar}>Finalizar Cadastro</a>
                </div>
            </form>
            </div>
            <div className="section__radio">
                <ul className="radio__group">
                    <li><input className="radio__input" name="process" id="radio-one" type='radio'  onClick={() => { setStep(step - 4);}}/></li>
                    <li><input className="radio__input" name="process" id="radio-two" type='radio'  onClick={() => { setStep(step - 3);}}/></li>
                    <li><input className="radio__input" name="process" id="radio-three" type='radio' onClick={() => { setStep(step - 2);}}/></li>
                    <li><input className="radio__input" name="process" id="radio-four" type='radio' onClick={() => { setStep(step - 1);}}/></li>
                    <li><input className="radio__input" name="process" id="radio-five" type='radio' checked/></li>
                </ul>
            </div>
            {popUp}

        </section>
    )
}
function ValidaEmail({ cadastro }) {
    const [msg, setMsg] = useState("")
    const [codigo, setCodigo] = useState("")
    
    const popBox = (
      <section className="popup">
        <div className="boxpopup">
          <i class="fa-solid fa-circle-check"></i>
          <p>Sua Ong foi cadastrada com sucesso!</p>
          <div className="progress-bar"></div>
        </div>
      </section>
    )
    const [popUp, setPopUp] = useState("")
  
    const handleClickCadastro = e => {
      e.preventDefault()
      const codigoArmazenado = sessionStorage.getItem("codigo");
      if (codigo === codigoArmazenado) {
        console.log(cadastro)
        window.sessionStorage.removeItem("codigo")
        Axios.post("http://localhost:8080/api/v1/ong", {
          nome: cadastro.nome,
          cnae: cadastro.cnae,
          cnpj: cadastro.cnpj,
          email: cadastro.email,
          telefone: cadastro.telefone,
          senha: cadastro.senha,
          regiao: cadastro.regiao,
          agencia: cadastro.agencia,
          contaCorrente: cadastro.contaCorrente,
          pix: cadastro.pix,
          descricao: cadastro.descricao,
          segmento: cadastro.segmento,
          cep: cadastro.cep,
          endereco: cadastro.endereco,
          complemento: cadastro.complemento,
          //n: cadastro.n,
          //uf: cadastro.uf,
          //bairro: cadastro.bairro
        }).then((response) => {
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("tipo", "ong");
          setPopUp(popBox);
          console.log(cadastro);
          setTimeout(() => {
            window.location.pathname = "/gerenciamento-ong"
          }, 2000); 
        })
      } else {
        alert("Código inválido");
      }
    }
  
    return (
      <>
        <main className="cadastro">
          <div className="formulario">
            <form className="formcad" id="login" action="javascript:void(0)" onSubmit={handleClickCadastro}>
              <div className="titulo-cad">
                <p className="mensagem-cad">{msg}</p>
                <h1>Validação de Email</h1>
                <p>Digite o código que foi enviado para o seu email</p>
                <br />
              </div>
              <label for="codigo">Código:</label>
              <input type="text" name="codigo" id="codigo" onChange={(e) => setCodigo(e.target.value)} required />
              <button>Cadastre</button>
            </form>
          </div>
          {popUp}
        </main>
      </>
    );
  }