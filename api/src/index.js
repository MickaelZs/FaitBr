import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import cadastroUsuario from './controller/cadastroUsuarioController.js'
import cadastroArtista from './controller/cadastroArtistaController.js'
import loginAdm from './controller/loginadmController.js'

const server = express();
server.use('storage/capaArtistas', express.static('storage/capaArtistas'))
server.use(cors());
server.use(express.json());
server.use(cadastroUsuario);
server.use(cadastroArtista);
server.use(loginAdm);





server.listen(process.env.PORT, () => console.log (`API ONLINE NA PORTA ${process.env.PORT}`));