import React from 'react'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import './style.css'

export default function Cadastro_Vol() {
  return (
    <>
    <Menu/>
      <main class="main_content container">
        <section class="section-seu-codigo container">
            <div class="content">
                <div id="box-artigo" class="box-artigo">
                    <div class="container_form">
                        <h1>Cadastro do Voluntário</h1>
                        <form class="form" action="#" method="post">
                            <div class="form_grupo">
                                <label for="nome" class="form_label">Nome</label>
                                <input type="text" name="nome" class="form_input" id="nome" placeholder="Nome" required/>
                            </div>

                            <div class="form_grupo">
                                <label for="sobrenome" class="form_label">Sobrenome</label>
                                <input type="text" name="sobrenome" class="form_input" id="sobrenome" placeholder="Sobrenome" required/>
                            </div>

                            <div class="form_grupo">
                                <label for="e-mail" class="form_label">Email</label>
                                <input type="email" name="email" class="form_input" id="email" placeholder="seuemail@email.com" required/>
                            </div>

                            <div class="form_grupo">
                                <label for="telefone" class="form_label">Telefone</label>
                                <input type="telefone" name="telefone" class="form_input" id="telefone" placeholder="99999-999" required/>
                            </div>

                            <div class="form_grupo">
                                <label for="datanascimento" class="form_label">Data de Nascimento</label>
                                <input type="date" name="datanascimento" class="form_input" id="datanascimento" placeholder="Data de Nascimento" required/>
                            </div>
							
							<div class="form_grupo">
                            <form>
                                <label for="sexo" class="form_label">Sexo:</label>
                                    <input type="radio" name="sexo" value="M" id="sexo_masc"/> M<br/>
                                    <input type="radio" name="sexo" value="F" id="sexo_fem"/> F
                            </form>
							</div>

                            <div class="form_grupo">
                                <label for="pergunta" class="form_label">Como conheceu o Socieloo?</label>
                                <div class="btn__container">
                                    <input type="checkbox" id="met-amigos" class="checkbox-input"/>
                                    <label for="met-amigos" class="checkbox-label">Amigos</label>
                                </div>
                                <div class="btn__container">
                                    <input type="checkbox" id="met-RedesSociais" class="checkbox-input"/>
                                    <label for="met-RedesSociais" class="checkbox-label">Redes sociais</label>
                                </div>
                                <div class="btn__container">
                                    <input type="checkbox" id="met-Jornal" class="checkbox-input"/>
                                    <label for="met-Jornal" class="checkbox-label">Jornal</label>
                                </div>
                                <div class="btn__container">
                                    <input type="checkbox" id="met-Outros" class="checkbox-input"/>
                                    <label for="met-Outros" class="checkbox-label">Outros</label>
                                </div>
                            </div>   

							<div class="form_grupo">
                                <label for="pergunta" class="form_label">Com qual dos nossos pilares você mais se identifica?</label>
                                <div class="btn__container">
                                    <input type="checkbox" id="solidariedade" class="checkbox-input"/>
                                    <label for="solidariedade" class="checkbox-label">Solidariedade e participação ativa</label>
                                </div>
                                <div class="btn__container">
                                    <input type="checkbox" id="animal" class="checkbox-input"/>
                                    <label for="animal" class="checkbox-label">Adoção e proteção de animais</label>
                                </div>
                                <div class="btn__container">
                                    <input type="checkbox" id="saude" class="checkbox-input"/>
                                    <label for="saude" class="checkbox-label">Saúde e bem-estar</label>
                                </div>
                            </div> 

                            <div class="form_grupo">
								<label for="pergunta2" class="form_label">Quantos dias gostaria de dedicar às nossas atividades?</label>
                                <input type="text" name="pergunta" class="form_input" id="pergunta2" placeholder="Digite a quantidade de dias" required/>
                            </div>
							
							<div class="form_grupo">
                                <label for="semana" class="form_label">Quando prefere participar das nossas ações?</label>
                                <div class="btn__container">
                                    <input type="checkbox" id="semana" class="checkbox-input"/>
                                    <label for="semana" class="checkbox-label">Durante a semana</label>
                                </div>
                                <div class="btn__container">
                                    <input type="checkbox" id="finalsemana" class="checkbox-input"/>
                                    <label for="finalsemana" class="checkbox-label">Durante o final de semana</label>
                                </div>
                            </div>
							
							<div class="form_grupo">
                                <label for="manha" class="form_label">Selecione o melhor período para participar das nossas atividades</label>
                                <div class="btn__container">
                                    <input type="checkbox" id="manha" class="checkbox-input"/>
                                    <label for="manha" class="checkbox-label">Manhã</label>
                                </div>
                                <div class="btn__container">
                                    <input type="checkbox" id="tarde" class="checkbox-input"/>
                                    <label for="tarde" class="checkbox-label">Tarde</label>
                                </div>
                                <div class="btn__container">
                                    <input type="checkbox" id="noite" class="checkbox-input"/>
                                    <label for="noite" class="checkbox-label">Noite</label>
                                </div>
                            </div>
								
                            <div class="options__checkbox">
                                     <input type="checkbox" name="termos" id="termos"/>
                                     <label class="check_label" for="termos">Leia a nossa <a href="#">Política de Privacidade</a></label>
                            </div>

                            <div class="options__checkbox">
                                      <input type="checkbox" name="termos2" id="termos2"/>
                                      <label class="check_label" for="termos2">Li e concordo com a política de privacidade</label>
                            </div>

                            <div class="submit">
                                      <input type="hidden" name="acao" value="enviar" id="enviar"/>
                                      <button type="submit" name="Submit" class="submit_btn">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </section>
    </main>
    <Footer/>
    <Vlibras/>
    </>
  )
}
