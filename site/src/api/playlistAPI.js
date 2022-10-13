import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function criarPlaylist(nome,idUsuario) {
    const r = await api.post('/criar/playlist',{
        playlist: nome,
        usuario: idUsuario,
        
    })
    return r.data;
}


export async function listaPlaylist(){
    const resposta = await api.get('/playlist');
    return resposta.data;
  }