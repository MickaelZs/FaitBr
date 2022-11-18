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

export async function listarUsuario(){
    const resposta = await api.get('/usuario');
    return resposta.data;
  }

  export async function buscarUsuarioPorId(id){
    const resposta = await api.get(`/usuario/${id}`)
    return resposta.data;
}  

export async function alteraUsuario(id, nome, nascimento, email, senha){
    const resposta = await api.put(`/usuario/${id}`, {
        nome: nome,
        nasc: nascimento,
        email: email,
        senha: senha
    })
    return resposta.data;
}

export async function enviarImagemUsuario(id, imagem){
    const formData = new FormData ();
    formData.append('capa', imagem);

    const resposta = await api.put(`/cadastroUsuario/${id}/capa`, formData,{
        headers:{
            "Content-type": "multipart/form-data"
        },
    });

    return resposta.status;
}

export async function EnviarEmail(nome, email){
    const resposta = await api.post('/enviar-email', {
        nome:nome, 
        email:email
        
    });
    return resposta.status;
}