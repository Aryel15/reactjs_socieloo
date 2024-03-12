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
    senha: '',
    regiao: '',
    agencia: '',
    conta: '',
    pix: '',
    imagens: '',
    descricao: '',
    segmento: ''
  })
  const pages = [
    <Cadastrar step={step} setStep={setStep} setCadastro={setCadastro} cadastro={cadastro} />,
    <ValidaEmail step={step} setStep={setStep} cadastro={cadastro} />,
  ];
  return (
    <>
      <Menu />
      {pages[step]}
    </>
  )
}

function Cadastrar({ step, setStep, cadastro, setCadastro }) {
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
          setStep(step + 1);
        }, (err) => {
          console.log("FAILED...", err);
        }).catch((error) => { console.log(error) });
    }
  };

  


  return (
    <>
      <main className="cadastro">
        <img src="./imgs/cadeirarodas.png"/>
          <form className="formcad" id="login" action="javascript:void(0)" onSubmit={handleClickCadastro}>
            <div className="titulo-cad">
              <h1>Cadastre sua Ong</h1>
            </div>
            <main className="form-cad">
              <section className="form__group-1">
                <label for="nome">Nome:</label>
                <input type="text" name="nome" id="nome" onChange={valorCadastro} required />
                <label for="cnpj">Cnpj:</label>
                <input type="text" name="cnpj" id="cnpj" onChange={valorCadastro} required />
                <label for="cnae">Cnae:</label>
                {/* <IMaskInput mask="0000-0|00" name="cnae" id="cnae" onChange={valorCadastro} required/> */}
                <select name="cnae" id="cnae" onChange={valorCadastro} className="select-regiao" required>
                  <option value="#" selected disabled>Selecione uma opção</option>
                  <option value="9430-8/00 - ASSOCIAÇÃO DE PROTEÇÃO DE MINORIAS ÉTNICAS">9430-8/00 - ASSOCIAÇÃO DE PROTEÇÃO DE MINORIAS ÉTNICAS</option>
                  <option value="9430-8/00 - ASSOCIAÇÃO, ONG, DE DEFESA DO Meio Ambiente">9430-8/00 - ASSOCIAÇÃO, ONG, DE DEFESA DO Meio Ambiente</option>
                  <option value="9430-8/00 - ASSOCIAÇÃO, ONG, DE DEFESA DOS DIREITOS HUMANOS">9430-8/00 - ASSOCIAÇÃO, ONG, DE DEFESA DOS DIREITOS HUMANOS</option>
                  <option value="9430-8/00 - ASSOCIAÇÃO, ONG, DE GRUPOS MINORITÁRIOS">9430-8/00 - ASSOCIAÇÃO, ONG, DE GRUPOS MINORITÁRIOS</option>
                  <option value="9430-8/00 - ASSOCIAÇÃO, ONG, DE MOVIMENTOS ECOLÓGICOS">9430-8/00 - ASSOCIAÇÃO, ONG, DE MOVIMENTOS ECOLÓGICOS</option>
                  <option value="9430-8/00 - ATIVIDADE DE OPERAÇÃO DE CENTRAIS DE DISQUE DENUNCIA QUANDO REALIZADO POR ENTIDADES SEM FINS LUCRATIVOS">9430-8/00 - ATIVIDADE DE OPERAÇÃO DE CENTRAIS DE DISQUE DENUNCIA QUANDO REALIZADO POR ENTIDADES SEM FINS LUCRATIVOS</option>
                  <option value="Outro">Outro</option>
                </select>
                <p className="senha-fraca">{cnae}</p>
                <label for="email">E-mail:</label>
                <input type="email" name="email" id="email" onChange={valorCadastro} required />
                <label for="telefone">Telefone</label>
                <IMaskInput mask="00(00)000000000" name="telefone" id="telefone" onChange={valorCadastro} required />
                <label for="senha">Senha:</label>
                <input type="password" name="senha" id="senha" onChange={valorCadastro} />
                <p className="senha-fraca">{senha}</p>
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
                  <option value="Cultura e esporte">Cultura e esporte</option>
                  <option value="Gênero e diversidade">Gênero e diversidade</option>
                  <option value="Meio Ambiente">Meio Ambiente</option>
                  <option value="Proteção Ambiental">Proteção Ambiental</option>
                  <option value="Outro">Outro</option>
                </select>
                <div className="banco">
                  <div className="agencia">
                    <label for="agencia">Agência</label>
                    <input type="text" id="agencia" name="agencia" onChange={valorCadastro} required />
                  </div>
                  <div className="conta">
                    <label for="conta">Conta</label>
                    <input type="text" id="conta" name="conta" onChange={valorCadastro} required />
                  </div>
                </div>
                <label for="pix">Pix</label>
                <input type="text" id="pix" name="pix" onChange={valorCadastro} required />
              </section>
            </main>
            <label for="descricao">Descrição</label>
            <textarea name="descricao" id="descricao" cols="30" rows="10" onChange={valorCadastro} ></textarea>
            <button>Cadastre</button>
          </form>
          <img src="./imgs/gestora.png" />
      </main>
      <Controle_Cadastros />
      <Vlibras />
    </>
  );
}

function ValidaEmail({ cadastro }) {
  const [msg, setMsg] = useState("")
  const [codigo, setCodigo] = useState("")

  const handleClickCadastro = e => {
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
        senha: cadastro.senha,
        regiao: cadastro.regiao,
        agencia: cadastro.agencia,
        contaCorrente: cadastro.contaCorrente,
        pix: cadastro.pix,
        descricao: cadastro.descricao,
        segmento: cadastro.segmento
      }).then((response) => {
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("tipo", "ong");
        setMsg("✔ Sua Ong foi cadastrada")
        setTimeout(() => {
          window.location.pathname = "/gerenciamento-ong"
        }, 3000);
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
