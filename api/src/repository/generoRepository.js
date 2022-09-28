import { con } from "./connection.js";


export async function listarTodosGenero() {
    const comando =
    `select 
    id_genero id,
    nm_genero nome,
    img_genero genero
    from tb_genero;`
    
    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarGeneroPorId(id) {
    const comando =
    `select 
    id_genero id,
    nm_genero nome,
    img_genero genero
    from tb_genero
    where id_genero = ?;`
        
    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

export async function ImagemGenero(imagem, id){
    const comando = `UPDATE tb_genero
                    SET img_genero = ?
                    WHERE id_artistas = ?`;

    const [resposta] = await con.query(comando,[imagem, id]);
    return resposta.affectedRows;
}


