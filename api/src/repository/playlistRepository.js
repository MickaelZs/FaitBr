
import { con } from "./connection.js";



export async function Cadastrarplaylist(playlist){
    const comando = 
    `insert Into tb_playlist (id_usuario,nm_playlist)
    values(?,?)`

    const [resposta] = await con.query(comando,[playlist.usuario,playlist.nome]);
    playlist.id = resposta.insertId;

    return playlist;

}

export async function listarTodosPlaylist() {
    const comando =
    `select id_playlist id,
    id_usuario usuario,
    nm_playlist playlist
    from tb_playlist;`
    
    const [linhas] = await con.query(comando);
    return linhas;
}

export async function playlistItem(item){
    const comando = 
    `insert Into tb_playlist_item (id_playlist, id_musica)
    values( ?, ?)`

    const [resposta] = await con.query(comando,[item.playlist,item.musica]);
    item.id = resposta.insertId;

    return item;

}


