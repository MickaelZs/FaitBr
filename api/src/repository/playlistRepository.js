
import { con } from "./connection.js";



export async function Cadastrarplaylist(playlist){
    const comando = 
    `insert Into tb_playlist (nm_playlist)
    values(?)`

    const [resposta] = await con.query(comando,[playlist.nome]);
    playlist.id = resposta.insertId;

    return playlist;

}


<<<<<<< HEAD
=======

>>>>>>> e5d0485bc4d64667e0ce8a16f272a902cff5aa59
