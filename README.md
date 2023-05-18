# Socieloo


<p align="center">
 <img src="https://user-images.githubusercontent.com/84794798/169667225-9db47581-a814-4c78-9dd2-10e44bc9133b.png" width="50%">
</p>
<p>A socieloo é uma organização sem fins lucrativos que proporciona acesso a ONGS e trabalhos sociais em geral.</p>
<p>Interdisciplinary project of East Zone Fatec.</p>
<p><a href = "https://github.com/DiogoLCarvalho/grupox"> Back-end do projeto </a></p>

## Fatec ZL - Centro Paula Souza 
##### Disciplina - Programação Web III 
Grupo CPDev
- <a href = "https://github.com/ademiralves"> Ademir Alves </a>
- <a href = "https://github.com/Aryel15"> Aryel Anne </a>
- <a href = "https://github.com/BiaJL"> Bianca Jesus </a>
- <a href = "https://github.com/DiogoLCarvalho"> Diogo Carvalho </a>
- <a href = "https://github.com/FernandaSena07"> Fernanda Sena </a>
- <a href = "https://github.com/leocaje"> Leonardo Cajé</a>
##### Processo de Desenvolvimento de Software - PDS
> O PDS segue uma abordagem interativa incremental adaptada do Scrum. Cada interação tem uma definição de pronto estabelecida com objetivo de controlar a qualidade. 
##### Estudo de Caso – SOCIELOO
> No contexto do projeto interdisciplinar o estudo de caso tem como objetivo desenvolver e implantar um site centralizador de ONGs, instituições e projetos sociais da cidade de São Paulo, com o propósito de divulgá-las a possíveis doadores e voluntários e criar, assim, um ELO entre ONGs e a sociedade. O diferencial do site é a maior flexibilidade do usuário para a escolha de Projetos sociais com a localização e segmento de sua preferência, podendo favoritar, analisar e avaliar cada projeto.
##### Product Backlog 
- RU01 - Compras - Registra e acompanha os processos de compras na organização, prevê a entrega programada de pedidos de compra 
- RU02 - Recebimento - Registra, controla e informa sobre a entrada de mercadorias e integra as informações dos dados da nota fiscal de entrada com o estoque 
- RU03 - Vendas – Registra e acompanha as vendas mantendo as informações integradas com o controle de estoque. 
##### Sprint Backlog 
> Cada requisito tem um identificador único de maneira que seja possível rastrear a necessidade do cliente com a implementação do software. 

