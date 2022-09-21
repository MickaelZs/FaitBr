import { con } from './connection.js'

export async function login(email, senha){
    const comando=
    `
    select  id_loginadm	  id,
            ds_email		email
    from	tb_loginadm
    where	ds_email   = ?
    and	    ds_senha   = ?
    `
    const [linha] = await con.query(comando, [email, senha] )
    return linha[0];
}

