import { loginUsuario } from '../../api/usuarioAPI';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './index.scss'
import Storage from 'local-storage'

export default function Index() {


  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  // const [erro, setErro] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    if (Storage('usuario-logado')) {
      navigate('/HomeLoginFeito')
    }
  }, [])

  async function loginClick() {


    const r = await loginUsuario(email, senha)
    Storage('usuario-logado', r)
    navigate('/HomeLoginFeito');




  }

  async function voltar() {
    navigate('/');
  }


  return (
    <div className="pagina-loginUsuario">

      <div className="faixa1">

        <img onClick={voltar} className='voltar' src='/images/seta-icon-branca.png' />

        <div className='faixa-input'>


          <div class="label-float">
            <input type="text" placeholder=" " value={email} onChange={e => setEmail(e.target.value)} />
            <label>Email</label>
          </div>
          <br />
          <div class="label-float">
            <input type="password" placeholder=" " required value={senha} onChange={e => setSenha(e.target.value)} />
            <label>senha</label>

          </div>

          <br />

          <a href="/cadastroUsuario" className='corno'>Fazer Cadastro</a>
          <div className='err'>

          </div>


          <br />

          <button type="button" onClick={loginClick} > Entrar </button>

        </div>


        <div className="imagemm">
          <img src="images/loginUsuario.png" className='imagemfdp' ></img>
        </div>




      </div>






    </div>

  );
}