import './index.scss'
import Menu from '../../components/menu'
import { listaArtista } from '../../api/cadastroArtistaAPI';
import { useEffect, useState } from 'react'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'

import { deletarrMusica, listaMusicaArtista } from '../../api/musicaAPI';
import { API_URL } from '../../api/config';

export default function Index() {

    const [nomee, setNomee] = useState([])
    const [filtro, setFiltro] = useState('')


    const navigate = useNavigate();


    async function carregarMusicaArtista() {
        const resp = await listaMusicaArtista()
        setNomee(resp)


    }

    async function filtrar() {
        const resp = await listaMusicaArtista(filtro);
        setNomee(resp);
    }


    useEffect(() => {

        carregarMusicaArtista();
    }, [])

    function editarMusica(id) {
        navigate(`/adm/cadastromusica/alterar/${id}`)
    }

    async function deletarMusica(id, nome) {

        confirmAlert({
            title: 'Remover Musica',
            message: `deseja remover a musica ${id, nome}?`,
            buttons: [
                {
                    label: 'sim',
                    onClick: async () => {
                        const filtro = await deletarrMusica(id, nome);
                        if (filtro === '') {
                            listaMusicaArtista();
                        }
                        else
                            filtrar();
                        toast.dark('musica removida')
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })
    }

    return (
        <main className='page page-consultar'>
            <Menu />
            <div className='container'>


                <div className='conteudo'>

                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar musica por nome' value={filtro} onChange={e => setFiltro(e.target.value)} />
                        <img src='/images/procurar.png' alt='buscar' />
                    </div>


                    <section className='card-container'>
                        <div className='comp-card'>

                            {nomee.map(item => {
                                return (

                                    <div className='card'>
                                        <div className='acoes'>

                                            <img src='/images/botao-editar.png' onClick={() => editarMusica(item.id_musica)} />
                                            <img src='/images/excluir.png' onClick={() => deletarMusica(item.id_musica, item.musica)} />


                                        </div>
                                        <div>

                                            <img className='capas' src={`${API_URL}/${item.imagem}`} />


                                            <div className='id'>{item.id} </div>
                                            <div className='artista'>{item.musica} </div>

                                            <div className='genero'>{item.genero}</div>
                                            <audio controls src={`${API_URL}/${item.audio}`}></audio>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>

                    </section>

                </div>
            </div>
            
        </main>

    )
}
