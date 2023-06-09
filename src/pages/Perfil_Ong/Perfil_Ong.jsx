import React, { useState, useEffect } from 'react'
import './style.css'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import Axios from 'axios'

export default function Perfil_Ong() {
    let id = localStorage.getItem("id");

    var name;
    const [data, setData] = useState()
    const [favoritos, setFavoritos] = useState()
    const [stepE, setEStep] = React.useState("Editar_Perfil");
    const editar = {
        Editar_Perfil: <Editar_Perfil step={stepE} setStep={setEStep} data={data} id={id} favoritos={favoritos}/>,
        Alterar_Senha: <Alterar_Senha step={stepE} setStep={setEStep} data={data} id={id} />,
        Alterar_Email: <Alterar_Email step={stepE} setStep={setEStep} data={data} id={id} />,
        Deletar_Conta: <Deletar_Conta step={stepE} setStep={setEStep} data={data} id={id} />,
    }
    useEffect(() => {
        if (id === null) {
            window.location.pathname = "/gerenciamento-ong"
        } else {
            Axios.get("https://socieloo-back.onrender.com/api/v1/ong/" + id)
                .then((response) => {
                    setData(response.data);
                    console.log(response.data);
                    Axios.get("https://socieloo-back.onrender.com/api/v1/ong/ongFavoritadas")
                    .then((response) => {
                        const result = response.data.find(item => item[0] === data.nome);
                        setFavoritos(result[1])
                        console.log(result[1]);
                        
                    })
                })
        }
    }, [])

    return (
        <>
            <Menu />
            <main id="edit" >
                <div className="options__photos">
                    <img src={`../imgs/icons/${data?.segmento}.png`} alt="foto de perfil escolhida pela ong" />
                    <h1>{data?.nome}</h1>
                </div>
                <section className="edit__conteiner" id="conteudo" >

                    <aside className="edit__options">

                        <ul className="options__itens">
                            <li className={stepE === "Editar_Perfil" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Editar_Perfil")}><i className='bx bx-pencil'></i> Editar perfil</a></li>
                            <li className={stepE === "Alterar_Senha" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Alterar_Senha")}><i className='bx bxs-lock-alt'></i> Alterar senha</a></li>
                            <li className={stepE === "Alterar_Email" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Alterar_Email")}><i className='bx bxs-lock-alt'></i> Alterar email</a></li>
                            <li className={stepE === "Deletar_Conta" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Deletar_Conta")}><i className='bx bxs-message-square-x'></i> Deletar conta</a></li>
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

function Editar_Perfil({ stepE, setEStep, data, id, favoritos }) {

    useEffect(_ => {
        setNome(data?.nome || "")
        setTelefone(data?.telefone || "")
        // setCep(data?.cep||"")
        setDescricao(data?.descricao || "")
        setAgencia(data?.agencia || "")
        setBanco(data?.banco || "")
        setContaCorrente(data?.contaCorrente || "")
        setPix(data?.pix || "")
        setEmail(data?.email || "")
        setCnpj(data?.cnpj || "")
        setCnae(data?.cnae || "")
        setRegiao(data?.regiao || "")
        setSegmento(data?.segmento || "")
    }, [data])
    const [msg, setMsg] = useState("")
    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    // const [cep, setCep] = useState("")
    const [descricao, setDescricao] = useState("")
    const [agencia, setAgencia] = useState("")
    const [banco, setBanco] = useState("")
    const [contaCorrente, setContaCorrente] = useState("")
    const [pix, setPix] = useState("")
    const [email, setEmail] = useState("")
    const [cnpj, setCnpj] = useState("")
    const [cnae, setCnae] = useState("")
    const [regiao, setRegiao] = useState("")
    const [segmento, setSegmento] = useState("")

    const handleClickEditar_Perfil = e => {

        setPopUp(popBox);
        e.preventDefault()
        Axios.put(`https://socieloo-back.onrender.com/api/v1/ong/${id}`, {
            nome: nome,
            telefone: telefone,
            descricao: descricao,
            agencia: agencia,
            contaCorrente: contaCorrente,
            pix: pix,
            regiao: regiao,
            segmento: segmento,
            cnae: cnae,
            banco: banco,
            cep: data.cep,
            email: data.email,
            cpf: data.cpf,
            cnpj: data.cnpj,
            complemento: data.complemento,
            senha: data.senha
        }).then((response) => {
            console.log(response);
            window.location.pathname = "/gerenciamento-ong"
        }).catch((err) => console.log(err))
    }
    const popBox = (
        <section className="popup">
            <div className="boxpopup">
                <i class="fa-solid fa-circle-check"></i>
                <p>Dados atualizados com sucesso!</p>
                <div className="progress-bar"></div>
            </div>
        </section>
    )

    const [popUp, setPopUp] = useState("")
    return (
        <>
            <h2>Editar perfil</h2>
            <form action="#" className="content__form" onSubmit={handleClickEditar_Perfil}>
                <div className="rowform">
                    <div className="collum">
                        <label for="nome">Nome</label>
                        <input type="text" id="nome" name="nome" value={nome} onChange={e => setNome(e.target.value)} />

                        <label for="telefone">Telefone</label>
                        <input type="tel" id="telefone" name="telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />

                        {/* <label for="cep">CEP</label>
                        <input type="text" id="cep" name="cep" value={cep} onChange={e=> setCep(e.target.value)} /> */}

                        <label for="cnpj">CNPJ</label>
                        <input type="text" name="cnpj" id="cnpj" value={cnpj} onChange={e => setCnpj(e.target.value)} disabled />

                        <label for="cnae">Cnae</label>
                        <input type="text" name="cnae" list="cnae" value={cnae} onChange={e => setCnae(e.target.value)} required />
                        <datalist name="cnae" id="cnae" className="select-regiao">
                            <option value="#" selected disabled>Selecione uma opção</option>
                            <option value="9430-8/00 - ASSOCIAÇÃO DE PROTEÇÃO DE MINORIAS ÉTNICAS">9430-8/00 - ASSOCIAÇÃO DE PROTEÇÃO DE MINORIAS ÉTNICAS</option>
                            <option value="9430-8/00 - ASSOCIAÇÃO, ONG, DE DEFESA DO Meio Ambiente">9430-8/00 - ASSOCIAÇÃO, ONG, DE DEFESA DO Meio Ambiente</option>
                            <option value="9430-8/00 - ASSOCIAÇÃO, ONG, DE DEFESA DOS DIREITOS HUMANOS">9430-8/00 - ASSOCIAÇÃO, ONG, DE DEFESA DOS DIREITOS HUMANOS</option>
                            <option value="9430-8/00 - ASSOCIAÇÃO, ONG, DE GRUPOS MINORITÁRIOS">9430-8/00 - ASSOCIAÇÃO, ONG, DE GRUPOS MINORITÁRIOS</option>
                            <option value="9430-8/00 - ASSOCIAÇÃO, ONG, DE MOVIMENTOS ECOLÓGICOS">9430-8/00 - ASSOCIAÇÃO, ONG, DE MOVIMENTOS ECOLÓGICOS</option>
                            <option value="9430-8/00 - ATIVIDADE DE OPERAÇÃO DE CENTRAIS DE DISQUE DENUNCIA QUANDO REALIZADO POR ENTIDADES SEM FINS LUCRATIVOS">9430-8/00 - ATIVIDADE DE OPERAÇÃO DE CENTRAIS DE DISQUE DENUNCIA QUANDO REALIZADO POR ENTIDADES SEM FINS LUCRATIVOS</option>
                            <option value="Outro">Outro</option>
                        </datalist>
                        <label for="regiao">Região</label>
                        <input type="text" name="regiao" list="regiao" value={regiao} onChange={e => setRegiao(e.target.value)} required />
                        <datalist name="regiao" id="regiao" className="cad-select" >
                            <option value="#" selected disabled>Selecione uma opção</option>
                            <option value="Zona Norte">Zona Norte</option>
                            <option value="Zona Sul">Zona Sul</option>
                            <option value="Centro">Centro</option>
                            <option value="Zona Leste">Zona Leste</option>
                            <option value="Zona Oeste">Zona Oeste</option>
                        
                        </datalist>
                        <label for="pix">Pix</label>
                        <input type="text" id="pix" name="pix" value={pix} onChange={e => setPix(e.target.value)} />
                        <div hidden className="card_fav">
                            <div className="infos">
                                <h3>Favoritos</h3>
                            </div>
                            <p className='favoritas'>{favoritos}<i class="fa-solid fa-heart"></i></p>
                        </div> 
                    </div>

                    <div className="collum">
                        <label for="select-regiao" className="select-label">Qual a causa da sua ONG?</label>
                        <input type="text" name="segmento" list="segmento" value={segmento} onChange={e => setSegmento(e.target.value)} required />
                        <datalist name="segmento" id="segmento" className="select-regiao" >
                            <option value="#" selected disabled>Selecione uma opção</option>
                            <option value="Saúde">Saúde</option>
                            <option value="Educação">Educação</option>
                            <option value="Cidadania">Cidadania</option>
                            <option value="Cultura e esporte">Cultura e esporte</option>
                            <option value="Gênero e diversidade">Gênero e diversidade</option>
                            <option value="Meio Ambiente">Meio Ambiente</option>
                            <option value="Proteção Animal">Proteção Ambiental</option>
                            <option value="Outro">Outro</option>
                        </datalist>
                        <label for="descricao">Descrição</label>
                        <textarea name="descricao" id="descricao" value={descricao} onChange={e => setDescricao(e.target.value)} ></textarea>
                        <label for="agencia" className="agencia">Agência</label>
                        <input type="text" id="agencia" name="agencia" value={agencia} onChange={e => setAgencia(e.target.value)} />

                        <label for="contaCorrente">Conta</label>
                        <input type="text" id="contaCorrente" name="contaCorrente" value={contaCorrente} onChange={e => setContaCorrente(e.target.value)} />

                        <label for="banco" className="banco">Banco</label>
                        <input type="text" id="banco" name="banco" value={banco} onChange={e => setBanco(e.target.value)} />

                        
                    </div>
                </div>

                <div className="form__button">
                    <button type="submit" className="button-as">Alterar</button>
                </div>

            </form>
        </>
    )
}

function Alterar_Email({ stepE, setEStep, data, id }) {
    const [msg, setMsg] = useState("")
    const [email, setEmail] = useState("")
    const popBox = (
        <section className="popup">
            <div className="boxpopup">
                <i class="fa-solid fa-circle-check"></i>
                <p>Seu email foi alterado com sucesso!</p>
                <div className="progress-bar"></div>

            </div>
        </section>
    )
    const handleClickAlterarEmail = e => {
        setPopUp(popBox);
        e.preventDefault()
        console.log(email);
        Axios.put(`https://socieloo-back.onrender.com/api/v1/ong/${id}`, {
            nome: data.nome,
            telefone: data.telefone,
            descricao: data.descricao,
            agencia: data.agencia,
            contaCorrente: data.contaCorrente,
            pix: data.pix,
            regiao: data.regiao,
            segmento: data.segmento,
            cnae: data.cnae,
            banco: data.banco,
            cep: data.cep,
            cpf: data.cpf,
            cnpj: data.cnpj,
            senha: data.senha,
            email: email,
        }).then((response) => {

            console.log(response);
            setTimeout(() => {
                setPopUp("")
                window.location.pathname = "/gerenciamento-ong"
            }, 2000);

        })
    }


    const [popUp, setPopUp] = useState("")
    return (
        <>
            <form action="#" className="content__form senha" onSubmit={handleClickAlterarEmail}>
                <h2>Alterar Email</h2>
                <p className="mensagem-as">{msg}</p>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" value={data?.email} />
                <label for="newEmail">Email novo</label>
                <input type="email" id="newEmail" name="newEmail" onChange={e => setEmail(e.target.value)} />
                <button type="submit" className="button-as">Alterar</button>
            </form>
            {popUp}
        </>
    )
}

function Alterar_Senha({ stepE, setEStep, data, id }) {

    const [msg, setMsg] = useState("")
    const [senhaFraca, setSenhaFraca] = useState("")
    const [senha, setSenha] = useState("")
    const [senhaDiferente, setSenhaDiferente] = useState("")
    const [novaSenha, setNovaSenha] = useState("")
    const [senhaAtual, setSenhaAtual] = useState("")
    const [senhaErrada, setSenhaErrada] = useState("")


    const senhaForte = (senha) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return regex.test(senha);
    };


    const popBox = (
        <section className="popup">
            <div className="boxpopup">
                <i class="fa-solid fa-circle-check"></i>
                <p>Sua senha foi alterada com sucesso!</p>
                <div className="progress-bar"></div>

            </div>
        </section>
    )
    const [popUp, setPopUp] = useState("")

    const handleClickAlterarSenha = e => {

        e.preventDefault()

        if (!senhaForte(senha)) {
            setSenhaFraca('Senha fraca');
            setSenhaErrada("")
            return;
        } else {
            if (senha !== novaSenha) {
                setSenhaFraca('');
                setSenhaDiferente('As senhas são diferentes');
                return;
            } else {
                setSenhaDiferente('');
                Axios.put(`https://socieloo-back.onrender.com/api/v1/ong/${id}`, {
                    nome: data.nome,
                    telefone: data.telefone,
                    descricao: data.descricao,
                    agencia: data.agencia,
                    contaCorrente: data.contaCorrente,
                    pix: data.pix,
                    regiao: data.regiao,
                    segmento: data.segmento,
                    cnae: data.cnae,
                    banco: data.banco,
                    cep: data.cep,
                    email: data.email,
                    cpf: data.cpf,
                    cnpj: data.cnpj,
                    complemento: data.complemento,
                    senha: senha,
                }).then((response) => {
                    console.log(response);
                    setPopUp(popBox);
                    setTimeout(() => {
                        setPopUp("");
                        window.location.pathname = "/gerenciamento-ong"
                    }, 2000);
                })
            }
        }
/*         if (senhaAtual == data.senha) {
        } else {
            setSenhaErrada("Senha atual está errada")
        } */


    }


    return (
        <>
            <form action="#" className="content__form senha" onSubmit={handleClickAlterarSenha}>
                <h2>Alterar Senha</h2>
                <p className="mensagem-as">{msg}</p>
                {/*<div>
                    <label for="senha">Senha atual</label>
                    <input type="password" name="senha" id="senha" onChange={e => setSenhaAtual(e.target.value)} />
                    <p className="senha-fraca">{senhaErrada}</p>
                </div>*/}

                <div>
                    <label for="novaSenha">Nova senha</label>
                    <input type="password" name="novaSenha" id="novaSenha" onChange={e => setNovaSenha(e.target.value)} />
                    <p className="senha-fraca">{senhaFraca}</p>
                </div>

                <div>
                    <label for="repeteSenha">Repita nova senha</label>
                    <input type="password" name="repeteSenha" id="repeteSenha" onChange={e => setSenha(e.target.value)} />
                    <p className="senha-fraca">{senhaDiferente}</p>
                </div>

                <button type="submit" className="button-as" href="/gerenciamento-ong">Salvar alterações</button>

            </form>

            {popUp}
        </>
    )
}

function Deletar_Conta({ stepE, setEStep, data, id }) {
    function Delete() {
        Axios.delete("https://socieloo-back.onrender.com/api/v1/ong/" + id)
            .then((response) => {
                setPopUp(popBox);
                console.log(response.data);
                localStorage.removeItem("id");
                localStorage.removeItem("tipo");
                setTimeout(() => {
                    window.location.pathname = "/"
                }, 2000);
            })

    }
    const [deletar, setDeletar] = useState(false)
    const [msg, setMsg] = useState("")

    const popBox = (
        <section className="popup">
            <div className="boxpopup">
                <i class="fa-solid fa-circle-check"></i>
                <p>Sua ONG foi deletada com sucesso!</p>
                <div className="progress-bar"></div>
            </div>
        </section>
    )
    const [popUp, setPopUp] = useState("")

    return (
        <>
            <form action="#" className="content__form senha">
                <h2>Deletar Conta</h2>
                <p>Tem certeza que deseja deletar sua conta?</p>
                <div className="buttons-delete">
                    <a className="button-s" onClick={() => setDeletar(true)}>Sim</a>
                    <a className="button-as" href="/gerenciamento-ong">Não</a>
                </div>
                {deletar === true ? <a className="button-as delete" onClick={Delete}>Deletar conta</a> : ""}
            </form>
            {popUp}
        </>
    )
}
