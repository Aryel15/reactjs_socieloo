import React from 'react'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import './style.css'

export default function Acessibilidade() {
  return (
    <>
      <Menu/>
      <h1 id="title-acess">Acessibilidade</h1>
        <section id="content">
            <p className="content__text-acess">Este site foi desenvolvido para que pessoas com deficiência visual, baixa
                visão, daltonismo, deficiência
                auditiva e mobilidade reduzida possam navegar por meio de recursos como alto contraste, aumento de
                fonte, teclas de atalho, tradução para a Língua Brasileira de Sinais e navegação por teclado.<br/>
                Para aumentar a fonte, é só clicar no símbolo de <b>A+</b> em nossa barra de acessibilidade. Caso queira voltar ao tamanho de fonte original, é só clicar em <b>A-</b>.<br/>
                Se for necessário, você também pode usar o zoom nativo do seu navegador, pressionando as teclas <b>“Ctrl”</b> e
                <b>“+”</b> para aumentar todo o site e <b>“Ctrl”</b> e <b>“-“</b> para diminuir. Para voltar ao padrão,
                pressione <b>“Ctrl”</b> e
                <b>“0”</b>. <br />
                Este site tem melhor acessibilidade quando acessado nas versões mais atualizadas do seu navegador web.
                Utilize sempre a versão mais recente de seu software.
            </p>

            <p className="content__text-acess destaque">Contraste</p>
            <p className="content__text-acess small-destaque">Internet Explorer e Google Chrome:</p>
            <p className="content__text-acess"><code><b>“Alt”</b> + <b>“c”</b></code> - Contraste </p>
            <p className="content__text-acess"><code><b>“Alt”</b> + <b>“z”</b></code> - Sem Contraste</p>
            <p className="content__text-acess  small-destaque">Firefox:</p>
            <p className="content__text-acess"><code><b>“Alt”</b> + <b>“Shift”</b> + <b>“c”</b></code>- Contraste</p>
            <p className="content__text-acess"><code><b>“Alt”</b> + <b>“Shift”</b> + <b>“z”</b></code>- Sem Contraste</p>
            <p className="content__text-acess small-destaque">Opera:</p>
            <p className="content__text-acess"><code><b>“Shift”</b> + <b>“Escape”</b> + <b>“c”</b></code>- Contraste</p>
            <p className="content__text-acess"><code><b>“Shift”</b> + <b>“Escape”</b> + <b>“z”</b></code>- Sem Contraste</p>
            <p className="content__text-acess small-destaque">Safari e OmniWeb:</p>
            <p className="content__text-acess"><code><b>“Ctrl”</b> + <b>“c”</b></code>- Contraste</p>
            <p className="content__text-acess"><code><b>“Ctrl”</b> + <b>“z”</b></code>- Sem Contraste</p>
            <br/>
            <p className="content__text-acess destaque">Aumentar e diminuir fonte</p>
            <p className="content__text-acess small-destaque">Internet Explorer e Google Chrome:</p>
            <p className="content__text-acess"><code><b>“Alt”</b> + <b>“b”</b></code> - Aumentar</p>
            <p className="content__text-acess"><code><b>“Alt”</b> + <b>“s”</b></code> - Diminuir</p>
            <p className="content__text-acess  small-destaque">Firefox:</p>
            <p className="content__text-acess"><code><b>“Alt”</b> + <b>“Shift”</b> + <b>“b”</b></code>- Aumentar</p>
            <p className="content__text-acess"><code><b>“Alt”</b> + <b>“Shift”</b> + <b>“s”</b></code>- Diminuir</p>
            <p className="content__text-acess small-destaque">Opera:</p>
            <p className="content__text-acess"><code><b>“Shift”</b> + <b>“Escape”</b> + <b>“b”</b></code>- Aumentar</p>
            <p className="content__text-acess"><code><b>“Shift”</b> + <b>“Escape”</b> + <b>“s”</b></code>- Diminuir</p>
            <p className="content__text-acess small-destaque">Safari e OmniWeb:</p>
            <p className="content__text-acess"><code><b>“Ctrl”</b> + <b>“b”</b></code>- Aumentar</p>
            <p className="content__text-acess"><code><b>“Ctrl”</b> + <b>“s”</b></code>- Diminuir</p>
            <br/>
            <p className="content__text-acess destaque">Teclas de atalho por navegadores</p>
            <p className="content__text-acess small-destaque">Internet Explorer e Google Chrome:</p>
            <p className="content__text-acess"><code><b>“Alt”</b> + <b>“número”</b></code>- Navegar pelo cabeçalho</p>
            <p className="content__text-acess  small-destaque">Firefox:</p>
            <p className="content__text-acess"><code><b>“Alt”</b> + <b>“Shift”</b> + <b>“número”</b></code></p>
            <p className="content__text-acess small-destaque">Opera:</p>
            <p className="content__text-acess"><code><b>“Shift”</b> + <b>“Escape”</b> + <b>“número”</b></code></p>
            <p className="content__text-acess small-destaque">Safari e OmniWeb:</p>
            <p className="content__text-acess"><code><b>“Ctrl”</b> + <b>“número”</b></code></p>
            <br/>
            <p className="content__text-acess destaque">Navegação por tabulação</p>
            <p className="content__text-acess">Use a tecla <b>Tab</b> para navegar por elementos que recebem ação do usuário
                no site, tais como links, botões, campos de formulário e outros na ordem em que eles são apresentados na página, e <b>Shift</b> +
                <b>Tab</b> para retornar. Use as <i>setas</i> <i>direcionais</i> para acessar as informações textuais.
            </p>
            <br/>
            <p className="content__text-acess destaque">Sugestões de programas disponíveis para pessoas com deficiência
            </p>
            <p className="content__text-acess small-destaque">- <b>Nitrous Voice Flux</b>: controla o computador por voz.
                Gratuito;
            </p>
            <p className="content__text-acess  small-destaque">- <b>NVDA</b>: software livre para ler tela  vários idiomas
                Windows;</p>
            <p className="content__text-acess small-destaque">- <b>YeoSoft</b> Text: leitor de tela em inglês e português;
            </p>
            <p className="content__text-acess small-destaque">- <b>Jaws for Windows</b>: leitor de tela  vários idiomas;</p>

            <p className="content__text-acess small-destaque">- <b>Virtual Vision</b>: leitor de telas em português do Brasil;</p>

            <p className="content__text-acess small-destaque">- <b>DOSVOX</b>: sistema para deficientes visuais Windows ou Linux.</p>

            <p className="content__text-acess small-destaque">- <b>Talckback</b>: leitor de tela disponível em smartphones Android.</p>

            <p className="content__text-acess">Observação: leia no manual do leitor de telas sobre a melhor forma de navegação em páginas web.</p>
            <br/>
            <p className="content__text-acess destaque">LIBRAS - Língua Brasileira de Sinais</p>
            <p className="content__text-acess">Este site é acessível em LIBRAS através do 
                <a href="http://www.vlibras.gov.br/" target="_blank"> VLibras</a>.
            </p>
            <p className="content__text-acess">- Do lado direito de cada página do site existe o ícone de um Widget
                informando que o site é acessível em LIBRAS.
            </p>
            <p className="content__text-acess">- Para traduzir, basta clicar sobre o ícone e selecionar o texto que deseja traduzir.
            </p>
        </section>
      <Footer/>
      <Vlibras/>
    </>
  )
}
