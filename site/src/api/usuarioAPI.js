import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function cadastroUsuario(nome, nasc, email, senha) {
    const r = await api.post('/cadastrousuario',{
        nome: nome,
        nasc: nasc,
        email: email,
        senha: senha,
    })
    return r.data;
}

export async function loginUsuario(email, senha){
    const a = await api.post('/usuario/login',{
        email: email,
        senha: senha
    });
    return a.data;
}