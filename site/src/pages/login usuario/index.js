import { loginUsuario } from '../../api/usuarioAPI';
import {useEffect, useState} from 'react';
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
    if(Storage('usuario-logado')){
      navigate('/HomeLoginFeito')
    }
  },[])

async function loginClick() {
  try{
    const r = await loginUsuario(email,senha)
    Storage('usuario-logado', r)
    toast.dark('Usuário logado', { autoClose: 400, hideProgressBar: true });
    setTimeout(() => {
      navigate('/HomeLoginFeito');
    },1500)
   

  }
  catch (err) {
    console.log(err)
    toast.error(err.response.data.erro);
}
}

    return (
      <div className="pagina-loginUsuario">
        <ToastContainer/>

<div className="faixa1">
      <div className='faixa-input'>
        

<div class="label-float">
<input type="text" placeholder=" " value={email}  onChange={e => setEmail(e.target.value)}/>
<label>Email</label>
</div>
<br/>
<div class="label-float">
<input type="password" placeholder=" " required  value={senha} onChange={e => setSenha(e.target.value)} />
  <label>senha</label>
  
</div>

<br/>

<a href="/cadastroUsuario" className='corno'>Fazer Cadastro</a>



<br/>
<div>
<button type="button" onClick={loginClick} > Entrar </button>

</div>







</div>

<div className='telabranca'>
<img src="/images/loginUsuario.png" className='imagemfdp' ></img>
      </div>
      </div>
      



</div>

    );
  }