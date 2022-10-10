import { Router} from "express";
import { selectArtistaeGeneros } from "../repository/selectArtistasPorGenerosRepository.js";


const server = Router();


server.get('/busca', async (req, resp) => {
    try {
        const { nome } = req.query;
        
        const resposta = await selectArtistaeGeneros(nome);

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