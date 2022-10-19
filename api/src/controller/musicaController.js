import { Router} from "express";
import multer from 'multer';

import { alteraMusica, alterarImagemMusica,alterarArquivoMusica, cadastrarMusica, deletaMusica, listarArtistaPorMusica, listarMusicaeArtista, listarMusicaPorId } from "../repository/musicaRepository.js";


const server = Router();
const upload = multer({ dest: 'storage/capaMusica'})



server.post('/cadastramusica' , async(req, resp) => {

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

server.delete ('/musica/:id',async (req,resp) => {
    try{

        const { id } = req.params;
    
        const resposta = await deletaMusica(id);
        resp.status(200).send();
    }

    catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }

})

server.put('/cadastroMusica/:id/musica', upload.single('musica') ,async (req, resp) => {
    try{
        if(!req.file)
        throw new Error('Escolha o arquivo da musica.');
        const {id} = req.params;
        const musica = req.file.path;

        const resposta = await alterarArquivoMusica(musica, id);
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

server.put ('/musica/:id', async (req,resp) => {
    try{
        const {id} = req.params;
        const musica = req.body;
   
        const resposta = await alteraMusica(id, musica);
        if (resposta != 1)
            throw new Error('Musica não pode ser alterado');

            if(!musica.genero){
                throw new Error('Genero é obrigatório');
            }
            
            if(!musica.artista){
                    throw new Error('Artista é obrigatório');
                }
            
            if(!musica.nome){
                    throw new Error('Nome é obrigatório');
                }
       
        else
            resp.status(204).send();
        
    }

    catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }
})


server.get('/artista/musica/:id', async (req, resp) => {
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

server.get('/musicas/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await listarMusicaPorId(id);

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


server.get('/musica', async (req, resp) => {
    try {
        const resposta = await listarMusicaeArtista();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})




export default server;