import { Router} from "express";
import multer from 'multer';
import { cadastrarMusica } from "../repository/musicaRepository.js";


const server = Router();


server.post('/cadastraMusica' , async(req, resp) => {

    try{
        const musica = req.body;
        const x = await cadastrarMusica(musica);

        resp.send(x);
    }
    catch (err){
        resp.status(401).send({
            erro: err.message
        })   
    }
})

export default server;