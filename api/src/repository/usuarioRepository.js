import { con } from "./connection.js";

export async function cadastrorUsuario(usuario) {
    const comando = `insert into tb_usuario(nm_nome, dt_nasc, ds_email, ds_senha)
    values ( ?, ?, ?, ? );`

    const [resposta] = await con.query(comando,[usuario.nome,usuario.nasc,usuario.email,usuario.senha]);
    usuario.id = resposta.insertId;

    return usuario;
}

export async function recupeçao(email) {
    const comando = `insert into tb_usuario(ds_email)
    values ( ? );`

    const [resposta] = await con.query(comando,[email]);
    email.id = resposta.insertId;

    return email;
}

export async function loginUsuario (email, senha){
    const comando=
    `
    select  id_usuario	  id,
            ds_email	email
    from	tb_usuario
    where	ds_email   = ?
    and	    ds_senha   = ? `
    const [linha] = await con.query(comando, [email, senha] )
    return linha[0];
}

export async function imagemUsuario(imagem, id){
    const comando = `UPDATE tb_usuario
                    SET img_imagem = ?
                    WHERE id_usuario = ?`;

    const [resposta] = await con.query(comando,[imagem, id]);
    return resposta.affectedRows;
}

export async function listarUsuario() {
    const comando =
    `select 
    id_usuario id,
    nm_nome nome,
    dt_nasc nascimento,
    ds_email email,
    ds_senha  senha
    from tb_usuario;`
    
    const [linhas] =  await con.query(comando);
    return linhas;
}

export async function buscarUsuarioPorId(id) {
    const comando =

    `select 
    id_usuario id,
    nm_nome nome,
    dt_nasc nascimento,
    ds_email email,
    ds_senha senha,
    img_imagem imagem
    from tb_usuario
    where id_usuario = ?`

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}


export  async function alteraUsuario(id, usuario){
    const comando = 
        `update tb_usuario
        set	nm_nome  = ?,
            dt_nasc	= ?,
            ds_email = ?,
            ds_senha	= ?
        where id_usuario = ?`
const [resposta] = await con.query(comando,[usuario.nome,usuario.nasc,usuario.email, usuario.senha ,id ])
return resposta.affectedRows;
}

