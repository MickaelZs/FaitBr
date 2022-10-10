import { con } from "./connection.js";

export async function selectArtistaeGeneros(nome) {
    const comando =

    `select tb_artistas.id_artistas,
    nm_artistas,
    ds_sobre,
    nm_genero
    from tb_artistas
    inner join tb_genero on tb_artistas.id_genero = tb_genero.id_genero
    where nm_genero = 'Funk'`

    
    const [linhas] = await con.query(comando, [`%${nome}%`]);
    return linhas;
}