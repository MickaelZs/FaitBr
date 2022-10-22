import { Router } from "express";
import { listarArtistaPorGenero } from "../repository/cadastroArtistaRepository.js";
import { Cadastrarplaylist, listarPlaylistPorIdUsuario, listarTodosPlaylist, playlistItem } from "../repository/playlistRepository.js";


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

export default server;