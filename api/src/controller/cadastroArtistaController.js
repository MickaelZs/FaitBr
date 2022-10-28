import { Router} from "express";
import { alteraArtista, alterarImagem, artistaSeguidosPorId, buscarImagem, buscarPorId, buscarPorNome, cadastrorArtista, deletaArtista, ListaPorId, listarArtistaPorGenero, listarTodosArtista, seguirArtista } from "../repository/cadastroArtistaRepository.js"
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
        throw new Error('Escolha a imagem do artista.');
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


server.get('/genero/artista/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await listarArtistaPorGenero(id);

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

server.delete ('/artista/:id',async (req,resp) => {
    try{

        const { id } = req.params;
    
        const resposta = await deletaArtista(id);
        resp.status(200).send();
    }

    catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }

})



server.get('/artista/busca', async (req, resp) => {
    try {
        const { nome } = req.query;
        
        const resposta = await buscarPorNome(nome);

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

server.get('/art/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await ListaPorId(id);

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







server.put ('/artista/:id', async (req,resp) => {
    try{
        const {id} = req.params;
        const music = req.body;
   
        const resposta = await alteraArtista(id, music);
        if (resposta != 1)
            throw new Error('Artistas não pode ser alterado');

            if(!music.genero){
                throw new Error('Genero é obrigatório');
            }
            
            if(!music.nome){
                    throw new Error('Nome é obrigatório');
                }
            
            if(!music.sobre){
                    throw new Error('Sobre é obrigatório');
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

server.post('/seguir/:id/artista' , async(req, resp) => {

    try{
        const idUsuario = Number(req.params.id)
        const artista = req.body;
        const x = await seguirArtista(idUsuario,artista);

        if(!artista.artista){
            throw new Error('coloque um artista');
        }
        else{
            resp.send(x);
        }
    }
    catch (err){
        resp.status(401).send({
            erro: err.message
        })   
    }
})


server.get('/seguido/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await artistaSeguidosPorId(id);

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