import './index.scss'
import { listaMusicaArtista } from "../../api/musicaAPI"
import { useEffect, useState } from 'react'
import { API_URL } from '../../api/config.js'
import { PlaylistItem } from '../../api/playlistAPI'
import { ToastContainer, toast } from 'react-toastify';
import Storage from 'local-storage'
import { useParams } from 'react-router-dom'


export default function Index(){
    const {idParam} = useParams()

    const [musicaa,setMusicaa] = useState([])


    async function salvar (){
  try{
    let id = Storage('Playlist').id;
    console.log(musicaa)
    console.log(id)
    const resp = await PlaylistItem(musicaa,id)
    toast.dark('Musica selecionada')

 
    
   

  }
  catch(err){
    if(err.response)
                toast.error(err.response.data.erro)
                else
                toast.error(err.message);

  }
   

  }
   
    

    async function carregarMusica(){
        const resp = await listaMusicaArtista(idParam)
        setMusicaa(resp)
    }

    useEffect(() =>{
        carregarMusica();

    },[])

    

    return(
        <div className='add'>
            <ToastContainer/>
            
            {musicaa.map( item => 
            <div className='card'>
               
               
                <img src={`${API_URL}/${item.imagem}`} alt="" />
               <h1> {item.musica}</h1>
                <h2> {item.artista}</h2>
                <h2> {item.genero}</h2>
                <audio controls  src={`${API_URL}/${item.audio}`}></audio>
                <button onClick={() => salvar (item.id)}>Adicionar</button>
                
                </div>
           
                
                
            )}
        </div>
    )
}



