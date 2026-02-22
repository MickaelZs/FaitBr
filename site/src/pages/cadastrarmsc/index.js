import { ToastContainer, toast } from 'react-toastify';
import './index.scss'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Menu from '../../components/menu'
import { listaArtista } from '../../api/cadastroArtistaAPI'
import { listaGeneros } from '../../api/generoAPI'
import Storage from 'local-storage'

import { alterarMusica, buscarMusicaPorId, cadastraMusica, enviarArquivoMusica, enviarImagemMusica, inserirImagemMusica, inserirMusica } from '../../api/musicaAPI'

import { API_URL } from '../../api/config';


export default function Cadastromsc() {
    const [nome, setNome] = useState('')
    const [artista, setArtista] = useState([]);
    const [idArtista, setIdArtista] = useState(0)
    const [genero, setGenero] = useState([])
    const [newArtista, setNewArtista] = useState([]);
    const [idGenero, setIdGenero] = useState('')
    const [musica, setMusica] = useState('')
    const [imagem, setImagem] = useState('')
    const [id, setId] = useState(0)
    const navigate = useNavigate()

    const { idParam } = useParams();

    async function carregarMusica() {
        const resposta = await buscarMusicaPorId(idParam);
        setId(resposta[0].id)
        setNome(resposta[0].nome)
        setIdGenero(resposta[0].genero)
        setIdArtista(resposta[0].artista)
        setImagem(resposta[0].imagem)
        setMusica(resposta[0].musica)
    }

    async function carregarArtista() {
        const resp = await listaArtista()
        setArtista(resp)
    }

    async function carregarGeneros() {
        const resp = await listaGeneros()
        setGenero(resp)
    }

    function escolherImagem() {
        document.getElementById('imagemCapa').click();
    }

    function escolherMusica() {
        document.getElementById('musica').click();
    }

    function mostrarImagem(imagem) {

        if (typeof (imagem) == 'object') {
            return URL.createObjectURL(imagem);
        }
        else {

            return `${API_URL}/${imagem}`
        }
    }

    function mostrarMusica(musica) {

        if (typeof (musica) == 'object') {
            return URL.createObjectURL(musica);
        }
        else {

            return `${API_URL}/${musica}`
        }
    }



    useEffect(() => {
        carregarArtista()
        carregarGeneros()
        if (idParam) {
            carregarMusica()
        }
        if(!Storage('adm-logado')){
            navigate('/LoginAdm');
        }


    }, [])




    async function salvarClick() {
        try {
            if (!imagem) {
                throw new Error('escolha a imagem da musica');
            }

            if (!musica) {
                throw new Error('escolha a MUSICA');
            }

            if (id === 0) {
                const NovaMusica = await cadastraMusica(nome, idGenero, idArtista);
                await inserirImagemMusica(NovaMusica.id, imagem);
                await inserirMusica(NovaMusica.id, musica);
                setId(NovaMusica.id)

                toast.dark('Nova musica cadastrada');
            }
            else {
                await alterarMusica(id, nome, idGenero, idArtista);
                if (typeof (imagem) == 'object') {
                    await inserirImagemMusica(id, imagem)
                    await inserirMusica(id, musica)



                    await enviarImagemMusica(id, imagem)
                    await enviarArquivoMusica(id, musica);

                }
                toast.dark(' Musica alterada com sucesso');
            }
        }

        catch (err) {
            if (err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message);
        }

        console.log(salvarClick)
    }


    function novoClick() {
        setIdArtista(0);
        setMusica();
        setIdGenero(0);
        setNome('');
        setImagem();

    }




    return (

        <main className='pagina-cadastro-musica'>
            <ToastContainer />
            <Menu />
            <section className='faixa-cadastro1'>
                <div className='margin-cadastro-musica'>
                    <div className='div1-cadastro'>
                        <p className='p'>
                            Adicionar capa
                        </p>
                        <div className='border-image' onClick={escolherImagem}>

                            {!imagem &&

                                <img src='/images/image-bottom212.svg' width='120px' />
                            }

                            {imagem &&

                                <img className='border-image' src={mostrarImagem(imagem)} />

                            }

                            <input type='file' id='imagemCapa' onChange={e => setImagem(e.target.files[0])} ></input>
                        </div>
                    </div>
                    <div className='div2-cadastro'>
                        <div className='div-input'>
                            <select value={idArtista} onChange={e => setIdArtista(e.target.value)}>
                                <option selected disabled hidden> artista </option>
                                {artista.map((item) => <option value={item.id}>{item.nome}</option>)}

                            </select>
                        </div>

                        <div className='div-input' onClick={escolherMusica}>

                            {musica &&

                                <img className='musica' src={mostrarMusica(musica)} />

                            }

                            <input type='file' id='musica' className='input-file' onChange={e => setMusica(e.target.files[0])} ></input>

                        </div>

                        <div className='div-input'>
                            <select value={idGenero} onChange={e => setIdGenero(e.target.value)}>
                                <option selected disabled hidden> generos </option>
                                {genero.map((item) =>
                                    <option value={item.id}> {item.nome} </option>
                                )}
                            </select>
                        </div>
                        <div className='div-input'>
                             <div className='label-float'>
                                    <input type="text" placeholder=" " value={nome} onChange={e => setNome(e.target.value)} />
                                    <label>Artista</label>
                                </div>
                        </div>

                        <div className='botoes'>
                                
                            <div>
                                <button className='botao' onClick={salvarClick} >{id === 0 ? 'cadastrar' : 'Alterar'}</button>
                            </div>

                            <div>
                                <button className='botao' onClick={novoClick}>novo</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}