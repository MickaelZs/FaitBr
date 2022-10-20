import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function cadastraMusica(nome,idGenero,idArtista) {
    const r = await api.post('/cadastramusica',{
        nome: nome,
        genero: idGenero,
        artistas: idArtista, 
        
    })
    return r.data;
}


export async function enviarImagemMusica(id, imagem){
    const formData = new FormData ();
    formData.append('capa', imagem);

    const resposta = await api.put(`/cadastraMusica/capa/${id}`, formData,{
        headers:{
            "Content-type": "multipart/form-data"
        },
    });

    return resposta.status;
}

export async function inserirMusica(id, musica){
    const formData = new FormData ();
    formData.append('musica', musica);

    const resposta = await api.put(`/cadastroMusica/${id}/musica`, formData,{
        headers:{
            "Content-type": "multipart/form-data"
        },
    });

    return resposta.status;
}

export async function alterarMusica(id, idGenero, idArtista, nome ) {
    const resposta = await api.put(`/musica/${id}`, {
         genero: idGenero,
         artista: idArtista,
         nome: nome
     })
     return resposta.data;
 }


export async function listaMusicaArtista(){
    const resposta = await api.get('/musica');
    return resposta.data;
  }

  export async function buscarArtistaPorMusicaId(id){
    const resposta = await api.get(`/artista/musica/${id}`)
    return resposta.data;
}  


export async function buscarMusicaPorId(id){
    const resposta = await api.get(`/musicas/${id}`)
    return resposta.data;
} 

export async function enviarArquivoMusica(id, musica){
    const formData = new FormData ();
    formData.append('musica', musica);

    const resposta = await api.put(`/cadastroMusica/${id}/musica`, formData,{
        headers:{
            "Content-type": "multipart/form-data"
        },
    });

    return resposta.status;
}

export async function deletarrMusica(id){
    const resposta = await api.delete(`/musica/${id}`);
    return resposta.status;
  }
