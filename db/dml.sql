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


select tb_artistas.id_artistas,
nm_artistas,
ds_sobre,
nm_genero
from tb_artistas
inner join tb_genero on tb_artistas.id_genero = tb_genero.id_genero
where nm_genero = 'Funk'
or nm_genero = 'Sertanejo'
or nm_genero = 'Pagode'
or nm_genero = 'Pop'
or nm_genero = 'Forró'
or nm_genero = 'Brega Funk'
or nm_genero = 'Rock';


--musica
insert into tb_musicas (id_genero, id_artistas, nm_musica)
values (2, 1, 'o fim é triste')


update tb_musicas 
set img_imagem = 1
where id_musica = 1;


--musica
select tb_musicas.id_musica,
nm_artistas,
nm_genero
from tb_musicas
inner join tb_artistas on tb_musicas.id_artistas = tb_artistas.id_artistas
inner join tb_genero on tb_musicas.id_genero = tb_genero.id_genero;



--playlist item
select tb_playlist.id_playlist,
id_usuario,
nm_playlist,
id_musica
from tb_playlist
inner join tb_playlist_item on tb_playlist.id_playlist_item = tb_playlist_item.id_playlist_item;


select id_playlist,
id_usuario,
nm_playlist
from tb_playlist;

select 
    id_musica id,
    id_genero genero,
    id_artistas idArtista,
    blob_musica audio,
    img_imagem imagem
    from tb_musicas
    where id_artistas;



       select tb_playlist_item.id_playlist_item,
    id_usuario usuario,
    id_playlist playlist,
    nm_musicas musica,
    id_genero genero,
    id_artistas artista,
    blob_musica audio,
    img_imagem imagem
    from tb_playlist_item
    inner join tb_musicas on tb_playlist_item.id_musica = tb_musicas.id_musica
    where id_usuario = 2
    ;


     select tb_playlist_item.id_playlist_item,
   nm_playlist playlist,
   tb_playlist.id_playlist,
    id_usuario usuario,
    nm_musicas musica,
    id_genero genero,
    id_artistas artista,
    blob_musica audio,
    img_imagem imagem
    from tb_playlist_item
    inner join tb_musicas on tb_playlist_item.id_musica = tb_musicas.id_musica
    inner join tb_playlist on tb_playlist_item.id_playlist = tb_playlist.id_playlist
    where id_usuario = 2 and
     tb_playlist.id_playlist = 7
    ;