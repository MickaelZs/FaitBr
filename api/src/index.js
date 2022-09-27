import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import Usuario from './controller/usuarioController.js'
import cadastroArtista from './controller/cadastroArtistaController.js'
import loginAdm from './controller/loginadmController.js'
import genero from './controller/generoController.js'


const server = express();
server.use('/storage/capaArtistas', express.static('storage/capaArtistas'));
server.use(cors());
server.use(express.json());
server.use(Usuario);
server.use(cadastroArtista);
server.use(loginAdm);
server.use(genero);






server.listen(process.env.PORT, () => console.log (`API ONLINE NA PORTA ${process.env.PORT}`));