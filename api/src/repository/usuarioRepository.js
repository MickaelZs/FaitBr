import { con } from "./connection.js";

export async function cadastrorUsuario(usuario) {
    const comando = `insert into tb_usuario(nm_nome, dt_nasc, ds_email, ds_senha)
    values ( ?, ?, ?, ? );`

    const [resposta] = await con.query(comando,[usuario.nome,usuario.nasc,usuario.email,usuario.senha]);
    usuario.id = resposta.insertId;

    return usuario;
}

export async function loginUsuario (email, senha){
    const comando=
    `
    select  id_usuario	  id,
            ds_email		email
    from	tb_usuario
    where	ds_email   = ?
    and	    ds_senha   = ? `
    const [linha] = await con.query(comando, [email, senha] )
    return linha[0];
}