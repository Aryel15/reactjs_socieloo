import React, { useState, useEffect, useRef } from 'react'
import './style.css'
import Vlibras from '../../components/Vlibras/Vlibras'
import Axios from 'axios'
import Chart from 'react-google-charts'

export default function Perfil_Admin() {
    let id = localStorage.getItem("id");
    let tipo = localStorage.getItem("tipo");
    useEffect(() =>{
        if(tipo !== "admin"){
            window.location.pathname = "/"
        }else{
            Axios.get("https://socieloo-back.onrender.com/api/v1/admin/" + id)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
        }
    }, [])
    let today = new Date().toLocaleDateString()
    const [data, setData] = useState()
    const [stepE, setEStep] = React.useState("Relatorios");
    const editar = {
        Relatorios: <Relatorios />,
        ONGs: <ONGs />,
        Usuarios: <Usuarios />,
        Comentarios: <Comentarios />,
        Conta_Admin: <Conta_Admin data={data}/>,
    }
    const sair = e =>{
        e.preventDefault()
        localStorage.removeItem("id");
        localStorage.removeItem("tipo");
        window.location.pathname = "/admin"
    }

    return (
        <>
            {/*<Menu />*/}
            <main id="edit-admin" >
                <div className="bar-admin">
                    <div className="perfil-admin">
                        <i class="fa-solid fa-screwdriver-wrench"></i>
                        <h2>Perfil de Admin</h2>
                    </div>
                    <div className="day">
                        {today}
                        <a href="/">Home</a>
                        <a href="/cadastro-admin">Novo Cadastro</a>
                        <a href="javascript:void(0);" onClick={sair}>Sair</a>
                    </div>
                </div>
                <section className="edit__conteiner-admin" id="conteudo" >

                    <aside className="edit__options-admin">

                        <ul className="options__itens-admin">
                            <li className={stepE === "Relatorios" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Relatorios")}><i class="fa-regular fa-file"></i> Relatórios</a></li>
                            <li className={stepE === "ONGs" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("ONGs")}><i class="fa-solid fa-shield-dog"></i> ONG'S</a></li>
                            <li className={stepE === "Usuarios" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Usuarios")}><i class="fa-solid fa-users"></i> Usuários</a></li>
                            <li hidden className={stepE === "Comentarios" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Comentarios")}><i className='bx bxs-message-square-x'></i> Comentários</a></li>
                            <li className={stepE === "Conta_Admin" ? "select" : ""}><a href="javascript:void(0);" className="options__item" onClick={() => setEStep("Conta_Admin")}><i class="fa-solid fa-lock"></i> Conta de Admin</a></li>
                        </ul>

                    </aside>

                    <section className="edit__content-admin">
                        {editar[stepE]}
                    </section>
                </section>
            </main>
            <Vlibras />
        </>
    )
}

function Relatorios() {
    const [ongs, setOngs] = useState(null)
    const [users, setUsers] = useState(null)
    const [ongsDel, setOngsDel] = useState(null)
    const [usersDel, setUsersDel] = useState(null)
    const [graf1, setGraf1] = useState(null)
    const [graf2, setGraf2] = useState(null)
    const [graf3, setGraf3] = useState(null)
    const [graf4, setGraf4] = useState(null)
    const [loading1, setLoading1] = useState(null)
    const [loading2, setLoading2] = useState(null)
    const [loading3, setLoading3] = useState(null)
    const [loading4, setLoading4] = useState(null)
    const [loading5, setLoading5] = useState(null)
    const [loading6, setLoading6] = useState(null)
    const [loading7, setLoading7] = useState(null)
    const [loading8, setLoading8] = useState(null)
    const data = [
        ["Mês", "Ong"],
    ];
    const userdata = [
        ["Mês", "Ong"],
    ];
      
    const options = {
        colors: ["#00a1ff", "#005485"],
        legend: { position: 'none' }
    }; 
    const optionsLegend ={
        legend: { position: 'none' }
    }

    const regioesRef = useRef([['Região', 'Ongs', { role: 'style' }]]);
    const segmentosRef = useRef([['Região', 'Ongs', { role: 'style' }]]);

    useEffect(() => {
        //Ongs cadastradas no mês passado
        Axios.get("https://socieloo-back.onrender.com/api/v1/ong/cadastramentoOngMesPassado")
        .then((response) =>{
            setLoading7((
                <div className="load">
                    <span class="loader"></span>
                </div>
            ))
            data.push(["Mês passado", parseInt(response.data)])
            setGraf3(<Chart chartType="BarChart" width="100%" height="400px" data={data?.slice(0, 3)} options={options} />)
            setLoading7(null)
        })
        //Ongs cadastradas este mês
        Axios.get("https://socieloo-back.onrender.com/api/v1/ong/cadastramentoOng")
        .then((response) =>{
            data.push(["Este mês", parseInt(response.data)])
            setGraf3(<Chart chartType="BarChart" width="100%" height="400px" data={data?.slice(0, 3)} options={options} />)
        })


        //Usuários cadastradas no mês passado
        Axios.get("https://socieloo-back.onrender.com/api/v1/user/cadastramentoOngMesPassado")
        .then((response) =>{
            setLoading8((
                <div className="load">
                    <span class="loader"></span>
                </div>
            ))
            userdata.push(["Mês passado", parseInt(response.data)])
            setGraf4(<Chart chartType="BarChart" width="90%" height="400px" data={userdata?.slice(0, 3)} options={options} />)
            setLoading8(null)
        })
        //Usuários cadastradas este mês
        Axios.get("https://socieloo-back.onrender.com/api/v1/user/cadastramentoOng")
        .then((response) =>{
            userdata.push(["Este mês", parseInt(response.data)])
            setGraf4(<Chart chartType="BarChart" width="100%" height="400px" data={userdata?.slice(0, 3)} options={options} />) 
        })
        //Ongs cadastradas por região
        const buscaRegiao = async (zona, cor) => {
            try {
                setLoading5((
                    <div className="load">
                        <span class="loader"></span>
                    </div>
                ))
                const response = await Axios.get(`https://socieloo-back.onrender.com/api/v1/ong/buscaRegiao/${zona}`);
                const ongs = response.data;
                regioesRef.current.push([zona, ongs, cor]);
                setGraf1(<Chart chartType="ColumnChart" width="100%" height="400px" options={optionsLegend} data={regioesRef.current.slice(0, 6)} />);
                setLoading5(null)
            } catch (err) {
                console.log(err);
            }
        };
        buscaRegiao('Zona Leste', '#00a1ff');
        buscaRegiao('Zona Sul', 'color: #94d8ff');
        buscaRegiao('Zona Oeste', '#2db2ff');
        buscaRegiao('Zona Norte', '#6ecaff');
        buscaRegiao('Centro', 'color: #afe2ff');

        //Ongs cadastradas por segmento
        const buscaSegmento = async (segmento, cor) => {
            try {
                setLoading6((
                    <div className="load">
                        <span class="loader"></span>
                    </div>
                ))
                const response = await Axios.get(`https://socieloo-back.onrender.com/api/v1/ong/buscaSegmento/${segmento}`);
                const ongs = response.data;
                segmentosRef.current.push([segmento, ongs, cor]);
                const options = {
                    colors: ["#00a1ff", "#005485", "#0072b5", "#003b5e", "#3cb7ff", "#6fcaff", "#b1e2ff"]
                  };
                setGraf2(<Chart chartType="PieChart" width="100%" height="400px" options={options} data={segmentosRef.current.slice(0, 8)}/>);
                setLoading6(null)
            } catch (err) {
                console.log(err);
            }
        };
        buscaSegmento('Cidadania');
        buscaSegmento('Cultura e esporte');
        buscaSegmento('Educação');
        buscaSegmento('Gênero e diversidade');
        buscaSegmento('Meio Ambiente');
        buscaSegmento('Proteção Animal');
        buscaSegmento('Saúde');

        Axios.get('https://socieloo-back.onrender.com/api/v1/user/todosUsuarios')
        .then((response) => {
            setLoading2((
                <div className="load">
                    <span class="loader"></span>
                </div>
            ))
            setUsers(response.data)
            setLoading2(null)
        }).catch((err) => console.log(err))


        Axios.get('https://socieloo-back.onrender.com/api/v1/ong/todasAsOngs')
        .then((response) => {
            setLoading1((
                <div className="load">
                    <span class="loader"></span>
                </div>
            ))
            setOngs(response.data)
            setLoading1(null)
        }).catch((err) => console.log(err))

        Axios.get('https://socieloo-back.onrender.com/api/v1/admin/todasAsUserExcluidas')
        .then((response) => {
            setLoading3((
                <div className="load">
                    <span class="loader"></span>
                </div>
            ))
            setUsersDel(response.data)
            setLoading3(null)
        }).catch((err) => console.log(err))


        Axios.get('https://socieloo-back.onrender.com/api/v1/admin/todasAsOngsExcluidas')
        .then((response) => {
            setLoading4((
                <div className="load">
                    <span class="loader"></span>
                </div>
            ))
            setOngsDel(response.data)
            setLoading4(null)
        }).catch((err) => console.log(err))
    }, []);

return (
    <>
        <div className="title-re">
            <h2>Relatórios</h2> <img src='./imgs/SocieloPrint.svg' alt="Logo Socieloo" /><h4 className="print" onClick={() => document.execCommand('print')}><i class="fa-solid fa-print"></i>Imprimir</h4>
        </div>
        <section className="dados">
            <div className="num num1">
                <h4>Total de Ongs Cadastradas:</h4>
                {loading1}
                <h3>{ongs}</h3>
            </div>
            <div className="num num2">
                <h4>Total de Usuários Cadastrados:</h4>
                {loading2}
                <h3>{users}</h3>
            </div>
            <div className="num num1">
                <h4>Total de Ongs Excluidas:</h4>
                {loading3}
                <h3>{ongsDel}</h3>
            </div>
            <div className="num num2">
                <h4>Total de Usuários Excluidos:</h4>
                {loading4}
                <h3>{usersDel}</h3>
            </div>
        </section>
        <section className="dados">
            <div className="rowG">
                <div className="grafico graf1">
                    <h4>Total de Ongs Cadastradas por região:</h4>
                    {loading5}
                    {graf1}
                </div>
                <div className="grafico graf2">
                    <h4>Total de Ongs Cadastradas por segmento:</h4>
                    {graf2}
                    {loading6}
                </div>
            </div>
            <div className="rowG">
                <div className="grafico graf2">
                    <h4>Total de Ongs Cadastradas por mês:</h4>
                    {graf3}
                    {loading7}
                </div>
                <div className="grafico graf2">
                    <h4>Total de Usuários Cadastrados por mês:</h4>
                    {graf4}
                    {loading8}
                </div>
            </div>
        </section>
    </>
)
}

function Usuarios() {

    const [users, setUsers] = useState()
    const [popUpq, setPopUpq] = useState()
    const [popUpDel, setPopUpDel] = useState()


    useEffect(() => {
        Axios.get('https://socieloo-back.onrender.com/api/v1/user')
            .then((response) => {
                setUsers(response.data)
            }).catch((err) => console.log(err))
    }, [])
    function Deletar(id, nome) {
        setPopUpq((
            <section className="popup">
                <div className="boxpopup">
                    <b><p>Deseja deletar o usuário <em>{nome}</em>?</p></b>
                    <div className="btnsDel">
                        <a className="cancelarDel" href="javascript:void(0);" onClick={() => setPopUpq("")}>Cancelar</a>
                        <a className="Del" href="javascript:void(0);" onClick={() => { setPopUpq(""); Delete(id) }}>Desejo deletar</a>
                    </div>
                </div>
            </section>
        ))
    }
    function Delete(id) {
        Axios.delete("https://socieloo-back.onrender.com/api/v1/admin/deletarUsuario/" + id)
            .then((response) => {
                console.log(response.data);
                setPopUpDel((
                    <section className="popup">
                        <div className="boxpopup">
                            <i class="fa-solid fa-circle-check"></i>
                            <p>Usuário deletado com sucesso!</p>
                            <div className="progress-bar"></div>
                        </div>
                    </section>
                ))
                setTimeout(() => {
                    setPopUpDel("");
                    window.location.pathname = "/gerenciamento"
                }, 2000);
            })
    }
    return (
        <>
            <h2>Usuários</h2>
            <div className="buscar">
                <input type="text" placeholder='Pesquise a ong por nome' />
                <div className="search">
                    <a href="javascript:void(0)">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </a>
                </div>
            </div>
            <section className='users'>
                {
                    users?.map(user => (
                        <div key={user.id} className="card_admin">
                            <div className="infos">
                                <h3>{user.nome}</h3>
                                <p>{user.email}</p>
                            </div>
                            <div className="actions">
                                <a href="javascript:void(0);"><i class="fa-solid fa-eye"></i>Visualizar</a>
                                <a href="javascript:void(0);" onClick={() => Deletar(user.id, user.nome)}><i class="fa-solid fa-trash-can"></i>Excluir</a>
                            </div>
                        </div>
                    ))
                }
                {popUpDel}
                {popUpq}
            </section>
        </>
    )
}

function ONGs() {
    const [ongs, setOngs] = useState()
    const [conteudo, setConteudo] = useState('Todas')
    const [popUpq, setPopUpq] = useState()
    const [popUpDel, setPopUpDel] = useState()
    const [favoritas, setFavoritas] = useState([]);
    const [filterNome, setfilterNome] = useState('Todas')
    const [nome, setNome] = useState("")
    useEffect(() => {
        Axios.get('https://socieloo-back.onrender.com/api/v1/ong')
            .then((response) => {
                setOngs(response.data)
            }).catch((err) => console.log(err))
        Axios.get('https://socieloo-back.onrender.com/api/v1/ong/ongFavoritadas')
            .then((response) => {
                const data = response.data.map((item) => {
                    return {
                      nome: item[0],
                      favoritos: item[1]
                    }
                });
                setFavoritas(data)
            }).catch((err) => console.log(err))

    }, [])

    function Deletar(id, nome) {
        setPopUpq((
            <section className="popup">
                <div className="boxpopup">
                    <b><p>Deseja deletar a ong <em>{nome}</em>?</p></b>
                    <div className="btnsDel">
                        <a className="cancelarDel" href="javascript:void(0);" onClick={() => setPopUpq("")}>Cancelar</a>
                        <a className="Del" href="javascript:void(0);" onClick={() => { setPopUpq(""); Delete(id) }}>Desejo deletar</a>
                    </div>
                </div>
            </section>
        ))
    }
    function Delete(id) {
        Axios.delete("https://socieloo-back.onrender.com/api/v1/admin/deletarOng/" + id)
            .then((response) => {
                console.log(response.data);
                setPopUpDel((
                    <section className="popup">
                        <div className="boxpopup">
                            <i class="fa-solid fa-circle-check"></i>
                            <p>Ong deletada com sucesso!</p>
                            <div className="progress-bar"></div>
                        </div>
                    </section>
                ))
                setTimeout(() => {
                    setPopUpDel("");
                    window.location.pathname = "/gerenciamento"
                }, 2000);
            })
    }
    function handleClickSearch() {
        setfilterNome(nome)
      }
    return (
        <>

            <main className="ongs-admin">
                <aside className="menu-ongs">
                    <ul className="options__itens-ongs">
                        <li className={conteudo === "Todas" ? "select" : ""}><a href="javascript:void(0);" className="options__item-ongs" onClick={() => setConteudo("Todas")}><i class="fa-solid fa-shield-dog"></i> Todas</a></li>
                        <li className={conteudo === "Favoritos" ? "select" : ""}><a href="javascript:void(0);" className="options__item-ongs" onClick={() => setConteudo("Favoritos")}><i class="fa-solid fa-heart"></i> Favoritos</a></li>
                        <li className={conteudo === "Comentários" ? "select" : ""}><a href="javascript:void(0);" className="options__item-ongs" onClick={() => setConteudo("Comentários")}><i class="fa-regular fa-comment"></i>Comentários</a></li>
                    </ul>
                </aside>
                <section className="ongs-aside">
                    <h2>Ongs</h2>
                    {
                        conteudo === 'Todas' ? (
                            <>
                                <div className="buscar">
                                    <input type="text" placeholder='Pesquise a ong por nome' onChange={e=> setNome(e.target.value)}/>
                                    <div className="search">
                                        <a href="javascript:void(0)" onClick={handleClickSearch}>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </a>
                                    </div>
                                    <a className='todas' href='javascript:void(0);' onClick={()=> setfilterNome('Todas')}>Todas</a>
                                </div>
                                <section className='ongs'>
                                    {
                                        ongs?.filter(
                                            ong =>
                                              (filterNome === 'Todas' || ong.nome.toLowerCase() === filterNome.toLowerCase())
                                          ).map(ong => (
                                            <div key={ong.id} className="card_admin">
                                                <div className="infos">
                                                    <h3>{ong.nome}</h3>
                                                    <div className="info_card">
                                                        <p>{ong.segmento}</p>
                                                        <p>{ong.regiao}</p>
                                                    </div>
                                                </div>
                                                <div className="actions">
                                                    <a href={"/ong/" + ong.id}><i class="fa-solid fa-eye"></i>Visualizar</a>
                                                    <a  href="javascript:void(0);" onClick={() => Deletar(ong.id, ong.nome)}><i class="fa-solid fa-trash-can"></i>Excluir</a>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    
                                </section>
                            </>) : null
                    }

                    {
                        conteudo === "Favoritos" ?
                        <section className='ongs'>
                        {
                            favoritas?.map(ong => (
                                <div key={ong.nome} className="card_admin">
                                    <div className="infos">
                                        <h3>{ong.nome}</h3>
                                    </div>
                                    <p className='favoritas'>{ong.favoritos}<i class="fa-solid fa-heart"></i></p>
                                </div> 
                            ))
                        } 
                        </section> : null
                    }
                {popUpDel}
                {popUpq}
                </section>
            </main>
        </>
    )
}

function Comentarios() {
    return (
        <>
            <h2>Comentários</h2>

        </>
    )
}
function Conta_Admin({data}) {
    let id = localStorage.getItem("id");

    const [admin, setAdmin] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        senha: ''
    })
    useEffect(() =>{
        setAdmin({...admin,
            nome: data?.nome||"",
            sobrenome: data?.sobrenome||"",
            email: data?.email||""
        })
    }, [])
    const popBox = (
        <section className="popup">
          <div className="boxpopup">
            <i class="fa-solid fa-circle-check"></i>
            <p>Dados atualizados com sucesso!</p>
            <div className="progress-bar"></div>
          </div>
        </section>
    )
    const popBox2 = (
        <section className="popup">
          <div className="boxpopup">
            <i class="fa-solid fa-circle-check"></i>
            <p>Sua conta foi deletada com sucesso!</p>
            <div className="progress-bar"></div>
          </div>
        </section>
    )
    const valorAdmin= e => {setAdmin({...admin, [e.target.name]: e.target.value});}
    const [popUpq, setPopUpq] = useState("")
    const [popUp, setPopUp] = useState("")
    function Deletar(e) {
        e.preventDefault()

        setPopUpq((
            <section className="popup">
                <div className="boxpopup">
                    <b><p>Tem certeza que deseja deletar sua conta?</p></b>
                    <div className="btnsDel">
                        <a className="cancelarDel" href="javascript:void(0);" onClick={() => setPopUpq("")}>Cancelar</a>
                        <a className="Del" href="javascript:void(0);" onClick={() => { setPopUpq(""); Delete(e)}}>Desejo deletar</a>
                    </div>
                </div>
            </section>
        ))
    }
    function Delete(e) {
        e.preventDefault()
        Axios.delete("https://socieloo-back.onrender.com/api/v1/admin/" + id)
        .then((response) => {
            setPopUp(popBox2);
            console.log(response.data);        
            localStorage.removeItem("id");
            localStorage.removeItem("tipo");
            setTimeout(() => {
                window.location.pathname = "/"
            }, 2000); 
        })
    }

    function Alterar(e){
        e.preventDefault();
        Axios.put("https://socieloo-back.onrender.com/api/v1/admin/"+ id, {
            nome: admin.nome,
            sobrenome: admin.sobrenome,
            email: admin.email,
        }).then((response) => {
            console.log(response.data);
            setPopUp(popBox);
            setTimeout(() => {
              setPopUp("");
                window.location.pathname = "/gerenciamento"
            }, 2000);
        }).catch((err) => console.log(err))
    }
    return (
        <>
            <h2>Informações Admin</h2>
            <form className='formPage-admin' action="" onSubmit={Alterar}>
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" value={admin.nome} onChange={valorAdmin}/>
                <label for="sobrenome">Sobrenome</label>
                <input type="text" id="sobrenome" name="sobrenome" value={admin.sobrenome} onChange={valorAdmin}/>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" value={admin.email} onChange={valorAdmin}/>
                <button type="submit" className="button-as button-ad">Alterar</button>
                {popUp}
                {popUpq}
            </form>  
            <br /><br /><br />  
            <a href="javascript:void(0);" onClick={Deletar} className='mensagem'><i class="fa-solid fa-trash-can"></i> Deletar conta</a>
        </>
    )
}