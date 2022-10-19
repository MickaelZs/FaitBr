import { con } from "./connection.js";

export async function alterarImagemMusica(imagem, id){
    const comando = `
    update tb_musicas 
    set img_musica = ?
    where id_musica = ?;`

    const [resposta] = await con.query(comando,[imagem, id]);
    return resposta.affectedRows;
}
