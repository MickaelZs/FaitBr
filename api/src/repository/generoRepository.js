import { con } from "./connection.js";


export async function listarTodosGenero() {
    const comando =
    `select 
    id_genero id,
    nm_genero nome
    from tb_genero;`
    
    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarGeneroPorId(id) {
    const comando =
    `select 
    id_genero id,
    nm_genero nome
    from tb_genero
    where id_genero = ?;`
        
    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}