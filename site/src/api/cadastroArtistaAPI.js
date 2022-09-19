import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function cadastroArtista(artistas, genero, sobre) {
    const r = await api.post('/cadastroArtista',{
        artistas: artistas,
        genero: genero,
        sobre: sobre,
    })
    return r.data;
}

export async function enviarImagemArtista(id, imagem){
    const formData = new FormData ();
    formData.append('capa', imagem);

    const resposta = await api.put(`/cadastroArtista/${id}/capa`, formData,{
        headers:{
            "Content-type": "multipart/form-data"
        },
    });

    return resposta.status;
}