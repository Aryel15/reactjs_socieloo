import React, { useEffect } from 'react';
import './style.css'
import { Link, useNavigate } from 'react-router-dom';

export default function Menu() {
    const tipo = localStorage.getItem("tipo")
    const id = localStorage.getItem("id")

    const navigate = useNavigate()

    let logoSocieloo;
  
    if (window.location.pathname.startsWith('/ong/') || window.location.pathname.startsWith('/ongs/')) {
        logoSocieloo = '../../imgs/Socieloo 1.png';
    } else {
        logoSocieloo = './imgs/Socieloo 1.png';
    }
    let menuIcon
    if (window.location.pathname.startsWith('/ong/') || window.location.pathname.startsWith('/ongs/')) {
        menuIcon = '../../imgs/menu.png';
    } else {
        menuIcon = './imgs/menu.png';
    }
    const sair = e =>{
        e.preventDefault()
        localStorage.removeItem("id");
        localStorage.removeItem("tipo");
        navigate("/login")
    }
    return (
        <>
            <div id="acessibilidade">
                <ul id="atalhos">
                    <li className="atalho"><a href="#conteudo" accesskey="1" title="Ir para o conteúdo">Conteúdo[1]↓</a></li>
                    <li className="atalho"><a href="#menu" accesskey="2" title="Ir para o menu de navegação">Menu[2]↓</a></li>
                    <li className="fonte"><Link to="javascript:void(0)" id="ddiminuir" title="Diminuir fonte" onClick={fonte()}>A-</Link></li>
                    <li className="fonte"><Link to="javascript:void(0)" id="aaumentar" title="Aumentar fonte" onClick={fonte()}>A+</Link></li>
                    <li className="contraste s"><Link to="javascript:void(0);" id="ssemcontraste" title="Sem contraste">○</Link></li>
                    <li className="contraste c"><Link to="javascript:void(0);" id="ccontraste" title="Contraste">●</Link></li>
                    <li id="pgacess"><Link to="/acessibilidade" title="acessibilidade">Acessibilidade</Link></li>
                </ul>
            </div>
            <nav>
                <Link to="/" accesskey="1">
                    <img src={logoSocieloo} alt="Logo Socieloo nas cores preto e azul" title="Logo" />
                </Link>
                <label for="bt_menu"><img src={menuIcon} alt="menu" /></label>
                <input type="checkbox" id="bt_menu" />
                <ul id="menu">
                    <li className="links">
                        <a href="#" className="link" accesskey="2">
                            Segmentos▾
                            <ul>
                                <li className="sublink"><Link to="/ongs/Cidadania">Cidadania</Link></li>
                                <li className="sublink"><Link to="/ongs/Cultura e Esporte">Cultura e Esportes</Link></li>
                                <li className="sublink"><Link to="/ongs/Educação">Educação</Link></li>
                                <li className="sublink"><Link to="/ongs/Gênero e Diversidade">Gênero e Diversidade</Link></li>
                                <li className="sublink"><Link to="/ongs/Meio Ambiente">Meio Ambiente</Link></li>
                                <li className="sublink"><Link to="/ongs/Proteção Animal">Proteção Animal</Link></li>
                                <li className="sublink"><Link to="/ongs/Saúde">Saúde</Link></li>
                            </ul>
                        </a>
                    </li>
                    <li className="links">
                        <a href="#" className="link" accesskey="3">
                            Região▾
                            <ul>
                                <li className="sublink"><Link to="/ongs/Zona Leste">Zona Leste</Link></li>
                                <li className="sublink"><Link to="/ongs/Zona Norte">Zona Norte</Link></li>
                                <li className="sublink"><Link to="/ongs/Centro">Centro</Link></li>
                                <li className="sublink"><Link to="/ongs/Zona Oeste">Zona Oeste</Link></li>
                                <li className="sublink"><Link to="/ongs/Zona Sul">Zona Sul</Link></li>
                            </ul>
                        </a>
                    </li>
                    <li className="links acess">
                        <a href="#" className="link" accesskey="4">
                            Acessibilidade▾
                            <ul>
                                <li className="atalho"><a href="#conteudo" accesskey="1" title="Ir para o conteúdo">Conteúdo[1]↓</a></li>
                                <li className="atalho"><a href="#menu" accesskey="2" title="Ir para o menu de navegação">Menu[2]↓</a></li>
                                <li className="sublink"><Link to="javascript:void(0)" title="Ativar contraste" id="contraste"
                                    accesskey="c">Contraste
                                    ◉</Link></li>
                                <li className="sublink"><Link to="javascript:void(0)" title="Desativar contraste" id="sem-contraste"
                                    accesskey="z">Sem
                                    contraste ○</Link></li>
                                <li className="sublink"><Link to="javascript:void(0)" id="aumentar" title="Aumentar fonte"
                                    accesskey="b">Aumentar fonte
                                    +</Link></li>
                                <li className="sublink"><Link to="javascript:void(0)" id="diminuir" title="Diminuir fonte"
                                    accesskey="s">Diminuir fonte
                                    -</Link></li>
                                <li className="sublink"><Link to="/acessibilidade"
                                    title="Manual de acessibilidade">Acessibilidade</Link></li>
                            </ul>
                        </a>
                    </li>
                    <li className="links faq"><Link className="link" to='/faq' accesskey="5">Dúvidas Frequentes</Link></li>

                    {
                        !tipo ?
                        <>
                            <li className="links login"><Link className="link" to='/login' accesskey="6">Fazer login</Link></li>
                            <li className="links botão"><Link className="link" to='/cadastro-ong' accesskey="7">Cadastre-se</Link></li>
                        </> : ""
                    }
                    {
                        tipo == "ong" ? 
                        <>
                            <li className="links">
                                <Link to="" className='perfil link'><i class="fa-solid fa-user"></i>Minha Ong</Link>
                                <ul>
                                    <li className="links"><Link to={'/ong/'+id} accesskey="5">Minha Ong</Link></li>
                                    <li className="links"><Link to='/gerenciamento-ong' accesskey="5">Editar Ong</Link></li>
                                        <li className="links"><Link to='javascript:void(0)' className='sair' onClick={sair} accesskey="6">Sair <i class="fa-solid fa-right-from-bracket"></i></Link></li>
                                </ul>
                            </li>
                        </> : ""
                    }
                    {
                        tipo == "user" ? 
                        <>
                            <li className="links">
                                <Link to="" className='perfil link'><i class="fa-solid fa-user"></i>Minha conta</Link>
                                <ul>
                                    <li className="links"><Link to='/favoritos' accesskey="5">Meus favoritos</Link></li>
                                    <li className="links"><Link to='/perfil' accesskey="5">Meu perfil</Link></li>
                                    <li className="links"><Link to='javascript:void(0)' className='sair' onClick={sair} accesskey="6">Sair <i class="fa-solid fa-right-from-bracket"></i></Link></li>
                                </ul>
                            </li>
                        </> : ""
                    }
                    {
                        tipo == "admin" ? 
                        <>
                            <li className="links">
                                <Link to="" className='perfil link'><i class="fa-solid fa-screwdriver-wrench"></i>Minha conta</Link>
                                <ul>
                                    <li className="links"><Link to='/gerenciamento' accesskey="5">Meu perfil</Link></li>
                                    <li className="links"><Link to='/cadastro-admin' accesskey="5">Novo cadastro</Link></li>
                                    <li className="links"><Link to='javascript:void(0)' className='sair' onClick={sair} accesskey="6">Sair <i class="fa-solid fa-right-from-bracket"></i></Link></li>
                                </ul>
                            </li>
                        </> : ""
                    }
                    
                </ul>
            </nav>
        </>
    )
    //script contraste	

}
function contraste(caminho, contraste) {
    var link_css = caminho;


    if (getCookie2() == "contraste") {
        link_css = contraste; // se o valor do cookie capturado pela function getCookie2 for contraste, a variável link_css recebe como valor a folha de estilo contraste.css
    } else if (getCookie() == "default") {
        link_css = caminho;
    }

    $(document).ready(function () {

        // Id do HTML
        $("#contraste").click(function () {
            setCookie("contraste");//contraste é o nome do cookie criado e consequentemente o parâmetro value da function setCookie. Ao clicar no link com id contraste, será setado o valor contraste para o cookie criado e ele irá executar a função getCookie2.
            location.reload();
        });

        $("#sem-contraste").click(function () {
            setCookie("default")
            location.reload();
        });

    });

    //<link rel=stylesheet to="contraste.css" type=text/css>
    $("head").append("<link rel=stylesheet to=" + " " + link_css + " " + "type=text/css>");//altera a folha de estilo da página

    function setCookie(value) {
        var data = new Date(); //new Date()cria um novo objeto de data com a data e hora atuais :
        data.setTime(data.getTime() + 600000);//O método setTime () define uma data e hora adicionando ou subtraindo um número especificado de milissegundos. getTime() retorna o número de milissegundos

        //cookies structure
        document.cookie = "contraste=" + value + "; expires=" + data.toUTCString() + "; path=/"; //path - caminho do cookie. path=/ - cookie disponível em todo o domínio.


    }
    //O método toUTCString () retorna um objeto de data como uma string, de acordo com o UTC.
    //Dica: o Universal Coordinated Time (UTC) é o horário definido pelo World Time Standard.
    //Observação: o horário UTC é igual ao horário GMT.

    function getCookie() {
        var cookie = document.cookie.split("=");

        return cookie[1];
    }

    function getCookie2() {
        var nameEQ = "contraste=";
        var ca = document.cookie.split(';');//armazena na variável ca um vetor ou matriz contendo a string do cookie, ignorando o ponto-e-virgula. A saída (eu acho) seria mais ou menos isso: ca = ["contraste=contraste", expires="valor que corresponda à data e tempo que o cookie expira", path=/]
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i]; //cria um loop na matriz ca (i = 0; i <ca.length; i ++) e lê cada valor c = ca [i]).
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return undefined;

    }


    //fim script contraste
};

