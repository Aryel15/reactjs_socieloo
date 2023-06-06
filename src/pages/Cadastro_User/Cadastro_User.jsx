import React, {useState} from 'react'
import './style.css'
import Menu from '../../components/Menu/Menu'
import Controle_Cadastros from '../../components/Controle_Cadastros/Controle_Cadastros'
import Vlibras from '../../components/Vlibras/Vlibras'
import Axios from 'axios'


export default function Cadastro_User() {
  const [step, setStep] = useState(0);
  const [cadastro, setCadastro] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    senha: ''
  })
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
  /*const handleCheckboxChange = e => {
    const { title, checked } = e.target;
    if (checked) {
      // adicionar o valor do checkbox ao array
      setCadastro(prevState => ({
        ...prevState,
        segmentos: [...prevState.segmentos, title]
      }));
    } else {
      // remover o valor do checkbox do array
      setCadastro(prevState => ({
        ...prevState,
        segmentos: prevState.segmentos.filter(item => item !== title)
      }));
    }
  };*/

  const pages = [
    <Etapa1 step={step} setStep={setStep} cadastro={cadastro} valorCadastro={valorCadastro}/>, 
    //<Etapa2 step={step} setStep={setStep} cadastro={cadastro} valorCadastro={valorCadastro}/>, 
    //<Etapa3 step={step} setStep={setStep} cadastro={cadastro} valorCadastro={valorCadastro} handleCheckboxChange={handleCheckboxChange}/>,
    <Etapa4 step={step} setStep={setStep} cadastro={cadastro} valorCadastro={valorCadastro}/>
  ];
  return (
    <>
      <Menu />
      <main className='cad-user' id='conteudo'>
        <img src="../imgs/doacaoAnimal.png" alt=""/>
        {pages[step]}
        <img src="../imgs/cadeirarodas.png" alt=""/>
      </main>
        <Controle_Cadastros /><Vlibras />
    </>
  )


}

