import { Router} from "express";
import multer from 'multer';
import { alterarImagemMusica, cadastrarMusica, listarArtistaPorMusica, listarMusicaeArtista } from "../repository/musicaRepository.js";


const server = Router();
const upload = multer({ dest: 'storage/capaMusica'})


server.post('/cadastra/musica' , async(req, resp) => {

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



server.put('/cadastraMusica/:id/capa', upload.single('capa') ,async (req, resp) => {
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



server.get('/artista/musica:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await listarArtistaPorMusica(id);

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