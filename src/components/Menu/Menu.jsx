import './style.css'


export default function Menu() {
    return (
        <>
            <div id="acessibilidade">
                <ul id="atalhos">
                    <li className="atalho"><a href="#conteudo" accesskey="1" title="Ir para o conteúdo">Conteúdo[1]↓</a></li>
                    <li className="atalho"><a href="#menu" accesskey="2" title="Ir para o menu de navegação">Menu[2]↓</a></li>
                    <li className="fonte"><a href="javascript:void(0)" id="ddiminuir" title="Diminuir fonte">A-</a></li>
                    <li className="fonte"><a href="javascript:void(0)" id="aaumentar" title="Aumentar fonte">A+</a></li>
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
                        <a href="#" accesskey="2">Segmentos▾</a>
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
                        <a href="#" accesskey="3">Região▾</a>
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
                    <li className="links login"><a href='/login' accesskey="5">Fazer login</a></li>
                    <li className="links botão"><a href='/cadastro-ong' accesskey="6">Cadastre-se</a></li>
                </ul>
            </nav>
        </>
    )
}