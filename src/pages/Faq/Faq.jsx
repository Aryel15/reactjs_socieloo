import React from 'react'
import Menu from "../../components/Menu/Menu";
import Vlibras from '../../components/Vlibras/Vlibras'
import "./style.css"

export default function Faq() {
  return (
    <>
      <Menu/>
      <main className="profile column main-faq">
        <div>
            <h2 className="page-subtitle">Dúvidas Frequentes (FAQ)</h2>
        </div>
        <div>
            <details>
                <summary>
                    1. O que é o SOCIELOO?
                </summary>
                <p>
                    O SOCIELOO é uma plataforma centralizadora de ONGs na cidade de São Paulo, SP, com a intenção de divulgar os projetos sociais. Nosso lema é “construindo elos sociais”, pois queremos ligar ONGs e doadores como os elos de uma corrente e fortalecer esta rede de ajuda. 
                </p>
            </details>
            <hr />
            <details>
                <summary>
                    2. O SOCIELOO está apenas em São Paulo, SP? 
                </summary>
                <p>
                    Por enquanto, sim. Somos uma plataforma pequena e ainda em desenvolvimento, portanto escolhemos limitar nossa divulgação inicial à cidade de São Paulo. Porém, futuramente pretendemos expandir nossa área de atuação aos poucos, para criar uma corrente cada vez maior.
                </p>
            </details>
            <hr />
            <details>
                <summary>
                    3. Como funciona o SOCIELOO? 
                </summary>
                <p>
                    Aqui, ONGs da cidade de São Paulo, SP, podem criar seu cadastro e ser divulgadas contando mais sobre seus trabalhos. Cada ONG recebe uma Página de ONG, que poderá ser acessada por todos os visitantes do site. A quem interessar doar, as informações da ONG estarão disponíveis ali.
                </p>
            </details>
            <hr />
            <details>
                <summary>
                    4. Sou ONG, como faço para me cadastrar? 
                </summary>
                <p>
                    Você, ONG interessada em ser divulgada no SOCIELOO, pode se cadastrar ao clicar no botão “Cadastre-se”. Confira se a opção de cadastro selecionada é a de “ONGs”: basta ver no canto inferior à direita. Depois, preencha seus dados, não esquecendo de se atentar para quais campos são obrigatórios.  
                </p>
            </details>
            <hr />
            <details>
                <summary>
                    5. Quais são as informações obrigatórias para o cadastramento de ONGs? 
                </summary>
                <p>
                    - Dados cadastrais e de contato (nome da ONG, email, senha, telefone, descrição, segmento);<br></br> 
                    - Dados de localização (CEP, endereço, número, bairro, região);<br></br>
                    - Documentação (CNAE). 
                </p>
            </details>
            <hr />
            <details>
                <summary>
                    6. O que é CNAE?
                </summary>
                <p>
                    A CNAE (Classificação Nacional de Atividades Econômicas) é utilizada para determinar quais atividades são exercidas por uma empresa. Obrigatória a todas as pessoas jurídicas, inclusive autônomos e organizações sem fins lucrativos, a CNAE é essencial para obtenção do CNPJ.
                </p>
            </details>
            <hr />
            <details>
                <summary>
                    7. Quais as vantagens de minha ONG se cadastrar no SOCIELOO? 
                </summary>
                <p>
                    Entendemos que embora as redes sociais tenham facilitado a divulgação de trabalhos sociais, são poucos os ambientes voltados diretamente às ONGs na internet. O SOCIELOO nasce com o objetivo de suprir essa falta e dedicar uma plataforma inteira apenas para a divulgação de ONGs. Através de sua Página de ONG, o projeto poderá compartilhar informações sobre sua causa. Aqueles que tiverem o interesse de ser doadores poderão se dirigir para uma plataforma exclusiva que trata apenas de projetos sociais e encontrar tudo o que precisam saber sobre o projeto de seu interesse através de sua Página de ONG, facilitando a construção do elo entre doadores e ONGs.
                </p>
            </details>
            <hr />
            <details>
                <summary>
                    8. O que é a Página de ONG? 
                </summary>
                <p>
                    Toda ONG cadastrada recebe a chamada Página de ONG para divulgar seus trabalhos. É uma página pública que todos os usuários que acessarem o SOCIELOO terão acesso. Ali, estarão concentradas as informações da ONG: nome, descrição, dados de contato e redes sociais, dados bancários, segmento e região. As ONGs poderão receber comentários e avaliações de usuários cadastrados em suas Páginas de ONG. Para ter acesso às Páginas de ONG, o visitante pode encontrar ícones em miniatura na Página Inicial do site ou, ainda, fazendo buscas por nome, segmento ou região da ONG. 
                </p>
            </details>
            <hr />
            <details>
                <summary>
                    9. Sou doador, como faço para me cadastrar? 
                </summary>
                <p>
                    Se você é um usuário comum e gostaria de se cadastrar no site, basta clicar no botão “Cadastre-se”, no topo da página, e você será redirecionado para o formulário de cadastro. Confira, no campo inferior direito, se a opção de cadastro selecionada está correta; caso contrário, escolha “Usuário” e pronto, basta preencher seus dados. 
                </p>
            </details>
            <hr />
            <details>
                <summary>
                    10. Posso doar através do SOCIELOO? 
                </summary>
                <p>
                    Não. No momento fazemos apenas a divulgação de ONGs e seus projetos sociais. Para realizar doações, permitimos que as ONGs cadastradas no site incluam seus dados bancários e/ou redes sociais e sites, caso o tenham, onde os interessados poderão achar mais informações sobre doação para aquela ONG.
                </p>
            </details>
            <hr />
            <details>
                <summary>
                    11. Quais as vantagens de me cadastrar no SOCIELOO se sou um doador? 
                </summary>
                <p>
                    Todos os usuários visitantes do SOCIELOO têm acesso à divulgação de ONGs. Entretanto, esses usuários podem criar um perfil próprio também, em que ganharão funcionalidades exclusivas para melhorar sua navegação na plataforma. Dentre elas, a pessoa cadastrada poderá: comentar, avaliar ou denunciar projetos em suas Páginas de ONG; e favoritar ONGs, segmentos ou regiões específicas.
                </p>
            </details>
            <hr />
            <details>
                <summary>
                    12. As ONGs cadastradas são confiáveis? 
                </summary>
                <p>
                    Fazemos uma filtragem no ato do cadastro das ONGs, inclusive solicitando documentação obrigatória para comprovar a existência daquela ONG. Nossos administradores buscam comprovar as informações para que o cadastro seja mantido no site.
                </p>
            </details>
            <hr />
            <details>
                <summary>
                    13. Encontrei uma ONG suspeita. Posso denunciar? 
                </summary>
                <p>
                    Sim. Apesar de filtrarmos as ONGs divulgadas em nossa plataforma, contamos com a colaboração dos usuários para identificar possíveis projetos fraudulentos. Para denunciar, é necessário que o usuário seja cadastrado e esteja logado. Nas Páginas de ONG, haverá um botão de denúncia disponível. Em caso de suspeitas, denuncie e escreva no campo correspondente os motivos para a desconfiança. Nossos administradores avaliarão a denúncia e, se comprovada, a ONG será excluída da plataforma. 
                </p>
            </details>
            <hr />
        </div>
      </main>
      <Vlibras/>
    </>
  )
}