| Identificador | Descrição | Prioridade | 
| ------------ | ------------------------------------------------------------------------ | ------| 
| REQ01 – Cadastrar ONGs/Instituições/Projetos Sociais | **Como** – ONG/Instituição/Projeto Social;<br> **Eu quero** – Cadastrar no site a ação social no site;<br> **De maneira que** – Seja possível criar um perfil próprio para o projeto (Página de ONG). | Alta |
| REQ02 – Consultar ONGs/Instituições/Projetos Sociais | **Como** – Usuário;<br> **Eu quero** – Consultar uma ONG´s/Instituições/Projetos Sociais;<br> **De maneira que** – Seja possível obter informações sobre a ONG´s/Instituições/Projetos Sociais como descrição textual, sua história, imagens, informações de contato e de doação e mapa de localização. | Alta |
| REQ03 – Atualizar ONGs/Instituições/Projetos Sociais | **Como** – ONG´s/Instituições/Projetos Sociais;<br> **Eu quero** – Alterar os dados da ONG/Instituição/Projeto Social;<br> **De maneira que** – Seja possível atualizar informações de ONG/Instituição/Projeto Social, nos casos de mudanças de endereço, informações de contato, imagens e localização. | Média |
| REQ04 – Excluir ONGs/Instituições/Projetos Sociais | **Como** – ONG/Instituição/Projeto Social OU Moderador/Administrador;<br> **Eu quero** (se ONG/Instituição/Projeto Social) – Excluir meu cadastro e minha Página de ONG do site;<br> **De maneira que** – Meus dados não sejam mais divulgados pelo site.<br> **Eu quero** (se Moderador/Administrador) – Excluir o cadastro de uma ONG e sua Página de ONG do site;<br> **De maneira que** – As informações publicadas por aquele projeto não estivessem mais disponíveis no site. | Média |
| REQ05 – Cadastrar Usuário | **Como** – Usuário;<br> **Eu quero** – Fazer um cadastro de usuário no site;<br> **De maneira que** – Seja possível criar um perfil próprio para favoritar ONG’s por segmento e região, avaliar ONG’s e preencher formulários de ONG’s. | Alta |
| REQ06 – Consultar Usuário | **Como** – ONG/Instituição/Projeto Social OU Moderador/Administrador;<br> **Eu quero** – Consultar o perfil de um usuário;<br> **De maneira que** – Seja possível obter informações sobre o usuário e bloquear ou excluir o seu perfil, se necessário. | Baixa |
| REQ07 – Atualizar Usuário | **Como** – Usuário;<br> **Eu quero** – Alterar seus dados de Usuário;<br> **De maneira que** – Seja possível atualizar informações de usuário. | Média |
| REQ08 – Excluir Usuário | **Como** – Usuário OU Moderador/Administrador;<br> **Eu quero** (se Usuário) – Excluir meu cadastro e meu perfil de usuário;<br> **De maneira que** – Meus dados não sejam mais divulgados pelo site.<br> **Eu quero** (se Moderador/Administrador) – Excluir o cadastro de um usuário do site;<br> **De maneira que** – As informações daquele usuário não estiverem mais disponíveis no site. | Média |
| REQ09 – Login de ONGs e usuários | **Como** – Usuário;<br> **Eu quero** – Fazer doações, pesquisar ações sociais, avaliar e comentar;<br> **De maneira que** – Possa consultar e atualizar o perfil de usuário. | Alta |
| REQ10 – Fazer Avalições | **Como** – Usuário;<br> **Eu quero** – Escrever comentários;<br> **De maneira que** – Seja possível criar comentários em perfis de ONGs. | Média |
| REQ11 – Excluir Avaliações | **Como** – Moderador;<br> **Eu quero** – Excluir comentários;<br> **De maneira que** – Possa retirar comentários ofensivos e ou de conteúdo impróprio. | Média |
##### Definição de pronto 
> O sprint será considerado concluido quando: 
> 1) Os casos de teste de aceitação forem executados e obtiverem 100% de satisfatorios. Os casos de teste (CT) são rastreáveis para os requisiitos (REQ). O elo de rastreabilidade 
é estabelecido pelo identificador do caso de teste.
> 2) Depois de executado os casos de teste com 100% de satisfatorios o código deve ser armazenado no github (commit). 
##### Casos de teste 
| Identificador | Cenário de uso |
| ------------ | ------------------------------------------------------------------------ |
| REQ01CT01 | **Dado que** – A ONG/Instituição/Projeto social não está cadastrada;<br> **Quando**   – O usuário solicitar cadastro de ação social;<br> **Então** – O sistema envia os dados cadastrais para a aprovação do moderador. Se as informações estiverem completas e os dados checarem, é enviada uma mensagem para a ONG indicando que o cadastro foi concluído com sucesso e a ONG recebe uma Página de ONG publicada no site.  |
| REQ01CT02 | **Dado que** – A ONG/Instituição/Projeto social não está cadastrada;<br> **Quando**   – O usuário solicitar cadastro de ação social;<br>  **Então** – O sistema envia os dados de cadastro para a aprovação do moderador. Se houver informações faltando e/ou incongruentes, o moderador veta o cadastro e a publicação da Página de ONG. É enviada uma mensagem, para a ONG, informando quais dados faltam e/ou apresentam incongruências e solicitando sua correção, para posterior avaliação. |
| REQ02CT01 | **Dado que** – A ONG/Instituição/Projeto Social CNPJ 62.823.257/0001-09 está cadastrado;<br>**Quando**   - o usuário solicitar uma consulta pelo CNPJ;<br>**Então** – o sistema apresenta os detalhes da ONG´s/Instituições/Projetos Sociais cadastrado|
| REQ03CT01 | **Dado que** – A ONG/Instituição/Projeto Social;<br> **Quando**   – Quer alterar seus dados de ONG/Instituição/Projeto Social;<br> **Então** – O sistema envia uma mensagem para a ONG/Instituição/Projeto Social comunicando que os dados foram atualizados|
| REQ03CT02  | **Dado que** – A ONG/Instituição/Projeto Social;<br>**Quando**   – Quer alterar seus dados de ONG/Instituição/Projeto Social;<br>**Então** – O sistema envia uma mensagem para a ONG/Instituição/Projeto Social comunicando que houve uma falha na tentativa de atualizar os dados cadastrais |
| REQ04CT01  | **Dado que** – A ONG foi excluída do site;<br>**Quando**   (ONG/Instituição/Projeto Social) – tiver solicitado a remoção de cadastro;<br>**Então** – A ONG é informada, via mensagem pop-up, de que seu cadastro foi excluído com sucesso;<br>**Quando**   (Moderador/Administrador) – tiver optado por remover o cadastro de uma ONG;<br>**Então** – A ONG recebe uma notificação, via e-mail, de que seu cadastro foi removido do site, informando o devido motivo da exclusão  |
| REQ05CT01 | **Dado que** – O usuário não está cadastrado;<br>**Quando**   – O usuário solicitar o cadastro de doador;<br> **Então** – O sistema envia uma mensagem de cadastro concluído com sucesso |
| REQ05CT02 | **Dado que** – O usuário não está cadastrado;<br>**Quando**   – O usuário cadastrar o e-mail com o código de validação errado;<br> **Então** - O sistema não validará o cadastro e mostrará uma mensagem de erro |
| REQ06CT01 | **Dado que** – O usuário de nome João Pedro de Souza está cadastrado;<br>**Quando**   - o usuário solicitar uma consulta pelo NOME;<br> **Então** – o sistema apresenta os detalhes do usuário cadastrado  |
| REQ07CT01 | **Dado que** – O usuário;<br> **Quando**   – Quer alterar seus dados de Usuário;<br> **Então** – O sistema envia uma mensagem para o usuário comunicando que os dados foram atualizados.|
| REQ07CT02 | **Dado que** – O usuário;<br>  **Quando**   – Quer alterar seus dados de Usuario;<br> **Então** – O sistema envia uma mensagem para o usuário comunicando que houve uma falha na tentativa de atualizar os dados cadastrais|
| REQ08CT01 | **Dado que** – O usuário foi excluído do site;<br> **Quando**   (ONG/Instituição/Projeto Social) – tiver solicitado a remoção de cadastro;<br>**Então** – O usuário recebe uma notificação, via e-mail, de que seu cadastro foi removido do site. |
| REQ13CT01| **Dado que** – o usuário está cadastrado;<br> **Quando**  - Inserir a opção de “Esqueci a senha”;<br> **Então**- Sistema envia um link para redefinição de senha no e-mail cadastrado|
| REQ14CT01 | **Dado que** – o usuário não esteja logado;<br> **Quando**   – For escrever um comentário;<br> **Então** - O sistema irá pedir para que faça o login ou cadastre uma conta para comentar. |
> 

