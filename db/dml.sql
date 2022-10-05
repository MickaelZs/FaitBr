SELECT *FROM (TB_LOGINADM);



insert INTO TB_LOGINADM (DS_SENHA, DS_EMAIL)
values('1234','admin@admin.com');

select  id_loginadm	  id,
		ds_email		email
  from	tb_loginadm
 where	ds_email   = 'admin@admin.com'
   and	ds_senha   = '1234';



--listarArtista
select tb_artistas.id_artistas,
nm_artistas,
ds_sobre,
nm_genero
from tb_artistas
inner join tb_genero on tb_artistas.id_genero = tb_genero.id_genero;