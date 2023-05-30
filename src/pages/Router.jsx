import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import Admin from './Admin/Admin';
import Login from './Login/Login'
import Cadastro_Mod from './Cadastro_Mod/Cadastro_Mod';
import Cadastro_User from './Cadastro_User/Cadastro_User';
import Cadastro from './Cadastro/Cadastro';
import Ong from './Ong/Ong';
import Perfil_User from './Perfil_User/Perfil_User';
import Faq from './Faq/Faq';
import Acessibilidade from './Acessibilidade/Acessibilidade';
import Favoritos from './Favoritos/Favoritos';
import Comentarios from './Comentarios/Comentarios';
import Excluir_Cadastro from './Excluir_Cadastro/Excluir_Cadastro';
import Alterar_Senha from './Alterar_Senha/Alterar_Senha';
import Cadastro_Vol from './Cadastro_Vol/Cadastro_Vol';
import Visita_Guiada from './Visita_Guiada/Visita_Guiada';
import Perfil_Ong from './Perfil_Ong/Perfil_Ong';
import Cadastro_Ong from './Cadastro_Ong/Cadastro_Ong';
import Perfil_Admin from './Perfil_Admin/Perfil_Admin';
import Cadastro_Admin from './Cadastro_Admin/Cadastro_Admin';
import NotFound from './404/NotFound';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro-moderador' element={<Cadastro_Mod />} />
                <Route path='/cadastro-usuario' element={<Cadastro_User />} />
                <Route path='/cadastro-voluntario' element={<Cadastro_Vol />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/cadastro-ong' element={<Cadastro_Ong />} />
                <Route path='/ong/:id' element={<Ong />} />
                <Route path='/ong' element={<Ong />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/perfil' element={<Perfil_User />} />
                <Route path='/acessibilidade' element={<Acessibilidade />} />
                <Route path='/favoritos' element={<Favoritos />} />
                <Route path='/comentarios' element={<Comentarios />} />
                <Route path='/excluir-cadastro' element={<Excluir_Cadastro />} />
                <Route path='/alterar-senha' element={<Alterar_Senha />} />
                <Route path='/visita-guiada' element={<Visita_Guiada />} />
                <Route path='/gerenciamento-ong' element={<Perfil_Ong />} />
                <Route path='/gerenciamento' element={<Perfil_Admin />} />
                <Route path='/cadastro-admin' element={<Cadastro_Admin />} />
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}