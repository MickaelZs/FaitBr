import { ToastContainer, toast } from 'react-toastify';
import './index.scss'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Menu from '../../components/menu'
import { listaArtista } from '../../api/cadastroArtistaAPI'
import { listaGeneros } from '../../api/generoAPI'
import storage from 'local-storage'

import { alterarMusica, buscarMusicaPorId, cadastraMusica, enviarArquivoMusica, enviarImagemMusica, inserirImagemMusica, inserirMusica } from '../../api/musicaAPI'

import { API_URL } from '../../api/config';


export default function Cadastromsc(){
    const [nome,setNome] = useState('')
    const [artista, setArtista] = useState([]);
    const [idArtista,setIdArtista] = useState(0)
    const [genero,setGenero] = useState([])
    const [newArtista, setNewArtista] = useState([]);
    const [idGenero,setIdGenero] = useState ('')
    const [musica,setMusica] = useState ('')
    const [imagem,setImagem] = useState ('')
    const [id,setId] = useState(0)

    const { idParam } = useParams();

    async function carregarMusica (){
        const resposta = await buscarMusicaPorId(idParam);
        setId(resposta[0].id) 
        setNome(resposta[0].nome)
        setIdGenero(resposta[0].genero)
        setNewArtista(resposta[0].artista)
        setImagem(resposta[0].imagem)
        setMusica(resposta[0].musica)
    }

    async function carregarArtista(){
        const resp = await listaArtista()
        setNewArtista(resp)
    }

    async function carregarGeneros(){
        const resp = await listaGeneros()
        setGenero(resp)
    }

    function escolherImagem() {
        document.getElementById('imagemCapa').click();
    }

    function escolherMusica() {
        document.getElementById('musica').click();
    }

    function mostrarImagem(imagem){
        
        if (typeof (imagem) == 'object') {
            return URL.createObjectURL(imagem);
        }
        else {
                
                return `${API_URL}/${imagem}`
        }
    }

    function mostrarMusica(musica){
        
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
        if (idParam){
            carregarMusica()
            }
                
       
    }, [])


    

    async function salvarClick(){
        try{ 
            if (!imagem){
                throw new Error('escolha a imagem da musica');
            }

            if (!musica){
                throw new Error('escolha a MUSICA');
            }

            if(id === 0){
                const NovaMusica = await cadastraMusica (nome,idGenero,idArtista);
                await inserirImagemMusica(NovaMusica.id, imagem);
                await inserirMusica (NovaMusica.id, musica);
                setId(NovaMusica.id) 

                toast.dark('Nova musica cadastrada');
            }
            else{
                await alterarMusica(id, idGenero, idArtista, nome);
                if(typeof(imagem) == 'object'){
                    await inserirImagemMusica(id, imagem)
                    await inserirMusica(id, musica)

                    

                    await enviarImagemMusica(id, imagem)
                    await enviarArquivoMusica(id, musica);

                }
                toast.dark(' Musica alterada com sucesso');
            }
            }
 
        catch (err){
                if(err.response)
                toast.error(err.response.data.erro)
                else
                toast.error(err.message);
            }

            console.log(salvarClick)
        }




    return(

        <main className='pagina-cadastro-musica'>
            <ToastContainer/>
            <Menu/>
        <section className='faixa-cadastro'>
            <div className='margin-cadastro'>
                <div className='div1-cadastro'>
                    <p className='p'>
                        Adicionar capa
                    </p>
                    <div className='border-image' onClick={escolherImagem}>

                    {!imagem &&

                    <img src='/images/image-bottom212.svg' width='170px'/>
                    }

                    {imagem &&  

                    <img className='imagem' src={mostrarImagem(imagem)} />

                    }

                    <input type='file' id='imagemCapa' onChange={e => setImagem(e.target.files[0])} ></input>
                    </div>
                </div>
                <div className='div2-cadastro'>
                    <div className='div-input'>
                    <select value={idArtista} onChange={e => setIdArtista(e.target.value)}>
                        <option selected disabled hidden> artista </option>
                        {newArtista.map((item) => <option value={item.id}>{item.nome}</option>)}
                       
                    </select>
                    </div>
                   
                    <div className='div-input'  onClick={escolherMusica}>

                    {musica &&  

                    <img className='musica' src={mostrarMusica(musica)} />

                    }

                    <input type='file' id='musica' onChange={e => setMusica(e.target.files[0])} ></input> 
                    
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
                    <input type="text" value={nome}  onChange={e => setNome(e.target.value)} required></input>
                    <label>Senha</label>
                    </div>
                    
                    
                    <button className='botao' onClick={salvarClick} >{id === 0 ? 'cadastrar' : 'Alterar'}</button>
                </div>
            </div>

        </section>
    </main>
    )
}