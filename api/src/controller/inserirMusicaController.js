import { Router} from "express";
import multer from 'multer';
import { alterarMusica } from "../repository/inserirMusicaRepository.js";



const server = Router();
const upload = multer({ dest: 'storage/musica'})





server.put('/cadastroMusica/:id/musica', upload.single('musica') ,async (req, resp) => {
    try{
        if(!req.file)
        throw new Error('Escolha a musica.');
        const {id} = req.params;
        const musica = req.file.path;

        const resposta = await alterarMusica(musica, id);
        if(resposta != 1)
            throw new Error('A musica não pode ser salva.');

        resp.status(204).send();
    }
    catch(err){
        resp.status(401).send({
            erro: err.message
        })   
    }
})

export default server;