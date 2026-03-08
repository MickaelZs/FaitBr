import { loginUsuario } from '../../api/usuarioAPI';
import { login } from '../../api/loginadmAPI';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './index.scss'
import Storage from 'local-storage'
import Cabecario from '../../components/cabeçalho';

export default function Index() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  useEffect(() => {

    if (Storage('usuario-logado')) {
      navigate('/')
    }

    if (Storage('adm-logado')) {
      navigate('/adm/cadastrarArtista')
    }

  }, [])


  async function loginClick() {

    try {

      // tenta login admin
      const adm = await login(email, senha)

      Storage('adm-logado', adm)

      toast.success("Admin logado com sucesso")

      navigate('/adm/cadastrarArtista')

    }

    catch {

      try {

        // tenta login usuario
        const usuario = await loginUsuario(email, senha)

        Storage('usuario-logado', usuario)

        toast.success("Login realizado")

        navigate('/')

      }

      catch {

        toast.error("Email ou senha inválidos")

      }

    }

  }

  return (

    <div className="pagina-loginUsuario">

      <Cabecario />

      <div className="login-container">

        <div className="login">

          <div className="login__left">

            <h1>Bem-vindo de volta</h1>

            <div className="login__field">
              <label>Email</label>
              <input
                type="email"
                placeholder="Example@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="login__field">
              <label>Password</label>
              <input
                type="password"
                placeholder="8 characters"
                value={senha}
                onChange={e => setSenha(e.target.value)}
              />
            </div>

            <button
              className="login__button"
              onClick={loginClick}
            >
              Entrar
            </button>

            <div className="login__divider">
              <span>Ou</span>
            </div>

            <a href="/CadastroUsuario" className="login__link">
              Não tem uma conta? Cadastre-se
            </a>

          </div>

          <div className="login__right" />

        </div>

      </div>

      <ToastContainer/>

    </div>

  );
}