import "./style.css";
import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import Vlibras from "../../components/Vlibras/Vlibras";
import Axios from "axios";

export default function Cadastro_Admin() {
  const idAdmin = localStorage.getItem("id");
  const [mensagem, setMensagem] = useState("");
  const [senhaFraca, setSenhaFraca] = useState("");
  const msg = (
    <>
      <i class="fa-solid fa-triangle-exclamation"></i>Preencha todos os campos
    </>
  );
  const popBox = (
    <section className="popup">
      <div className="boxpopup">
        <i class="fa-solid fa-circle-check"></i>
        <p>Novo Admin cadastrado com sucesso!</p>
        <div className="progress-bar"></div>
      </div>
    </section>
  );
  const [popUp, setPopUp] = useState("");
  const senhaForte = (senha) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(senha);
  };
  const [cadastro, setCadastro] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
  });
  const valorCadastro = (e) => {
    setCadastro({ ...cadastro, [e.target.name]: e.target.value });
  };
  const Cadastrar = (e) => {
    e.preventDefault();
    if (
      cadastro.nome !== "" &&
      cadastro.email !== "" &&
      cadastro.sobrenome !== "" &&
      cadastro.senha !== ""
    ) {
      if (!senhaForte(cadastro.senha)) {
        setSenhaFraca("Senha fraca");
        console.log("senha fraca");
        return;
      } else {
        Axios.post(
          `https://socieloo-back.up.railway.app/api/v1/admin/${idAdmin}`,
          {
            nome: cadastro.nome,
            sobrenome: cadastro.sobrenome,
            email: cadastro.email,
            senha: cadastro.senha,
          },
        )
          .then((response) => {
            setPopUp(popBox);
            console.log(response.data);
            setTimeout(() => {
              setPopUp("");
              window.location.pathname = "/gerenciamento";
            }, 2000);
          })
          .catch((err) => console.log(err));
      }
    } else {
      setSenhaFraca("");
      setMensagem(msg);
      console.log(cadastro);
    }
  };
  return (
    <>
      <Menu />
      <main id="cadastro">
        <img src="../imgs/gestora.png" alt="" />

        <section id="cadastro__section">
          <div className="section__form" id="conteudo">
            <div className="form__admin">
              <form id="admin" action="" onSubmit={Cadastrar}>
                <p className="mensagem">{mensagem}</p>
                <h2>Cadastro Admin</h2>
                <label for="nome">Nome:</label>
                <br />
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  onChange={valorCadastro}
                />
                <label for="sobrenome">Sobrenome:</label>
                <br />
                <input
                  type="text"
                  id="sobrenome"
                  name="sobrenome"
                  onChange={valorCadastro}
                />
                <label for="email">E-mail:</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={valorCadastro}
                />
                <br />
                <label for="senha">Senha:</label>
                <br />
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  onChange={valorCadastro}
                />
                <br />
                <p className="mensagem">{senhaFraca}</p>
                <input type="submit" value="Entrar" id="entrar" />
                <br />
              </form>
            </div>
          </div>
        </section>
        {popUp}
        <img src="../imgs/vase.png" alt="" />
      </main>
      <Vlibras />
    </>
  );
}
