import React, { useState, useEffect } from 'react'
import './style.css'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import Axios from 'axios'

export default function Perfil_Admin() {
    let id  = localStorage.getItem("id");

    var name;
    const [data, setData] = useState()
    const [stepE, setEStep] = React.useState("Relatorios");
    const editar = {
        Relatorios: <Relatorios step={stepE} setStep={setEStep}/>,
        ONGs: <ONGs step={stepE} setStep={setEStep}/>,
        Usuarios: <Usuarios step={stepE} setStep={setEStep}/>,
        Comentarios: <Comentarios step={stepE} setStep={setEStep}/>,
        Conta_Admin: <Conta_Admin step={stepE} setStep={setEStep}/>,
    }

    return (
        <>
            <Menu />
            <main id="edit" >
                <section className="edit__conteiner" id="conteudo" >

                    <aside className="edit__options">

                        <ul className="options__itens">
                            <li className={stepE === "Relatorios" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Relatorios")}><i className='bx bx-pencil'></i> Relatórios</a></li>
                            <li className={stepE === "ONGs" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("ONGs")}><i className='bx bxs-lock-alt'></i> ONG'S</a></li>
                            <li className={stepE === "Usuarios" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Usuarios")}><i className='bx bxs-lock-alt'></i> Usuários</a></li>
                            <li className={stepE === "Comentarios" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Comentarios")}><i className='bx bxs-message-square-x'></i> Comentários</a></li>
                            <li className={stepE === "Conta_Admin" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Conta_Admin")}><i className='bx bxs-message-square-x'></i> Conta de Admin</a></li>
                        </ul>

                    </aside>

                    <section className="edit__content">
                        {editar[stepE]}
                    </section>
                </section>
            </main>
            <Vlibras />
        </>
    )
}

function Relatorios({ stepE, setEStep}) {
    
    return (
        <>
            <h2>Relatórios</h2>

        </>
    )
}

function Usuarios({ stepE, setEStep}) {

    const [users, setUsers] = useState()

    useEffect(() =>{
        Axios.get('http://localhost:8080/api/v1/user/')
        .then((response) => {
            setUsers(response.data)
        }).catch((err) => console.log(err))
    }, [])
    return (
        <>
            <h2>Usuários</h2>
            {
            users?.map(user => (
                <p>{user.nome}</p>
            ))
            }
        </>
    )
}

function ONGs({ stepE, setEStep}) {

    const [ongs, setOngs] = useState()

    useEffect(() =>{
        Axios.get('http://localhost:8080/api/v1/ong')
        .then((response) => {
            setOngs(response.data)
        }).catch((err) => console.log(err))
    }, [])
    return (
        <>
            <h2>Ongs</h2>
            {
            ongs?.map(ong => (
                <div key={ong.id} className="card_admin">
                    <div className="infos">
                        <h3>{ong.nome}</h3>
                        <div className="info_card">
                            <p>{ong.segmento}</p>
                            <p>{ong.regiao}</p>
                        </div>
                    </div>
                    <div className="actions">
                        <a href="">Visualizar</a>
                        <a href="">Excluir</a>
                    </div>
                </div>
            ))
            }
        </>
    )
}

function Comentarios({ stepE, setEStep }) {
    return (
        <>
            <h2>Comentários</h2>

        </>
    )
}
function Conta_Admin({ stepE, setEStep, data, id }) {

    return (
        <>
            <h2>Informações Admin</h2>
        </>
    )
}