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


export async function listaPlaylist(){
    const resposta = await api.get('/playlist');
    return resposta.data;
  }


export async function criarPlaylistItem(idPlaylist,idMusica) {
    const r = await api.post('/playlist/item',{
        playlist: idPlaylist,
        musica: idMusica,
        
    })
    return r.data;
}  