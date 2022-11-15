import { Router } from "express";
import { alteraUsuario, buscarUsuarioPorId, cadastrorUsuario, imagemUsuario, listarUsuario, loginUsuario, recupeçao } from "../repository/usuarioRepository.js"
import multer from 'multer';



const server = Router();
const upload = multer({ dest: 'storage/capaUsuario'})


server.post('/cadastrousuario', async (req,resp) => {
    try {
      const usuario = req.body;
      if(!usuario.nome.trim()){
        throw new Error('Nome é obrigatória');
    }
      if(!usuario.nasc.trim()){
        throw new Error('Nascimento é obrigatória');
    }
     if(!usuario.email.trim()){
        throw new Error('Email é obrigatória');
    }
    if(!usuario.senha.trim()){
        throw new Error('Senha é obrigatória');
    }
   
      const x = await cadastrorUsuario(usuario);
      
      resp.send(x);
 
    }

    catch (err) {
 
     resp.status(401).send({
         erro: err.message
     })
        
    }
 })

 server.post('/recupera', async (req,resp) => {
    try {
      const {email} = req.body;
      const x = await recupeçao({email});

    //   const token = crypto.randomBytes(20).toString('hex');
    //   const now = new Date();
    //   now.setHours(now.getHours() + 1);

    //   await recupeçao(id, {
    //     '$set':{
    //         ds_codigo:token
    //     }
    //   })
      
      resp.send(x);
 
    }

    catch (err) {
 
     resp.status(401).send({
         erro: err.message
     })
        
    }
 }) 


server.post('/usuario/login', async (req, resp) => {
    try {
        const {email, senha} = req.body;
        
        const resposta = await loginUsuario (email, senha)
        if(!resposta){
            throw new Error('Credenciais inválidas')
        }
      
        resp.status(200).send(
        resposta
        )
        
    } 
    catch (err) {
        resp.status(401).send({
            Erro: err.message
        })
    }
})

server.get('/usuario', async (req, resp) => {
    try {
        const resposta = await listarUsuario();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/cadastroUsuario/:id/capa', upload.single('capa') ,async (req, resp) => {
    try{
        if(!req.file)
        throw new Error('Escolhar a imagem do usuario.');
        const {id} = req.params;
        const imagem = req.file.path;

        const resposta = await imagemUsuario(imagem, id);
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

server.get('/usuario', async (req, resp) => {
    try {
        const resposta = await listarUsuario();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/usuario/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await buscarUsuarioPorId(id);

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


server.put ('/usuario/:id', async (req,resp) => {
    try{
        const {id} = req.params;
        const usu = req.body;
   
        const resposta = await alteraUsuario(id, usu);
        if (resposta != 1)
            throw new Error('Usuario não pode ser alterado');

            if(!usu.nome){
                throw new Error('Nome é obrigatório');
            }
            
            if(!usu.nasc){
                    throw new Error('Nascimento é obrigatório');
                }
            
            if(!usu.email){
                    throw new Error('Email é obrigatório');
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

 export default server;