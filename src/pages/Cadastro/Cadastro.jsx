import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import Vlibras from "../../components/Vlibras/Vlibras";
import Controle_Cadastros from '../../components/Controle_Cadastros/Controle_Cadastros'
import Axios from 'axios'
import { IMaskInput } from 'react-imask'
import "./style.css";

export default function Cadastro() {
  const [senha, setSenha] = useState("")
  const [cadastro, setCadastro] = useState({
    nome:'',
    cnpj:'',
    email:'',
    telefone:'',
    senha:''
  })
  const valorCadastro = e => setCadastro({...cadastro, [e.target.name]: e.target.value});

  const senhaForte = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  };

  const handleClickCadastro = async e =>{
    e.preventDefault();
    if (!senhaForte(cadastro.senha)) {
      setSenha('Senha fraca');
      return;
    }else{
      setSenha('');
    }
    console.log(cadastro);

    /*Axios.post("http://localhost:8080/api/v1/ong",{
      nome: cadastro.nome,
      cnpj: cadastro.cnpj,
      email: cadastro.email,
      telefone: cadastro.telefone,
      senha: cadastro.senha
    }).then((response) => {
      localStorage.setItem("id", response.data.id);
    })*/
  };

  
  return (
    <>
      <Menu />
      <main className="cadastro">
        <div className="formulario">
          <form className="formcad" id="login" action="javascript:void(0)" onSubmit={handleClickCadastro}>
            <div className="titulo-cad">
              <h1>Cadastre sua Ong</h1>
            </div>
            <label for="nome">Nome:</label>
            <br />
            <input type="text" name="nome" id="nome" onChange={valorCadastro} required />
            <label for="cnpj">CNPJ:</label>
            <br />
            <IMaskInput mask="000.000.000-00" placeholder="Digite o seu CPF" name="cnpj" id="cnpj" onChange={valorCadastro} required/>
            <br />
            <label for="email">E-mail:</label>
            <br />
            <input type="email" name="email" id="email" onChange={valorCadastro} required />
            <br />
            <label for="telefone">Telefone</label>
            <br />
            <IMaskInput mask="+00(00)00000-0000" name="telefone" id="telefone" onChange={valorCadastro} required/>
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
      <Controle_Cadastros/>
      <Vlibras />
    </>
  );
}

