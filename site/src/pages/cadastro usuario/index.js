import './index.scss'

import axios  from 'axios'
import {useEffect, useState} from 'react'
import {useHref, useNavigate, useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { cadastroUsuario, loginUsuario } from '../../api/usuarioAPI';
import storage from 'local-storage'

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
          storage('usuario-logado', r)
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
          storage('usuario-logado', r)
          navigate('/HomeLoginFeito');
      }
      catch (err){
          toast.error(err.response.data.erro)
      }
      
      
  }


    return (
      <div className="pagina-cadastroUsuario">

        <ToastContainer/>

        <div className="faixa1">

          <div className="imagem">
          <img src="images/cadastro.png"  ></img>
          </div>
          

          <div className="faixa-input">
          <div class="label-float">
        <input type="text" placeholder=" " value={nome} onChange={e => setNome(e.target.value)}/>
        <label>Nome</label>
          </div>
          <br/>
          <div class="label-float">
            <input type="date" placeholder=" " value={nasc} onChange={e => setNasc(e.target.value)} required/>
            <label>Date de nascimento</label>
          </div>

          <br/>

          <div class="label-float">
        <input type="text" placeholder=" " value={email} onChange={e => setEmail(e.target.value)}/>
        <label>Email</label>
          </div>
          <br/>
          <div class="label-float">
            <input type="password" placeholder=" " value={senha} onChange={e => setSenha(e.target.value)} required/>
            <label>Senha</label>
          </div>

          <br/>

          <button type="button" className="botao1" onClick={salvarClick}> Entrar </button>
          

          </div>

          

        </div>

      </div>
    );
  }