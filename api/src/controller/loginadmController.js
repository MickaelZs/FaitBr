import {login} from '../repository/loginadmRepository'

import { Router  } from "express"
const server = Router();

server.post('/adm/login', async (req, resp) => {
    try {
        const {email, senha} = req.body;
        
        const resposta = await login (email, senha)
        if(!resposta){
            throw new Error('Credenciais inválidas')
        }

        resp.status(200).send(
        resposta
        )
        
    } 
    catch (err) {
        resp.status(401).send({
            Erro: err.message
        })
    }
})
