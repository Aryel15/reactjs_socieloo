import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import Vlibras from "../../components/Vlibras/Vlibras";
import Controle_Cadastros from '../../components/Controle_Cadastros/Controle_Cadastros'
import Axios from 'axios'
import { IMaskInput } from 'react-imask'
import "./style.css";

export default function Cadastro() {
  const [senha, setSenha] = useState("")
  const [msg, setMsg] = useState("")
  const [cadastro, setCadastro] = useState({
    nome: '',
    cnae: '',
    email: '',
    telefone: '',
    senha: ''
  })
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

  const handleClickCadastro = async e => {
    e.preventDefault();
    console.log(cadastro.telefone.replace(/[^\d]/g, ''));

    if (!senhaForte(cadastro.senha)) {
      setSenha('Senha fraca');
      return;
    } else {
      setSenha('');
    }
    console.log(cadastro);

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
  };


  return (
    <>
      <Menu />
      <main className="cadastro">
        <div className="formulario">
          <form className="formcad" id="login" action="javascript:void(0)" onSubmit={handleClickCadastro}>
            <div className="titulo-cad">
              <p className="mensagem-cad">{msg}</p>
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

