
import { con } from "./connection.js";



export async function Cadastrarplaylist(idUsuario,playlist){
    const comando = 
    `insert Into tb_playlist (id_usuario,nm_playlist)
    values(?,?)`

    const [resposta] = await con.query(comando,[idUsuario,playlist.nome]);
    playlist.id = resposta.insertId;

    return playlist;

}


export async function listarPlaylistPorIdUsuario(idUsuario) {
    const comando =
    `select id_playlist id,
    id_usuario usuario,
    nm_playlist  nome
    from tb_playlist
    where id_usuario = ?;`
    
    const [linhas] = await con.query(comando, [idUsuario]);
    return linhas;
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

export async function playlistItem(idPlaylist,item){
    
    const comando = 
    `insert Into tb_playlist_item (id_playlist, id_musica)
    values( ?, ?)`

    const [resposta] = await con.query(comando,[idPlaylist,item.musica]);
    item.id = resposta.insertId;

    return item;

}


export async function listarPlaylistItemPorIdUsuario(idUsuario) {
    const comando =
    `select tb_playlist_item.id_playlist_item,
    id_usuario usuario,
    nm_playlist playlist,
    nm_musicas musica,
    id_genero genero,
    id_artistas artista,
    blob_musica audio,
    img_imagem imagem
    from tb_playlist_item
    inner join tb_musicas on tb_playlist_item.id_musica = tb_musicas.id_musica
    inner join tb_playlist on tb_playlist_item.id_playlist = tb_playlist.id_playlist
    where id_usuario = ?
    ;`
    
    const [linhas] = await con.query(comando, [idUsuario]);
    return linhas;
}




export async function deletaPlaylist (id){
    const comando = 
    `delete from tb_playlist
    where id_playlist = ? `;
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}


export async function deletaPlaylist2 (id){
    const comando = 
    `delete from tb_playlist_item
    where id_playlist = ? `;
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

