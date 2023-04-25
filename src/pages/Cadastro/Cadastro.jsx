import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import Vlibras from "../../components/Vlibras/Vlibras";
import Controle_Cadastros from '../../components/Controle_Cadastros/Controle_Cadastros'
import Axios from 'axios'
import "./style.css";

export default function Cadastro() {
  const [cadastro, setCadastro] = useState({
    nome:'',
    cnpj:'',
    email:'',
    telefone:'',
    senha:''
  })
  const valorCadastro = e => setCadastro({...cadastro, [e.target.name]: e.target.value});

  const handleClickCadastro = async e =>{
    e.preventDefault();
    console.log(cadastro);
    /*Axios.post("",{
      nome: cadastro.nome,
      cnpj: cadastro.cnpj,
      email: cadastro.email,
      telefone: cadastro.telefone,
      senha: cadastro.senha
    }).then((response) => {
      console.log(response);
    })*/};
  
  return (
    <>
      <Menu />
      <main className="cadastro">
        <div className="formulario">
          <form className="formcad" id="login" action="javascript:void(0)" onSubmit={handleClickCadastro}>
            <div className="titulo-cad">
              <h1>Cadastre sua Ong</h1>
            </div>
            <label for="name">Nome:</label>
            <br />
            <input type="text" name="name" id="name" onChange={valorCadastro} required />
            <label for="cnpj">CNPJ:</label>
            <br />
            <input type="text" name="cnpj" id="cnpj" onChange={valorCadastro} required />
            <br />
            <label for="email">E-mail:</label>
            <br />
            <input type="email" name="email" id="email" onChange={valorCadastro} required />
            <br />
            <label for="telefone">Telefone</label>
            <br />
            <input type="text" id="telefone" name="telefone" onChange={valorCadastro} required placeholder="+55 (11) 98765-4321"/>
            <br />
            <label for="senha">Senha:</label>
            <br />
            <input type="password" name="senha" id="senha" onChange={valorCadastro} />
            <br />
            <button>Cadastre</button>
          </form>
        </div>
      </main>
      <Controle_Cadastros/>
      <Vlibras />
    </>
  );
  }
