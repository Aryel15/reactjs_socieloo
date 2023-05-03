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
    Axios.get("https://servicodados.ibge.gov.br/api/v2/cnae/classes/" + cadastro.cnaeNumeros)
    .then((response) =>{
      if(response.data.length > 0) {
        setCnae("");
        console.log(response.data);
      } else {
        console.log(response.data);
        setCnae("Cnae inválido");
        return;
      }
    })
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
        });
    }
  };


  return (
    <>
      <main className="cadastro">
          <form className="formcad" id="login" action="javascript:void(0)" onSubmit={handleClickCadastro}>
            <div className="titulo-cad">
              <h1>Cadastre sua Ong</h1>
            </div>
            <div className="form-cad">
              <section className="form__group">
                <label for="nome">Nome:</label>
                <input type="text" name="nome" id="nome" onChange={valorCadastro} required />
                <label for="cnae">Cnae:</label>
                <input type="text" name="cnae" id="cnae" onChange={valorCadastro} required />
                <label for="email">E-mail:</label>
                <input type="email" name="email" id="email" onChange={valorCadastro} required />
                <label for="telefone">Telefone</label>
                <IMaskInput mask="00(00)000000000" name="telefone" id="telefone" onChange={valorCadastro} required />
                <label for="senha">Senha:</label>
                <input type="password" name="senha" id="senha" onChange={valorCadastro} />
                <p className="senha-fraca">{senha}</p>
              </section>

              <section className="form__group">
                <label for="regiao">Região</label>
                <div id="group__select">
                  <select name="regiao" id="regiao" onChange={valorCadastro} className="cad-select" required>
                    <option value="#" selected disabled>Selecione uma opção</option>
                    <option value="norte">Zona Norte</option>
                    <option value="sul">Zona Sul</option>
                    <option value="centro">Centro</option>
                    <option value="leste">Zona Leste</option>
                    <option value="oeste">Zona Oeste</option>
                  </select>
                </div>
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
                <label htmlFor="imagens">Imagens</label>
                <input type="file" name="imagens" id="imagens" onChange={valorCadastro} />
              </section>

              <section className="form__group">
                <div className="group__about">
                  <div className="about__radios">
                    <label className="radio-label">Qual a causa da sua ONG?</label>
                    <div className="radio__options">
                      <input type="radio" id="saude" name="segmento" value="saude" onChange={valorCadastro} />
                      <label for="saude" className="radio__option">Saúde</label>
                    </div>
                    <div className="radio__options">
                      <input type="radio" id="educacao" value="educacao" name="segmento" onChange={valorCadastro} />
                      <label for="educacao" className="radio__option">Educação</label>
                    </div>
                    <div className="radio__options">
                      <input type="radio" id="cidadania" value="cidadania" name="segmento" onChange={valorCadastro} />
                      <label for="cidadania" className="radio__option">Cidadania</label>
                    </div>
                    <div className="radio__options">
                      <input type="radio" id="culturaOuEsporte" value="culturaOuEsporte" name="segmento" onChange={valorCadastro} />
                      <label for="culturaOuEsporte" className="radio__option">Cultura ou esporte</label>
                    </div>
                    <div className="radio__options">
                      <input type="radio" id="generoOudiversidade" value="generoOudiversidade" name="segmento" onChange={valorCadastro} />
                      <label for="generoOudiversidade" className="radio__option">Gênero e diversidade</label>
                    </div>
                    <div className="radio__options">
                      <input type="radio" id="meioAmbiente" value="meioAmbiente" name="segmento" onChange={valorCadastro} />
                      <label for="meioAmbiente" className="radio__option">Meio ambiente</label>
                    </div>
                    <div className="radio__options">
                      <input type="radio" id="protecaoAmbiental" value="protecaoAmbiental" name="segmento" onChange={valorCadastro} />
                      <label for="protecaoAmbiental" className="radio__option">Proteção Ambiental</label>
                    </div>
                    <div className="radio__options">
                      <input type="radio" id="outro" value="outro" name="segmento" onChange={valorCadastro} />
                      <label for="outro" className="radio__option">Outro</label>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <label for="descricao">Descrição</label>
            <textarea name="descricao" id="descricao" cols="30" rows="10" onChange={valorCadastro} ></textarea>
            <button>Cadastre</button>
          </form>
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
        contaCorrente: cadastro.conta,
        pix: cadastro.pix,
        descricao: cadastro.descricao,
        segmento: cadastro.segmento
      }).then((response) => {
        localStorage.setItem("id", response.data.id);
        setMsg("✔ Sua Ong foi cadastrada")
        setTimeout(() => {
          window.location.pathname = "/perfil-ong"
        }, 3000);
      }).catch((err) => console.log(err))
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

