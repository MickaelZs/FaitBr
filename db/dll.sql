create database fitbr;

use fitbr;

select * from tb_usuario;
select * from tb_loginadm;
select * from tb_artistas;
select * from tb_musicas;
select * from tb_usuario_artistas;
select * from tb_usuario_favorito;
select * from tb_playlist;
select * from tb_playlist_item;



drop table tb_usuario;

create table tb_loginadm (
id_adm int primary key auto_increment,
ds_email varchar (200),
ds_senha varchar (200)
);0

insert into tb_loginadm (ds_email, ds_senha)
values ( 'mickaelcosta@gmail.com', 123 );

create table tb_usuario(
id_usuario int primary key auto_increment,
nm_nome varchar(200),
dt_nasc datetime,
ds_email varchar(200),
ds_senha varchar(200)
);
select * from tb_usuario;

insert into tb_usuario (nm_nome, dt_nasc, ds_email, ds_senha)
values ('Mickael','2005-05-19', 'mickaelcosta@gmail.com', 123 );

create table tb_artistas(
id_artistas int primary key auto_increment,
nm_artistas varchar(200),
ds_genero varchar(200),
ds_sobre varchar(200),
img_artista varchar(200)
);

create table tb_musicas(
id_musica int primary key auto_increment,
id_usuario	int,
id_artistas int,
nm_musicas varchar(200),
ds_genero varchar(200),
arq_musica varchar(200),
img_musica varchar(200),
foreign key (id_usuario) references tb_usuario (id_usuario),
foreign key (id_artistas) references tb_artistas (id_artistas)
);

create table tb_usuario_artistas(
id_usuario_artistas int primary key auto_increment,
id_usuario int,
id_artistas int,
foreign key (id_usuario) references tb_usuario (id_usuario),
foreign key (id_artistas) references tb_artistas (id_artistas)
);

create table tb_usuario_favorito(
id_usuario_favorito int primary key auto_increment,
id_usuario int,
id_musica int,
foreign key (id_usuario) references tb_usuario (id_usuario),
foreign key (id_musica) references tb_musicas (id_musica)
);
.

create table tb_playlist (
id_playlist int primary key auto_increment,
id_usuario int,
nm_playlist varchar (200),
foreign key (id_usuario) references tb_usuario (id_usuario)
);

create table tb_playlist_item (
id_playlist_item int primary key auto_increment,
id_playlist int,
id_musica int,
foreign key (id_musica) references tb_musicas (id_musica),
foreign key (id_playlist) references tb_playlist (id_playlist)
);