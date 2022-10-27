import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function criarPlaylist(nome,idUsuario) {
    const r = await api.post('/criar/' + idUsuario +'/playlist',{
        nome: nome,
        
    })
    return r.data;
}

export async function listarPlaylistPorIdUsuarioo(idUsuario){
    const resposta = await api.get('/usuario/' + idUsuario + '/playlist');
    return resposta.data;
  }


  export async function listarPlaylistItemUsuarioo(idUsuario){
    const resposta = await api.get('/musica/' + idUsuario + '/curtidas');
    return resposta.data;
  }


export async function listaPlaylist(){
    const resposta = await api.get('/playlist');
    return resposta.data;
  }

  export async function PlaylistItem(musicaa,idPlaylist) {
    const r = await api.post('/playlist/' + idPlaylist +'/item',{
        musica: musicaa,
        
    })
    return r.data;
}  

export async function DeletaPlaylist(id){
    const resposta = await api.delete(`/playlist/${id}`);
    return resposta.status;
  }
