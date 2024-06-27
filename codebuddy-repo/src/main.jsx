import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Login from './pages/Login/Login.jsx'
import Register from './pages/Cadastro/Register.jsx'
import Profile from './pages/Perfil/Profile.jsx'
import Grupos from './pages/Grupo/Grupos.jsx'
import CriarGrupo from './pages/CriarGrupo/CriarGrupo.jsx'
import GrupoDetails from './pages/GrupoDetails/GrupoDetails.jsx'
import Desafios from './pages/Desafios/Desafios.jsx'
import DesafioDetails from './pages/DesafioDetails/DesafioDetails.jsx'
import DesafioResolver from './pages/DesafioResolver/DesafioResolver.jsx'
import CriarDesafio from './pages/CriarDesafio/CriarDesafio.jsx'
import ListaAlunos from "./pages/ListaAlunos/ListaAlunos.jsx"
import Historico from "./pages/Historico/Historico.jsx"
import Resposta from "./pages/Resposta/Resposta.jsx"
import AdicionarAlunos from "./pages/AdicionaAlunos/AdicionaAlunos.jsx"



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  },
  {
    path: "/Profile",
    element: <Profile/>,
  },
  {
    path: "/Grupos",
    element: <Grupos/>,
  },
  {
    path: "/CriarGrupo",
    element: <CriarGrupo/>,
  },
  {
    path: "/Grupo/:nome",
    element: <GrupoDetails/>
  },
  {
    path: "/Desafios/:grupoNome",
    element: <Desafios/>
  },
  {
    path: "/Desafios/:grupoNome/CriarDesafio",
    element: <CriarDesafio/>
  },
  {
    path: "/AdicionarAlunos/:grupoNome",
    element: <AdicionarAlunos/>
  },
  {
    path: "/Desafios/:grupoNome/:desafioNome",
    element: <DesafioDetails/>
  },
  {
    path: "/Desafios/:grupoNome/:desafioNome/resolver",
    element: <DesafioResolver/>
  },
  {
      path: "/listaAlunos/:nome",
      element: <ListaAlunos/>
    },
  {
    path: "/Historico/:alunoId/:grupoNome",
    element: <Historico />
  },
  {
      path: "/Historico/:alunoId/:grupoNome/:desafioNome/resposta",
      element: <Resposta />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