//script contraste	

function contraste2(caminho, contraste) {
    var link_css = caminho;


    if (getCookie2() == "contraste") {
        link_css = contraste; // se o valor do cookie capturado pela function getCookie2 for contraste, a variável link_css recebe como valor a folha de estilo contraste.css
    } else if (getCookie() == "default") {
        link_css = caminho;
    }

    $(document).ready(function () {

        // Id do HTML
        $("#ccontraste").click(function () {
            setCookie("contraste");//contraste é o nome do cookie criado e consequentemente o parâmetro value da function setCookie. Ao clicar no link com id contraste, será setado o valor contraste para o cookie criado e ele irá executar a função getCookie2.
            location.reload();
        });

        $("#ssemcontraste").click(function () {
            setCookie("default")
            location.reload();
        });

    });

    //<link rel=stylesheet to="contraste.css" type=text/css>
    $("head").append("<link rel=stylesheet to=" + " " + link_css + " " + "type=text/css>");//altera a folha de estilo da página

    function setCookie(value) {
        var data = new Date(); //new Date()cria um novo objeto de data com a data e hora atuais :
        data.setTime(data.getTime() + 600000);//O método setTime () define uma data e hora adicionando ou subtraindo um número especificado de milissegundos. getTime() retorna o número de milissegundos

        //cookies structure
        document.cookie = "contraste=" + value + "; expires=" + data.toUTCString() + "; path=/"; //path - caminho do cookie. path=/ - cookie disponível em todo o domínio.


    }
    //O método toUTCString () retorna um objeto de data como uma string, de acordo com o UTC.
    //Dica: o Universal Coordinated Time (UTC) é o horário definido pelo World Time Standard.
    //Observação: o horário UTC é igual ao horário GMT.

    function getCookie() {
        var cookie = document.cookie.split("=");

        return cookie[1];
    }

    function getCookie2() {
        var nameEQ = "contraste=";
        var ca = document.cookie.split(';');//armazena na variável ca um vetor ou matriz contendo a string do cookie, ignorando o ponto-e-virgula. A saída (eu acho) seria mais ou menos isso: ca = ["contraste=contraste", expires="valor que corresponda à data e tempo que o cookie expira", path=/]
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i]; //cria um loop na matriz ca (i = 0; i <ca.length; i ++) e lê cada valor c = ca [i]).
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return undefined;

    }


    //fim script contraste
}

function fonte() {

    $(document).ready(function () {
        let fonte = 16
        $('#aumentar').click(function () {
            if (fonte < 22) {
                fonte++
                $('#root').css({ 'font-size': fonte + 'px' })
            }
        })
        $('#diminuir').click(function () {
            if (fonte > 13) {
                fonte--
                $('#root').css({ 'font-size': fonte + 'px' })
            }
        })
    })
    $(document).ready(function () {
        let fonte = 16
        $('#aaumentar').click(function () {
            if (fonte < 22) {
                fonte++
                $('#root').css({ 'font-size': fonte + 'px' })
            }
        })
        $('#ddiminuir').click(function () {
            if (fonte > 13) {
                fonte--
                $('#root').css({ 'font-size': fonte + 'px' })
            }
        })
    })
}
