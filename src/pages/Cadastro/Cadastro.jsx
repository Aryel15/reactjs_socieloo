import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import Vlibras from "../../components/Vlibras/Vlibras";
import Controle_Cadastros from '../../components/Controle_Cadastros/Controle_Cadastros'
import Axios from 'axios'
import { IMaskInput } from 'react-imask';
import emailjs from "emailjs-com";
import "./style.css";

export default function Cadastro() {
  const [step, setStep] = React.useState(0);
  const [cadastro, setCadastro] = useState({
    nome: '',
    cnae: '',
    email: '',
    telefone: '',
    senha: ''
  })
  const pages = [
    <Cadastrar step={step} setStep={setStep} setCadastro={setCadastro} cadastro={cadastro}/>, 
    <ValidaEmail step={step} setStep={setStep} cadastro={cadastro}/>, 
  ];
  return (
    <>
      <Menu />
        {pages[step]}
    </>
  )
}

function Cadastrar({step, setStep, cadastro, setCadastro}){
  const [senha, setSenha] = useState("")

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

  const handleClickCadastro = async e => {
    e.preventDefault();

    let codigo = gerarCodigo();

    if (!senhaForte(cadastro.senha)) {
      setSenha('Senha fraca');
      return;
    } else {
      setSenha('');
      sessionStorage.setItem("codigo", codigo)

      emailjs.init("user_J1drGGzW0lBRJmiE0X9Kg");
      emailjs.send("serviceID", "template_xwxib2d", {
        to_email: cadastro.email,
        codigo: codigo.toString(),
      }, "QSlqTSkhTipqcM7El")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStep(step+1);
      }, (err) => {
          console.log("FAILED...", err);
      });
    }
  };


  return (
    <>
      <main className="cadastro">
        <div className="formulario">
          <form className="formcad" id="login" action="javascript:void(0)" onSubmit={handleClickCadastro}>
            <div className="titulo-cad">
              <h1>Cadastre sua Ong</h1>
            </div>
            <label for="nome">Nome:</label>
            <br />
            <input type="text" name="nome" id="nome" onChange={valorCadastro} required />
            <label for="cnae">Cnae:</label>
            <br />
            {/* <IMaskInput mask="0000-0|00" name="cnae" id="cnae" onChange={valorCadastro} required/> */}
            <input type="text" name="cnae" id="cnae" onChange={valorCadastro} required />
            <br />
            <label for="email">E-mail:</label>
            <br />
            <input type="email" name="email" id="email" onChange={valorCadastro} required />
            <br />
            <label for="telefone">Telefone</label>
            <br />
            <IMaskInput mask="00000000" name="telefone" id="telefone" onChange={valorCadastro} required />
            <br />
            <label for="senha">Senha:</label>
            <br />
            <input type="password" name="senha" id="senha" onChange={valorCadastro} />
            <br />
            <p className="senha-fraca">{senha}</p>
            <button>Cadastre</button>
          </form>
        </div>
      </main>
      <Controle_Cadastros />
      <Vlibras />
    </>
  );
}
function ValidaEmail({cadastro}){
    const [msg, setMsg] = useState("")
    const [codigo, setCodigo] = useState("")

    const handleClickCadastro = e =>{
      e.preventDefault()
      const codigoArmazenado = sessionStorage.getItem("codigo");
      if (codigo === codigoArmazenado) {
        console.log(cadastro)
        window.sessionStorage.removeItem("codigo")
        Axios.post("http://localhost:8080/api/v1/ong", {
          nome: cadastro.nome,
          cnae: cadastro.cnae,
          email: cadastro.email,
          telefone: cadastro.telefone,
          senha: cadastro.senha
        }).then((response) => {
          localStorage.setItem("id", response.data.id);
          setMsg("✔ Sua Ong foi cadastrada")
          setTimeout(() => {
            window.location.pathname = "/perfil-ong"
          }, 3000); 
        })
      }else{
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
            <br />
            <input type="text" name="codigo" id="codigo" onChange={(e) => setCodigo(e.target.value)} required />
            <button>Cadastre</button>
          </form>
        </div>
      </main>
      <Vlibras />
    </>
  );
}

