import { Router } from "express";
import { Cadastrarplaylist } from "../repository/playlistRepository.js";


const server = Router();

server.post('/Cadplaylist', async (req,resp) =>{
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











export default server;