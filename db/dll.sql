create database fitbr;
drop database fitbr;

use fitbr;

select tb_artistas.id_artistas,
nm_artistas,
ds_sobre,
nm_genero
from tb_artistas
inner join tb_genero on tb_artistas.id_genero = tb_genero.id_genero;

select tb_playlist_item.id_playlist_item,
nm_playlist,
id_musica
from tb_playlist_item
inner join tb_playlist on tb_playlist_item.id_playlist = tb_playlist.id_playlist;

select * from tb_usuario;
select * from tb_loginUsuario;
select * from tb_loginadm;
select * from tb_artistas;
select * from tb_genero;
select * from tb_musicas;
select * from tb_playlist;
select * from tb_playlist_item;

create table tb_usuario(
id_usuario int primary key auto_increment,
nm_nome varchar(200),
dt_nasc datetime,
ds_email varchar(200),
ds_senha varchar(200),
img_imagem varchar(200)
);

insert into tb_usuario (nm_nome,dt_nasc,ds_email, ds_senha)
values ('mickael','2005-05-05', 'abc', 123 );


create table tb_loginadm (
id_adm int primary key auto_increment,
ds_email varchar (200),
ds_senha varchar (200)
);

insert into tb_loginadm (ds_email, ds_senha)
values ( 'adm', 123 );

create table tb_genero(
id_genero int primary key auto_increment,
nm_genero varchar (100),
img_genero varchar(200)
);

insert into tb_genero (nm_genero)
values ( 'Funk');
insert into tb_genero (nm_genero)
values ( 'Sertanejo');
insert into tb_genero (nm_genero)
values ( 'Trap');
insert into tb_genero (nm_genero)
values ( 'Pagode');
insert into tb_genero (nm_genero)
values ( 'Pop');
insert into tb_genero (nm_genero)
values ( 'Forró');
insert into tb_genero (nm_genero)
values ( 'Brega funk');
insert into tb_genero (nm_genero)
values ( 'Rock');


create table tb_artistas(
id_artistas int primary key auto_increment,
id_genero int,
nm_artistas varchar(200),
ds_genero varchar(200),
ds_sobre varchar(200),
img_artista varchar(200),
foreign key (id_genero) references tb_genero (id_genero)
);


create table tb_musicas(
id_musica int primary key auto_increment,
id_genero int,
id_artistas int,
nm_musicas varchar(200),
blob_musica varchar(200),
img_imagem varchar(200),
foreign key (id_artistas) references tb_artistas (id_artistas),
foreign key (id_genero) references tb_genero (id_genero)
);




create table tb_playlist(
id_playlist int primary key auto_increment,
id_usuario int,
nm_playlist varchar(100),
foreign key (id_usuario) references tb_usuario (id_usuario)
);



create table tb_playlist_item(
id_playlist_item int primary key auto_increment,
id_playlist int,
id_musica int,
foreign key (id_playlist) references tb_playlist (id_playlist),
foreign key (id_musica) references tb_musicas (id_musica)
);

create table tb_usuario_musica_favorita(
id_usuario_musica_favorita  int primary key auto_increment,
id_usuario int, 
id_musica int,
foreign key (id_usuario) references tb_usuario(id_usuario),
foreign key(id_musica) references tb_musicas(id_musica)
);


create table tb_usuario_artista_seguido(
id_usuario_artista_seguido  int primary key auto_increment,
id_usuario int, 
id_artista int,
foreign key (id_usuario) references tb_usuario(id_usuario),
foreign key(id_musica) references tb_artista(id_musica)
);