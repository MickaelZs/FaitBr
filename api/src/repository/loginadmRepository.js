import { con } from './connection.js'

export async function loginAdm (email, senha){
    const comando=
    `
    select  id_adm	  id,
            ds_email		email
            ds_senha		senha
    from	tb_loginadm
    where	ds_email   = ?
    and	    ds_senha   = ? `
    const [linha] = await con.query(comando, [email, senha] )
    return linha[0];
}

