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


export async function listarTodosArtista() {
    const comando =
    `select 
    id_artistas id,
    nm_artistas nome,
    ds_genero genero,
    ds_sobre sobre,
    img_artista artista
    from tb_artistas;`
    
    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarImagem() {
    const comando =
    `select
    img_artista artista
    from tb_artistas;`
    
    const [linhas] = await con.query(comando);
    return linhas;
}


export async function buscarPorId(id) {
    const comando =
        `select 
        id_artistas id,
        nm_artistas nome,
        ds_genero genero,
        ds_sobre sobre,
        img_artista artista
        from tb_artistas
        where id_artistas = ?`
        
        
    
    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}