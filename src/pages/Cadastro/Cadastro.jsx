import React from "react";
import Menu from "../../components/Menu/Menu";
import Vlibras from "../../components/Vlibras/Vlibras";
import Controle_Cadastros from '../../components/Controle_Cadastros/Controle_Cadastros'
import "./style.css";

export default function Cadastro() {
  return (
    <>
      <Menu />
      <main className="cadastro">
        <div className="formulario">
          <form className="formcad" id="login" action="javascript:void(0)">
            <div className="titulo-cad">
              <h1>Cadastre sua Ong</h1>
            </div>
            <label for="name">Nome:</label>
            <br />
            <input type="text" name="name" id="name" required />
            <label for="name">CNPJ:</label>
            <br />
            <input type="text" name="name" id="name" required />
            <br />
            <label for="email">E-mail:</label>
            <br />
            <input type="email" name="email" id="email" required />
            <br />
            <label for="telefone">Telefone</label>
            <br />
            <input type="text" id="telefone" name="telefone" required placeholder="+55 (11) 98765-4321"/>
            <br />
            <label for="senha">Senha:</label>
            <br />
            <input type="password" name="senha" id="senha" />
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
