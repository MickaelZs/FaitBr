import axios from "axios"

const api = axios.create({
    baseURL:'http://localhost:5045'
})


export async function login(email, senha){
    const a = await api.post('/adm/login',{
        email: email,
        senha: senha
    });
    return a.data;
}