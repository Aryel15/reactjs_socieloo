import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import Vlibras from "../../components/Vlibras/Vlibras";
import Controle_Cadastros from '../../components/Controle_Cadastros/Controle_Cadastros'
import Axios from 'axios'
import { IMaskInput } from 'react-imask'
import "./style.css";

export default function Cadastro() {
  const [senha, setSenha] = useState("")
  const [cnae, setCnae] = useState("")
  const [cadastro, setCadastro] = useState({
    nome:'',
    cnae:'',
    cnaeNumeros:'',
    email:'',
    telefone:'',
    senha:''
  })
  const valorCadastro = e => {
    const { name, value } = e.target;
    if (name === 'cnae') {
      const cnaeNumeros = value.replace(/[^\d]/g, '').substring(0, 5);
      setCadastro({
        ...cadastro,
        cnae: value,
        cnaeNumeros: cnaeNumeros,
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

  const handleClickCadastro = async e =>{
    e.preventDefault();
    if (!senhaForte(cadastro.senha)) {
      setSenha('Senha fraca');
      return;
    }else{
      setSenha('');
    }
    console.log(cadastro.cnaeNumeros);
    Axios.get("https://servicodados.ibge.gov.br/api/v2/cnae/classes/" + cadastro.cnaeNumeros)
    .then((response) =>{
      if(response.data.length > 0) {
        setCnae("");
        console.log(response.data);
        Axios.post("http://localhost:8080/api/v1/ong",{
          nome: cadastro.nome,
          cnae: cadastro.cnae,
          email: cadastro.email,
          telefone: cadastro.telefone,
          senha: cadastro.senha
        }).then((response) => {
          localStorage.setItem("id", response.data.id);
          console.log(response.data);
        })
        window.location.pathname = "/perfil-ong"
      } else {
        console.log(response.data);
        setCnae("Cnae inválido");
        return;
      }
    })

    /**/
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
            <label for="cnae">Cnae:</label>
            <br />
            <IMaskInput mask="0000-0/00" name="cnae" id="cnae" onChange={valorCadastro} required/>
            <br />
            <p className="invalido">{cnae}</p>
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
            <p className="invalido">{senha}</p>
            <button>Cadastre</button>
          </form>
        </div>
      </main>
      <Controle_Cadastros/>
      <Vlibras />
    </>
  );
}

