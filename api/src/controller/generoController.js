import { Router } from "express";
import { buscarGeneroPorId, buscarGeneroPorNome, ImagemGenero, listarTodosGenero } from "../repository/generoRepository.js";

import multer from 'multer';



const upload = multer({ dest: 'storage/capaGenero'})
const server = Router();


server.get('/genero/busca', async (req, resp) => {
    try {
        const { nome } = req.query;
        
        const resposta = await buscarGeneroPorNome(nome);

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




server.put('/genero/:id/capa', upload.single('capa') ,async (req, resp) => {
    try{
        if(!req.file)
        throw new Error('Escolhar a imagem do artista.');
        const {id} = req.params;
        const imagem = req.file.path;

        const resposta = await ImagemGenero(imagem, id);
        if(resposta != 1)
            throw new Error('A imagem não pode ser salva.');

        resp.status(204).send();
    }
    catch(err){
        resp.status(401).send({
            erro: err.message
        })   
    }
})

 export default server;