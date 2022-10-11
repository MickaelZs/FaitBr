import { con } from "./connection.js";

export async function cadastrarMusica(musica){
    const comando = `insert into tb_musicas (id_genero, id_artistas, nm_musica)
    values (?,?,?)`

    const [resposta] = await con.query(comando,[musica.genero,musica.artistas,musica.nome]);
    artistas.id = resposta.insertId;

    return artistas;
}