export function Etapa1({step, setStep, cadastro, valorCadastro}){
  const [mensagem, setMensagem] = useState('');
  const [senhaFraca, setSenhaFraca] = useState('');
  const msg = (<><i class="fa-solid fa-triangle-exclamation"></i>Preencha todos os campos</>)
  function gerarCodigo() {
    let codigo = "";
    for (let i = 0; i < 5; i++) {
      codigo += Math.floor(Math.random() * 10);
    }
    return codigo;
  }
  function enviarEmail(destinatario, codigo) {
    return emailjs.send("serviceID", "template_xwxib2d", {
      to_email: destinatario,
      codigo: codigo.toString(),
    }, "QSlqTSkhTipqcM7El");
  }
  function ValidaEmail(){
    let codigo = gerarCodigo();
    sessionStorage.setItem("codigo", codigo);
  
    enviarEmail(cadastro.email, codigo)
      .then(() => {
        setStep(step + 1);
      })
      .catch((error) => {
        console.log(error);
    });
  }

  const HandleClickAvançar = (e)=>{
      e.preventDefault()
      if((cadastro.nome !== '') && (cadastro.email !== '') && (cadastro.sobrenome !== '') && (cadastro.senha !== '')){
        if (!senhaForte(cadastro.senha)) {
          setSenhaFraca('Senha fraca');
          console.log("senha fraca");
          return;
        }else{
          setStep(step + 1)
          ValidaEmail()
        }
      }else{
        setMensagem(msg)
        console.log(cadastro);
      }
  }
  const senhaForte = (senha) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(senha);
  };
  return(
    <section className="section-user">
      <form action="#" method="post" className="form-container">
        <p className="mensagem">{mensagem}</p>
        <h2 className="form-title">Faça seu cadastro</h2>
        <div>
          <input className="input-field" type="text" id="name" name="nome" placeholder="Nome" required value={cadastro?.nome} onChange={valorCadastro}/>
          <input className="input-field" type="text" id="secondName" name="sobrenome" placeholder="Sobrenome" required value={cadastro?.sobrenome} onChange={valorCadastro}/>
        </div>
        <input className='input-field' type="email" id="email" name="email" placeholder="E-mail" value={cadastro?.email} onChange={valorCadastro}/>
        <input className="input-field" type="password" id="password" name="senha" placeholder="Senha" onChange={valorCadastro}/>
        <p className="mensagem">{senhaFraca}</p>
        <div className="buttons">
          {/*<a href="#" className="button-white" ><img src='./imgs/google.png' alt="" />Cadastrar-se com Google</a>*/}
          <a href="javascript:void(0);" className="button-blue-1" onClick={HandleClickAvançar}>Próximo</a>
        </div>
      </form>
    </section>
  )
}
/*export function Etapa2({step, setStep, cadastro, valorCadastro}){
  const [mensagem, setMensagem] = useState('');
  const msg = (<><i class="fa-solid fa-triangle-exclamation"></i>Selecione uma das opções</>)
  const HandleClickAvançar = (e)=>{
      e.preventDefault()
      if((cadastro.regiao !== '')){
        setStep(step + 1)
      }else{
        setMensagem(msg)
        console.log(cadastro);
      }
  }
  return(
    <section className="section-user">
          <form action="#" method="post" className="form-container">
            <p className="mensagem">{mensagem}</p>
            <h1 className="section__title">
              Deseja selecionar uma região de preferência?
            </h1>
            <div className="radio-group">
              <div className="input-group">
                <div className="input">
                  <input type="radio" name="regiao" id="north" title="Zona Norte" onChange={valorCadastro}/>
                  <label for="north">Zona Norte</label>
                </div>
                <div className="input">
                  <input type="radio" name="regiao" id="south" title="Zona Sul" onChange={valorCadastro}/>
                  <label for="south">Zona Sul</label>
                </div>
                <div className="input">
                  <input type="radio" name="regiao" id="east" title="Zona Leste" onChange={valorCadastro}/>
                  <label for="east">Zona Leste</label>
                </div>
                <div className="input">
                  <input type="radio" name="regiao" id="west" title="Zona Oeste" onChange={valorCadastro}/>
                  <label for="west">Zona Oeste</label>
                </div>
                <div className="input">
                  <input type="radio" name="regiao" id="center" title="Centro" onChange={valorCadastro}/>
                  <label for="center">Centro</label>
                </div>
              </div>
            </div>
            <div className="buttons">
              <a href="javascript:void(0);" className="button-white" onClick={() => { setStep(step - 1);}}>
                Voltar
              </a>
              <a href="javascript:void(0);" className="button-blue" onClick={HandleClickAvançar}>
                Próximo
              </a>
            </div>
          </form>
      </section>
  )
}

export function Etapa3({step, setStep, cadastro, handleCheckboxChange}) {
  const [mensagem, setMensagem] = useState('');
  const msg = (<><i class="fa-solid fa-triangle-exclamation"></i>Selecione no minimo uma das opções</>)

  function gerarCodigo() {
    let codigo = "";
    for (let i = 0; i < 5; i++) {
      codigo += Math.floor(Math.random() * 10);
    }
    return codigo;
  }
  function enviarEmail(destinatario, codigo) {
    return emailjs.send("serviceID", "template_xwxib2d", {
      to_email: destinatario,
      codigo: codigo.toString(),
    }, "QSlqTSkhTipqcM7El");
  }
  function ValidaEmail(){
    let codigo = gerarCodigo();
    sessionStorage.setItem("codigo", codigo);
  
    enviarEmail(cadastro.email, codigo)
      .then(() => {
        setStep(step + 1);
      })
      .catch((error) => {
        console.log(error);
    });
  }
  const HandleClickAvançar = (e)=>{
    e.preventDefault()
    if((cadastro.segmentos.length > 0)){
      setStep(step + 1)
      ValidaEmail()
    }else{
      setMensagem(msg)
      console.log(cadastro);
    }
  }
  
  return (
    <section className="section-user">
        <form action="#" method="post" className="form-container">
            <p className="mensagem">{mensagem}</p>
            <h1 className="section__title">
                Selecione seus segmentos favoritos
            </h1>

            <div className="input-group">
                <div className="input">
                    <input type="checkbox" name="citizenship" id="citizenship" title="Cidadania" onChange={handleCheckboxChange}/>
                    <label for="citizenship">Cidadania</label>
                </div>

                <div className="input">
                    <input type="checkbox" name="animalProtection" id="animalProtection" title="Proteção Animal" onChange={handleCheckboxChange}/>
                    <label for="animalProtection">Proteção Animal</label>
                </div>

                <div className="input">
                    <input type="checkbox" name="cultureSports" id="cultureSports" title="Cultura e Esportes" onChange={handleCheckboxChange}/>
                    <label for="cultureSports">Cultura e Esportes</label>
                </div>

                <div className="input">
                    <input type="checkbox" name="genderDiversity" id="genderDiversity" title="Gênero e Diversidade" onChange={handleCheckboxChange}/>
                    <label for="genderDiversity">Gênero e Diversidade</label>
                </div>

                <div className="input">
                    <input type="checkbox" name="education" id="education" title="Educação" onChange={handleCheckboxChange}/>
                    <label for="education">Educação</label>
                </div>

                <div className="input">
                    <input type="checkbox" name="health" id="health" title="Saúde" onChange={handleCheckboxChange}/>
                    <label for="health">Saúde</label>
                </div>

                <div className="input">
                    <input type="checkbox" name="environment" id="environment" title="Meio Ambiente" onChange={handleCheckboxChange}/>
                    <label for="environment">Meio Ambiente</label>
                </div>
            </div>
            <div className="buttons">
              <a href="javascript:void(0);" className="button-white" onClick={() => { setStep(step - 1);}}>
                Voltar
              </a>
              <a href="javascript:void(0);" className="button-blue" onClick={HandleClickAvançar}>
                Próximo
              </a>
            </div>
        </form>
    </section>
  )
}*/
export function Etapa4({step, setStep, cadastro}) {

  const formatEmail = (email) => {
    const atIndex = email.indexOf('@');
    const domain = email.slice(atIndex);
    const maskedUsername = email.slice(0, 2) + '*'.repeat(atIndex - 3) + email.slice(atIndex - 1, atIndex);
    return maskedUsername + domain;
  };

  const popBox = (
    <section className="popup">
      <div className="boxpopup">
        <i class="fa-solid fa-circle-check"></i>
        <p>Você foi cadastrado com sucesso!</p>
        <div className="progress-bar"></div>
      </div>
    </section>
  )
  const [popUp, setPopUp] = useState("")
  const [codigo, setCodigo] = useState("")
  const codigoArmazenado = sessionStorage.getItem("codigo");
  function handleClickCadastro(){
    if (codigo == codigoArmazenado) {
      console.log(cadastro)
      window.sessionStorage.removeItem("codigo")
        Axios.post("https://socieloo-back.onrender.com/api/v1/user", {
          nome: cadastro.nome,
          sobrenome: cadastro.sobrenome,
          email: cadastro.email,
          senha: cadastro.senha,
        }).then((response) => {
          console.log(response.data);
          localStorage.removeItem("tipo")
          localStorage.removeItem("id")
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("tipo", "usuario");
          setPopUp(popBox);
          setTimeout(() => {
            window.location.pathname = "/"
          }, 2000);
        }).catch((err) => console.log(err))
      } else {
        alert("Código inválido");
      }
    }

  
  
  return (
    <section className="section-user">
        <form action="#" method="post" className="form-container">
          <h1 className="section__title">
            Digite o código enviado pelo e-mail
          </h1>
          <p>Um email de confirmação foi enviado para: <br/> <a href="#">{formatEmail(cadastro.email)}</a></p>
          <input class="input-field" type="text" id="code" name="code" placeholder="Código" required onChange={e => setCodigo(e.target.value)} />
          <div class="buttons">
            <a href="javascript:void(0);" class="button-white" onClick={() => { setStep(step - 1);}}>
              Voltar
            </a>
            <a href="javascript:void(0);" className="button-blue" onClick={handleClickCadastro}>
              Finalizar
            </a>
          </div>
        </form>
        {popUp}
    </section>
  )

}
