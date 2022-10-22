import { API_URL } from '../../api/config';
import Menu from '../../components/menu'
import { confirmAlert } from 'react-confirm-alert'
import { listaArtista, BuscarArtistaPorNome, deletaArtista } from '../../api/cadastroArtistaAPI';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-confirm-alert/src/react-confirm-alert.css'
import storage from 'local-storage'
import './index.scss'



export default function Index() {

    const [nomee, setNomee] = useState([])
    const [filtro, setFiltro] = useState('')
    const navigate = useNavigate();

    function editarArtista(id) {
        navigate(`/adm/cadastrarArtista/alterar/${id}`)
    }


    async function carregarArtista() {
        const resp = await listaArtista();
        setNomee(resp);
    }



    useEffect(() => {

        carregarArtista();
    }, [])

    async function filtrar() {
        const resp = await BuscarArtistaPorNome(filtro);
        setNomee(resp);
    }



    async function deletarArtista(id, nome) {

        confirmAlert({
            title: 'Remover Artista',
            message: `deseja remover o Artista ${id, nome}?`,
            buttons: [
                {
                    label: 'sim',
                    onClick: async () => {
                        const filtro = await deletaArtista(id, nome);
                        if (filtro === '') {
                            carregarArtista();
                        }
                        else
                            filtrar();
                        toast.dark('Artista removido')
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
            <ToastContainer />
            <div className='container'>


                <div className='conteudo'>

                    <div className='caixa-busca'>

                        <input type="text" placeholder='Buscar artista por nome' value={filtro} onChange={e => setFiltro(e.target.value)} />
                        <img src='/images/procurar.png' onClick={filtrar} />
                    </div>

                    <div className='card-container'>


                        <div className='comp-card'>

                            {nomee.map(item => {
                                return (

                                    <div className='card'>
                                        <div className='acoes'>

                                            <img src='/images/botao-editar.png' onClick={() => editarArtista(item.id)} />
                                            <img src='/images/excluir.png' onClick={() => deletarArtista(item.id, item.nome)} />


                                        </div>
                                        <div>

                                            <img className='capas' src={`${API_URL}/${item.artista}`} />


                                            <div className='id'>{item.id} </div>
                                            <div className='artista'>{item.nome} </div>

                                            <div className='genero'>{item.genero}</div>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

