import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function selectArtistaeGeneros(nome){
    const resposta = await api.get(`/busca?nome=${nome}`);
    return resposta.data;
  }