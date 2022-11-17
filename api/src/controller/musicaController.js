import { Router} from "express";
import multer from 'multer';

import { alteraMusica, alterarImagemMusica, buscarMusicaPorNome, cadastrarMusica, deletaCurtida, deletaMusica, deletarPlaylistItem, deletarUsuarioMusicaFavorita, listarArtistaPorMusica, listarcurtidaPorIdUsuario, listarMusicaeArtista, listarMusicaPorId, MusicaFavorita } from "../repository/musicaRepository.js";


const server = Router();
const upload = multer({ dest: 'storage/capaMusica'})

server.get('/musica/busca', async (req, resp) => {
    try {
        const { nome } = req.query;
        
        const resposta = await buscarMusicaPorNome(nome);

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

server.post('/cadastramusica' , async(req, resp) => {

    try{
        const musica = req.body;
        if(!musica.genero.trim()){
            throw new Error('Genero é obrigatório');
        }
        if(!musica.artistas.trim()){
            throw new Error('Artista é obrigatório');
        }
        if(!musica.nome.trim()){
            throw new Error('Nome da musica é obrigatório');
        }
        const x = await cadastrarMusica(musica);

        resp.send(x);
    }
    catch (err){
        resp.status(401).send({
            erro: err.message
        })   
    }
})


server.post('/curtir/:id/musica' , async(req, resp) => {

    try{
        const idUsuario = Number(req.params.id);
        const musica = req.body;
       
        const x = await MusicaFavorita(idUsuario,musica);

        resp.send(x);
    }
    catch (err){
        resp.status(401).send({
            erro: err.message
        })   
    }
})

server.get('/musica/:id/curtidas', async (req, resp) => {
    try {
        const idUsuario = Number(req.params.id);
        
        const resposta = await listarcurtidaPorIdUsuario(idUsuario);

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


server.delete ('/curtida/:id',async (req,resp) => {
    try{

        const { id } = req.params;
      
        const resposta = await deletaCurtida(id)
       
        resp.status(200).send();
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
    
        await deletarUsuarioMusicaFavorita(id);
        await deletarPlaylistItem(id);
        await deletaMusica(id);
        
        resp.status(200).send();
    }

    catch (err){
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