import { Router } from "express";
import { buscarGeneroPorId, listarTodosGenero } from "../repository/generoRepository.js";


const server = Router();

server.get('/genero', async (req, resp) => {
    try {
        const resposta = await listarTodosGenero();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/genero/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await buscarGeneroPorId(id);

        if (!resposta)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

 export default server;