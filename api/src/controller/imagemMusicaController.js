import { Router} from "express";
import multer from 'multer';

import { alterarImagemMusica} from "../repository/musicaRepository.js";

const server = Router();
const upload = multer({ dest: 'storage/capaMusica'})


server.put('/cadastraMusica/capa/:id', upload.single('capa') ,async (req, resp) => {
    try{
        if(!req.file)
        throw new Error('Escolha a imagem.');
        const {id} = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagemMusica(imagem, id);
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
