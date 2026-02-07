import './index.scss'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHref, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cadastroUsuario, loginUsuario, EnviarEmail } from '../../api/usuarioAPI';
import Storage from 'local-storage'
import Cabecario from '../../components/cabeçalho';

export default function Index() {
  const [nome, setNome] = useState('');
  const [nasc, setNasc] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState()
  const navigate = useNavigate()

  async function CadastroClick() {

    try {
      const r = await cadastroUsuario(email, senha)
      Storage('usuario-logado', r)
      navigate('/');
    }

    catch (err) {
      if (err.response.status === 401) {
        setErro(err.response.data.erro)
      }

    }
  }



  async function salvarClick() {
    try {
      const r = await cadastroUsuario(nome, nasc, email, senha)
      Storage('usuario-logado', r)
      navigate('/');
      await EnviarEmail(nome, email);

    }
    catch (err) {
      toast.error(err.response.data.erro)
    }


  }

  async function voltar() {
    navigate('/');
  }


  return (
    
    <div className="cadastroUsuario">
      <Cabecario />

      <div className="cadastro">
      <div className="register">
      <div className="register__left">
        <h1>Cria uma conta</h1>

        <div className="field">
          <label>Nome</label>
          <input type="text" placeholder="Nome completo" value={nome} onChange={e => setNome(e.target.value)} />
        </div>

        <div className="field">
          <label>Data de Nascimento</label>
          <input type="date" placeholder="Data de nascimento" value={nasc} onChange={e => setNasc(e.target.value)} />
        </div>

        <div className="field">
          <label>Email</label>
          <input type="email" placeholder="Example@email.com" value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div className="field">
          <label>Senha</label>
          <input type="password" placeholder="8 characters" value={senha} onChange={e => setSenha(e.target.value)} />
        </div>

        <button className="btn-primary" onClick={salvarClick}>Inscreva-se</button>

        <div className="divider">
          <span>Ou</span>
        </div>

        <a href="/LoginUsuario" className="login-link">
          Já tenho uma conta
        </a>
      </div>

      <div className="register__right" />
    </div>
     </div>

    </div>
  );
}