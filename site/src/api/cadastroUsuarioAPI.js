import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function listarCategorias() {
    const r = await api.post('/cadastrousuario',{
        nome: nome,
        nasc: nasc,
        email: email,
        senha: senha
    })
    return r.data;
}