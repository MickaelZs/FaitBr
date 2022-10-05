import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function buscarGeneroPorNome(nome){
  const resposta = await api.get(`/genero/busca?nome=${nome}`);
  return resposta.data;
}

export async function listaGeneros(){
    const resposta = await api.get('/genero');
    return resposta.data;
  }

  export async function buscarGeneroPorId(id){
    const resposta = await api.get(`/artista/${id}`)
    return resposta.data;
}