import { Router } from "express";
import { Cadastrarplaylist, deletaPlaylist, deletaPlaylist2, listarPlaylistItemPorIdUsuario, listarPlaylistPorIdUsuario, listarTodasImagemPlaylist, listarTodosPlaylist, playlistItem } from "../repository/playlistRepository.js";


const server = Router();

server.post('/criar/:id/playlist', async (req,resp) =>{
    try{
        const idUsuario = req.params.id;
        const playlist = req.body;
        const x = await Cadastrarplaylist(idUsuario,playlist);

        resp.send(x);
    }
    catch (err) {
 
        resp.status(404).send({
            erro: err.message
        })
           
       }
})

server.get('/usuario/:id/playlist', async (req, resp) => {
    try {
        const idUsuario = Number(req.params.id);
        
        const resposta = await listarPlaylistPorIdUsuario(idUsuario);

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

server.get('/playlist', async (req, resp) => {
    try {
        const resposta = await listarTodosPlaylist();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.post('/playlist/:id/item', async (req,resp) =>{
    try{
        
        const idPlaylist = req.params.id;
        const item = req.body;
        const x = await playlistItem(idPlaylist,item);

        resp.send(x);
    }
    catch (err) {
 
        resp.status(404).send({
            erro: err.message
        })
           
       }
})

server.get('/usuario/:id/playlist/item', async (req, resp) => {
    try {
        const idPlaylist = Number(req.params.id);
       
        
        const resposta = await listarPlaylistItemPorIdUsuario(idPlaylist);

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

server.delete ('/playlist/:id',async (req,resp) => {
    try{

        const { id } = req.params;
        const res = await deletaPlaylist2(id);
        const resposta = await deletaPlaylist(id);
        
        resp.status(200).send();
    }

    catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }

})

server.get('/usuario/:id/playlist/imagem', async (req, resp) => {
    try {
        const idUsuario = Number(req.params.id);
        
        const resposta = await listarTodasImagemPlaylist(idUsuario);

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