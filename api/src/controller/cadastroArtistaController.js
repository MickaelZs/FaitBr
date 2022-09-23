import { Router} from "express";
import { alterarImagem, buscarImagem, cadastrorArtista, listarTodosArtista } from "../repository/cadastroArtistaRepository.js"
import multer from 'multer';


const server = Router();
const upload = multer({ dest: 'storage/capaArtistas'})

server.post('/cadastroArtista' , async(req, resp) => {

    try{
        const artistas = req.body;
        const x = await cadastrorArtista(artistas);

        resp.send(x);
    }
    catch (err){
        resp.status(401).send({
            erro: err.message
        })   
    }
})

server.put('/cadastroArtista/:id/capa', upload.single('capa') ,async (req, resp) => {
    try{
        if(!req.file)
        throw new Error('Escolhar a imagem do artista.');
        const {id} = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagem(imagem, id);
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


server.get('/artista', async (req, resp) => {
    try {
        const resposta = await listarTodosArtista();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/buscarImagemm', async (req, resp) => {
    try {
        const resposta = await buscarImagem();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.get('/artista/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await buscarPorId(id);

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