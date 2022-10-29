import { API_URL } from './config';


import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})


export async function BuscarArtistaPorNome(nome){
    const resposta = await api.get(`/artista/busca?nome=${nome}`);
    return resposta.data;
  }

export async function cadastroArtista(artistas, idGenero, sobre) {
    const r = await api.post('/cadastroArtista',{
        artistas: artistas,
        genero: idGenero,
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

export async function listaArtista(){
    const resposta = await api.get('/artista');
    console.log(resposta)
    return resposta.data;
  }

  export async function buscarArtistaPorGeneroId(id){
    const resposta = await api.get(`/genero/artista/${id}`)
    return resposta.data;
}  


export async function buscarPorId(id){
    const resposta = await api.get(`/artista/${id}`)
    return resposta.data;
}

export async function listaArtistaPorId(id){
    const resposta = await api.get(`/art/${id}`)
    return resposta.data;
}

export async function buscarImagem(artista) {
    return `${api.getUri()}/${artista}`
}

export async function deletaArtista(id){
    const resposta = await api.delete(`/artista/${id}`);
    return resposta.status;
  }

export async function alterarArtista(id, artistas, idGenero, sobre ) {
   const resposta = await api.put(`/artista/${id}`, {
        nome: artistas,
        sobre: sobre,
        genero: idGenero
    })
    return resposta.data;
}

export async function seguirArtista (idUsuario, artista) {
    const r = await api.post('/seguir/' + idUsuario +'/artista',{
        artista: artista,
       
    })
    return r.data;
}

export async function seguindoArtistaPorId(id){
    const resposta = await api.get(`/seguido/${id}`)
    return resposta.data;
}