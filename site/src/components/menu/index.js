import './index.scss'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useEffect } from 'react';

export default function Menu() {
    

    const navigate = useNavigate();
    function inicial(){
       
    }

    // useEffect(() => {
    //     if(!storage('usuario-logado')){
    //         navigate('/LoginUsuario')
    //     }
    // },[])
    function sairClick() {
        storage.remove('adm-logado')
        navigate('/')
    }

    function IrParaHome(){
        confirmAlert({
            title: 'Ir para home',
            message: `Deseja ir para a home e deslogar do administrador?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => {
                        storage.remove('adm-logado')
                        navigate('/')
                        toast.dark(`Administrador deslogado`)
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })
    }


  return (
  <nav className="comp-menu1">
    <div className="menu-top">

      <div
        className="logo"
        onClick={(e) => {
          e.stopPropagation();
          IrParaHome();
        }}
      >
        <img src="/images/nova-logo.png" className="imagem-logo" />
      </div>

      <div className="menu-items">

        <a href="/adm/cadastrarArtista" className="menu-link">
          <img src="/images/artista.svg" />
          <span>Cadastrar artista</span>
        </a>

        <a href="/adm/cadastromusica" className="menu-link">
          <img src="/images/cadastrarmusica.svg" />
          <span>Cadastrar música</span>
        </a>

        <a href="/adm/artistaCadastrado" className="menu-link">
          <img src="/images/artistaCadastrado.svg" />
          <span>Artistas cadastrados</span>
        </a>

        <a href="/adm/MusicaCadastradas" className="menu-link">
          <img src="/images/msccadastrada.svg" />
          <span>Músicas cadastradas</span>
        </a>

      </div>
    </div>

    <div className="menu-bottom">
      <div className="menu-link sair" onClick={sairClick}>
        <img src="/images/logout.png" />
        <span>Sair</span>
      </div>
    </div>
  </nav>
);
}