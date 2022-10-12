import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import Usuario from './controller/usuarioController.js'
import cadastroArtista from './controller/cadastroArtistaController.js'
import loginAdm from './controller/loginadmController.js'
import genero from './controller/generoController.js'
import  cadastrarplaylist from './controller/playlistController.js'
import select from './controller/selectArtistasPorGenerosController.js'
import Musica from './controller/musicaController.js'
import InserirMusica from './controller/inserirMusicaController.js'



const server = express();

server.use('/storage/capaMusica', express.static('storage/capaMusica'));
server.use('/storage/musica', express.static('storage/musica'));
server.use('/storage/capaArtistas', express.static('storage/capaArtistas'));
server.use('/storage/capaGenero', express.static('storage/capaGenero'));
server.use('/storage/capaUsuario', express.static('storage/capaUsuario'));

server.use(cors());
server.use(express.json());


server.use(InserirMusica)
server.use(Usuario);
server.use(cadastroArtista);
server.use(loginAdm);
server.use(genero);
server.use(cadastrarplaylist)
server.use(select);
server.use(Musica);







server.listen(process.env.PORT, () => console.log (`API ONLINE NA PORTA ${process.env.PORT}`));