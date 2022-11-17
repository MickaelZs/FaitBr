import './index.scss'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function Menu() {

    const navigate = useNavigate();

    function sairClick() {
        storage.remove('usuario-logado')
        navigate('/LoginAdm')
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
            <div className='div-minimae'>

                <div className='logo' onClick=
                                            {e => {
                                                e.stopPropagation();
                                                IrParaHome();
                                            }}
                >
                    <img src="/images/nova-logo.png" className='imagem-logo' />
                </div>

                <div className='menu-items'>

                    <div>
                        <img src="/images/artista.svg" />
                        <a href='/adm/cadastrarArtista'>Cadastrar artista</a>
                    </div>
                    <div>
                        <img src="/images/cadastrarmusica.svg" />
                        <a href='/adm/cadastromusica'>Cadastrar Musica </a>
                    </div>

                    <div>
                        <img src="/images/consulta.svg" />
                        <a href='/Consulta'>Consultar usuario</a>

                    </div>

                    <div>
                        <img src="/images/artistacadastrado.svg" />
                        <a href='/adm/artistaCadastrados'>Artista cadastrado</a>

                    </div>

                    <div href='/adm/MusicaCadastradas' >
                        <img src="/images/msccadastrada.svg" />
                        <a href='/adm/MusicaCadastradas'>Musicas cadastradas</a>
                    </div>
                </div>

                <div className='menu-items sair-div'>
                    <div onClick={sairClick}>
                        <img src="/images/logout.png" />
                        <div>Sair</div>
                    </div>

                </div>
            </div>


        </nav>

    )
}