import { loginUsuario } from '../../api/usuarioAPI';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss'

export default function Index() {
  

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

async function loginClick() {

  try{
    const r = await loginUsuario(email,senha) 
    navigate('/Home');

  }


  
  catch(err){
    if(err.response.status === 401){
        setErro(err.response.data.erro)
    }
}
}

    return (
      <div className="pagina-loginUsuario">

<div className="faixa1">

<div className="imagem">
<img src="images/loginUsuario.png"  ></img>
</div>


<div className="faixa-input">

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

<a href="home">Esqueceu sua senha cornooo?</a>
<div className='err'>
{erro}
</div>


<br/>

<button type="button" onClick={loginClick} > Entrar </button>



</div>



</div>

      </div>
    );
  }