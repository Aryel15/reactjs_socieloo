import React, {useState} from 'react'
import './style.css'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import Vlibras from '../../components/Vlibras/Vlibras'

export default function Perfil_Ong() {
    const [ong, setOng] = useState(true);
    const [stepC, setCStep] = React.useState("Editar_Perfil");
    const [stepE, setEStep] = React.useState(0);
    const editar = {
        Editar_Perfil: <Editar_Perfil step={stepE} setStep={setEStep}/>, 
        Alterar_Senha: <Alterar_Senha step={stepE} setStep={setEStep} />,
        Deletar_Conta: <Deletar_Conta step={stepE} setStep={setEStep} />,
    }

    const criar = [];
  return (
    <>
    <Menu/>
    <main id="edit" >
        <section className="edit__conteiner" id="conteudo" >

            <aside className="edit__options">
                <div className="options__photos">
                    {ong === true ? <img src="../imgs/fotosOng/fotos01.jpg" alt="foto de perfil escolhida pela ong"/> :""}
                    <h1>Adote Sempre Cabe Mais Um</h1>
                </div>

                <ul className="options__itens">
                    {ong === true ? 
                    <>
                        <li className={stepE === "Editar_Perfil" ? "select": ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Editar_Perfil")}><i className='bx bx-pencil'></i> Editar perfil</a></li>
                        <li className={stepE === "Alterar_Senha" ? "select": ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Alterar_Senha")}><i className='bx bxs-lock-alt'></i> Alterar senha</a></li>
                        <li className={stepE === "Deletar_Conta" ? "select": ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Deletar_Conta")}><i className='bx bxs-message-square-x'></i> Deletar conta</a></li>
                    </>:""
                    }
                </ul>

            </aside>

            <section className="edit__content">
                {ong === true ? editar[stepE] : criar[stepC]}
            </section>
        </section>
    </main>
    <Footer/>
    <Vlibras/>
    </>
  )
}
function Editar_Perfil({stepE, setEStep}){
    return(
        <>
            <h2>Editar perfil</h2>
            <form action="#" className="content__form">
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" value="Adote Sempre Cabe Mais Um"/>

                <label for="email">Email</label>
                <input type="email" id="email" name="email" value="noobmaster69@hotmail.com"/>

                <label for="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone" value="+55 (11) 98765-4321"/>

                <label for="endereço">Endereço</label>
                <input type="text" id="endereço" name="endereço" value="R. das Alamandas - Jardim Estancia Brasil"/>

                <label for="Sobre">Sobre</label>
                <textarea name="Sobre" id="Sobre"></textarea>

                <div className="form__button">
                    <button>Salvar edição</button>
                </div>
            </form>
        </>
    )
}
function Alterar_Senha({stepE, setEStep}){
    return(
        <>
            <form action="#" className="content__form senha">
                <h2>Alterar senha</h2>
                <div>
                <label for="name">Senha atual</label>
                <input type="text" name="name" id="name" />
                </div>

                <div>
                <label for="nameUser">Nova senha</label>
                <input type="text" name="nameUser" id="nameUser" />
                </div>

                <div>
                <label for="email">Repita nova senha</label>
                <input type="text" name="email" id="email" />
                </div>

                <button type="submit" className="button-as">Salvar alterações</button>
            </form>
        </>
    )
}
function Deletar_Conta({stepE, setEStep}){
    const [deletar, setDeletar] = useState(false)
    return(
        <>
            <form action="#" className="content__form senha">
                <p>Tem certeza que deseja deletar sua conta?</p>
                <div className="buttons-delete">
                    <a className="button-s" onClick={() => setDeletar(true)}>Sim</a>
                    <a className="button-as" href="/perfil-ong">Não</a>
                </div>
                {deletar === true ? <a className="button-as delete">Deletar conta</a> : ""}
            </form>
        </>
    )
}
