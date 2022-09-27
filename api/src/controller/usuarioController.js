import { Router } from "express";
import { cadastrorUsuario, loginUsuario } from "../repository/usuarioRepository.js"

const server = Router();

server.post('/cadastrousuario', async (req,resp) => {
    try {
      const usuario = req.body;
      const x = await cadastrorUsuario(usuario);
      
      resp.send(x);
 
    }

    catch (err) {
 
     resp.status(401).send({
         erro: err.message
     })
        
    }
 })


server.get('/usuario/login', async (req, resp) => {
    try {
        
        const resposta = await loginUsuario ()
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



 export default server;