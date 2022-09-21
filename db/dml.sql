SELECT *FROM (TB_LOGINADM);



insert INTO TB_LOGINADM (DS_SENHA, DS_EMAIL)
values('1234','admin@admin.com');

select  id_loginadm	  id,
		ds_email		email
  from	tb_loginadm
 where	ds_email   = 'admin@admin.com'
   and	ds_senha   = '1234';