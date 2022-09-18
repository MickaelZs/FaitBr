import { con } from "./connection.js";

export async function cadastrorArtista(artistas){
    const comando = `insert into tb_artistas(nm_artistas, ds_genero, ds_sobre)
                    values(?, ?, ?);`

    const [resposta] = await con.query(comando,[artistas.artistas,artistas.genero,artistas.sobre]);
    artistas.id = resposta.insertId;

    return artistas;
}

export async function alterarImagem(imagem, id){
    const comando = `UPDATE tb_artistas
                    SET img_artista = ?
                    WHERE id_artistas = ?`;

    const [resposta] = await con.query(comando,[imagem, id]);
    return resposta.affectedRows;
}