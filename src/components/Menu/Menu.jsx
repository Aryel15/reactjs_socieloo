import './style.css'
import React from 'react';

export default function Menu() {
    const tipo = localStorage.getItem("tipo")
    const sair = e =>{
        e.preventDefault()
        localStorage.removeItem("id");
        localStorage.removeItem("tipo");
        window.location.pathname = "/login"
    }
    return (
        <>
            <div id="acessibilidade">
                <ul id="atalhos">
                    <li className="atalho"><a href="#conteudo" accesskey="1" title="Ir para o conteúdo">Conteúdo[1]↓</a></li>
                    <li className="atalho"><a href="#menu" accesskey="2" title="Ir para o menu de navegação">Menu[2]↓</a></li>
                    <li className="fonte"><a href="javascript:void(0)" id="ddiminuir" title="Diminuir fonte" onClick={fonte()}>A-</a></li>
                    <li className="fonte"><a href="javascript:void(0)" id="aaumentar" title="Aumentar fonte" onClick={fonte()}>A+</a></li>
                    <li className="contraste s"><a href="javascript:void(0);" id="ssemcontraste" title="Sem contraste">○</a></li>
                    <li className="contraste c"><a href="javascript:void(0);" id="ccontraste" title="Contraste">●</a></li>
                    <li id="pgacess"><a href="/acessibilidade" title="acessibilidade">Acessibilidade</a></li>
                </ul>
            </div>
            <nav>
                <a href="/" accesskey="1">
                    <img src="./imgs/Socieloo 1.png" alt="Logo Socieloo nas cores preto e azul" title="Logo" />
                </a>
                <label for="bt_menu"><img src="./imgs/menu.png" alt="menu" /></label>
                <input type="checkbox" id="bt_menu" />
                <ul id="menu">
                    <li className="links">
                        <a href="#" className="link" accesskey="2">Segmentos▾</a>
                        <ul>
                            <li className="sublink"><a href="">Cidadania</a></li>
                            <li className="sublink"><a href="">Cultura e Esportes</a></li>
                            <li className="sublink"><a href="">Educação</a></li>
                            <li className="sublink"><a href="">Gênero e Diversidade</a></li>
                            <li className="sublink"><a href="">Meio Ambiente</a></li>
                            <li className="sublink"><a href="">Proteção Animal</a></li>
                            <li className="sublink"><a href="">Saúde</a></li>
                        </ul>
                    </li>
                    <li className="links">
                        <a href="#" className="link" accesskey="3">Região▾</a>
                        <ul>
                            <li className="sublink"><a href="">Zona Leste</a></li>
                            <li className="sublink"><a href="">Zona Norte</a></li>
                            <li className="sublink"><a href="">Centro</a></li>
                            <li className="sublink"><a href="">Zona Oeste</a></li>
                            <li className="sublink"><a href="">Zona Sul</a></li>
                        </ul>
                    </li>
                    <li className="links acess">
                        <a href="#" accesskey="4">Acessibilidade▾</a>
                        <ul>
                            <li className="atalho"><a href="#conteudo" accesskey="1" title="Ir para o conteúdo">Conteúdo[1]↓</a></li>
                            <li className="atalho"><a href="#menu" accesskey="2" title="Ir para o menu de navegação">Menu[2]↓</a></li>
                            <li className="atalho"><a href="#rodape" accesskey="3" title="Ir para o rodapé">Rodapé[3]↓</a></li>
                            <li className="sublink"><a href="javascript:void(0)" title="Ativar contraste" id="contraste"
                                accesskey="c">Contraste
                                ◉</a></li>
                            <li className="sublink"><a href="javascript:void(0)" title="Desativar contraste" id="sem-contraste"
                                accesskey="z">Sem
                                contraste ○</a></li>
                            <li className="sublink"><a href="javascript:void(0)" id="aumentar" title="Aumentar fonte"
                                accesskey="b">Aumentar fonte
                                +</a></li>
                            <li className="sublink"><a href="javascript:void(0)" id="diminuir" title="Diminuir fonte"
                                accesskey="s">Diminuir fonte
                                -</a></li>
                            <li className="sublink"><a href="/acessibilidade"
                                title="Manual de acessibilidade">Acessibilidade</a></li>
                        </ul>
                    </li>
                    {
                        !tipo ?
                        <>
                            <li className="links login"><a className="link" href='/login' accesskey="5">Fazer login</a></li>
                            <li className="links botão"><a className="link" href='/cadastro-ong' accesskey="6">Cadastre-se</a></li>
                        </> : ""
                    }
                    {
                        tipo == "ong" ? 
                        <>
                            <li className="links">
                                <a href="" className='perfil link'><i class="fa-solid fa-user"></i>Minha Ong</a>
                                <ul>
                                    <li className="links"><a href='/ong' accesskey="5">Minha Ong</a></li>
                                    <li className="links"><a href='/perfil-ong' accesskey="5">Editar Ong</a></li>
                                    <li className="links"><a href='javascript:void(0)' className='sair' onClick={sair} accesskey="6">Sair <i class="fa-solid fa-right-from-bracket"></i></a></li>
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

    //<link rel=stylesheet href="contraste.css" type=text/css>
    $("head").append("<link rel=stylesheet href=" + " " + link_css + " " + "type=text/css>");//altera a folha de estilo da página

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

    //<link rel=stylesheet href="contraste.css" type=text/css>
    $("head").append("<link rel=stylesheet href=" + " " + link_css + " " + "type=text/css>");//altera a folha de estilo da página

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
