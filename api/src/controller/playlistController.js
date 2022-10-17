import { Router } from "express";
import { Cadastrarplaylist, listarTodosPlaylist, playlistItem } from "../repository/playlistRepository.js";


const server = Router();

server.post('/criar/playlist', async (req,resp) =>{
    try{
        const playlistt = req.body;
        const x = await Cadastrarplaylist(playlistt);

        resp.send(x);
    }
    catch (err) {
 
        resp.status(404).send({
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

server.post('/playlist/item', async (req,resp) =>{
    try{
        const item = req.body;
        const x = await playlistItem(item);

        resp.send(x);
    }
    catch (err) {
 
        resp.status(404).send({
            erro: err.message
        })
           
       }
})













export default server;