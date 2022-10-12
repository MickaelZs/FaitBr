import { con } from "./connection.js";

export async function alterarMusica(musica, id){
    const comando = `
    update tb_musicas 
    set blob_musica = ?
    where id_musica = ?;`;

    const [resposta] = await con.query(comando,[musica, id]);
    return resposta.affectedRows;
}