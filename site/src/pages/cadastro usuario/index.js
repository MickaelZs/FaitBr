import './index.scss'

import axios  from 'axios'
import {useEffect, useState} from 'react'
import {useHref, useNavigate, useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { cadastroUsuario, loginUsuario, EnviarEmail } from '../../api/usuarioAPI';
import Storage from 'local-storage'

export default function Index() {
    const [nome, setNome] = useState('');
    const [nasc, setNasc] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro,setErro] = useState()
     const navigate = useNavigate()

    async function CadastroClick() {

      try{
          const r = await cadastroUsuario(email,senha) 
          Storage('usuario-logado', r)
        navigate('/HomeLoginFeito');
      }
  
      catch(err){
        if(err.response.status === 401){
            setErro(err.response.data.erro)
        }
  
    }
  }

    

    async function salvarClick(){
      try{      
          const r = await cadastroUsuario (nome,nasc,email,senha)
          Storage('usuario-logado', r)
          navigate('/HomeLoginFeito');
          await EnviarEmail(nome, email);
          
      }
      catch (err){
          toast.error(err.response.data.erro)
      }
      
      
  }


    return (
      <div className="pagina-cadastroUsuarioo">

        <ToastContainer/>

        <div className="faixa1">

          <div className="imagemm">
          <img src="images/cadastro.png"  className='imagemfdp' ></img>
          </div>
          

          <div className="faixa-input">
          <div class="label-float">
        <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}/>
        
          </div>
          <br/>
          <div class="label-float">
            <input type="date" placeholder=" " value={nasc} onChange={e => setNasc(e.target.value)} required/>
           
          </div>

          <br/>

          <div class="label-float">
        <input type="text" placeholder=" " value={email} onChange={e => setEmail(e.target.value)}/>
      
          </div>
          <br/>
          <div class="label-float">
            <input type="password" placeholder=" " value={senha} onChange={e => setSenha(e.target.value)} required/>
           
          </div>

          <br/>

          <button type="button" className="botao1" onClick={salvarClick}> Entrar </button>
          

          </div>

          

        </div>

      </div>
    );
  }