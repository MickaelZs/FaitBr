import { Router } from "express";
import { cadastrorUsuario } from "../repository/cadastroUsuarioRepository.js"

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

 export default server;