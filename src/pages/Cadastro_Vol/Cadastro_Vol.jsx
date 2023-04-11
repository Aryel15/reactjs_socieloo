import React from 'react'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import Vlibras from '../../components/Vlibras/Vlibras'
import './style.css'

export default function Cadastro_Vol() {
  return (
    <>
    <Menu/>
      <main className="main_content container">
        <section className="section-seu-codigo container section-vol">
            <div className="content">
                <div id="box-artigo" className="box-artigo">
                    <div className="container_form">
                        <h1>Cadastro do Voluntário</h1>
                        <form className="form" action="#" method="post">
                            <div className="form_grupo">
                                <label for="nome" className="form_label">Nome</label>
                                <input type="text" name="nome" className="form_input" id="nome" placeholder="Nome" required/>
                            </div>

                            <div className="form_grupo">
                                <label for="sobrenome" className="form_label">Sobrenome</label>
                                <input type="text" name="sobrenome" className="form_input" id="sobrenome" placeholder="Sobrenome" required/>
                            </div>

                            <div className="form_grupo">
                                <label for="e-mail" className="form_label">Email</label>
                                <input type="email" name="email" className="form_input" id="email" placeholder="seuemail@email.com" required/>
                            </div>

                            <div className="form_grupo">
                                <label for="telefone" className="form_label">Telefone</label>
                                <input type="telefone" name="telefone" className="form_input" id="telefone" placeholder="99999-999" required/>
                            </div>

                            <div className="form_grupo">
                                <label for="datanascimento" className="form_label">Data de Nascimento</label>
                                <input type="date" name="datanascimento" className="form_input" id="datanascimento" placeholder="Data de Nascimento" required/>
                            </div>
							
							<div className="form_grupo">
                            <form>
                                <label for="sexo" className="form_label">Sexo:</label>
                                    <input type="radio" name="sexo" value="M" id="sexo_masc"/> M<br/>
                                    <input type="radio" name="sexo" value="F" id="sexo_fem"/> F
                            </form>
							</div>

                            <div className="form_grupo">
                                <label for="pergunta" className="form_label">Como conheceu o Socieloo?</label>
                                <div className="btn__container">
                                    <input type="checkbox" id="met-amigos" className="checkbox-input"/>
                                    <label for="met-amigos" className="checkbox-label">Amigos</label>
                                </div>
                                <div className="btn__container">
                                    <input type="checkbox" id="met-RedesSociais" className="checkbox-input"/>
                                    <label for="met-RedesSociais" className="checkbox-label">Redes sociais</label>
                                </div>
                                <div className="btn__container">
                                    <input type="checkbox" id="met-Jornal" className="checkbox-input"/>
                                    <label for="met-Jornal" className="checkbox-label">Jornal</label>
                                </div>
                                <div className="btn__container">
                                    <input type="checkbox" id="met-Outros" className="checkbox-input"/>
                                    <label for="met-Outros" className="checkbox-label">Outros</label>
                                </div>
                            </div>   

							<div className="form_grupo">
                                <label for="pergunta" className="form_label">Com qual dos nossos pilares você mais se identifica?</label>
                                <div className="btn__container">
                                    <input type="checkbox" id="solidariedade" className="checkbox-input"/>
                                    <label for="solidariedade" className="checkbox-label">Solidariedade e participação ativa</label>
                                </div>
                                <div className="btn__container">
                                    <input type="checkbox" id="animal" className="checkbox-input"/>
                                    <label for="animal" className="checkbox-label">Adoção e proteção de animais</label>
                                </div>
                                <div className="btn__container">
                                    <input type="checkbox" id="saude" className="checkbox-input"/>
                                    <label for="saude" className="checkbox-label">Saúde e bem-estar</label>
                                </div>
                            </div> 

                            <div className="form_grupo">
								<label for="pergunta2" className="form_label">Quantos dias gostaria de dedicar às nossas atividades?</label>
                                <input type="text" name="pergunta" className="form_input" id="pergunta2" placeholder="Digite a quantidade de dias" required/>
                            </div>
							
							<div className="form_grupo">
                                <label for="semana" className="form_label">Quando prefere participar das nossas ações?</label>
                                <div className="btn__container">
                                    <input type="checkbox" id="semana" className="checkbox-input"/>
                                    <label for="semana" className="checkbox-label">Durante a semana</label>
                                </div>
                                <div className="btn__container">
                                    <input type="checkbox" id="finalsemana" className="checkbox-input"/>
                                    <label for="finalsemana" className="checkbox-label">Durante o final de semana</label>
                                </div>
                            </div>
							
							<div className="form_grupo">
                                <label for="manha" className="form_label">Selecione o melhor período para participar das nossas atividades</label>
                                <div className="btn__container">
                                    <input type="checkbox" id="manha" className="checkbox-input"/>
                                    <label for="manha" className="checkbox-label">Manhã</label>
                                </div>
                                <div className="btn__container">
                                    <input type="checkbox" id="tarde" className="checkbox-input"/>
                                    <label for="tarde" className="checkbox-label">Tarde</label>
                                </div>
                                <div className="btn__container">
                                    <input type="checkbox" id="noite" className="checkbox-input"/>
                                    <label for="noite" className="checkbox-label">Noite</label>
                                </div>
                            </div>
								
                            <div className="options__checkbox">
                                     <input type="checkbox" name="termos" id="termos"/>
                                     <label className="check_label" for="termos">Leia a nossa <a href="#">Política de Privacidade</a></label>
                            </div>

                            <div className="options__checkbox">
                                      <input type="checkbox" name="termos2" id="termos2"/>
                                      <label className="check_label" for="termos2">Li e concordo com a política de privacidade</label>
                            </div>

                            <div className="submit">
                                      <input type="hidden" name="acao" value="enviar" id="enviar"/>
                                      <button type="submit" name="Submit" className="submit_btn">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        </section>
    </main>
    <Footer/>
    <Vlibras/>
    </>
  )
}
