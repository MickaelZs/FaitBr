import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import cadastroUsuario from './controller/cadastroUsuarioController.js'
import cadastroArtista from './controller/cadastroArtistaController.js'

const server = express();

server.use(cors());
server.use(express.json());
server.use(cadastroUsuario);
server.use(cadastroArtista);

server.use('storage/capaArtistas', express.static('storage/capaArtistas'))


server.listen(process.env.PORT, () => console.log (`API ONLINE NA PORTA ${process.env.PORT}`));