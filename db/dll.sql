create database fitbr;

use fitbr;

select * from tb_usuario;
select * from tb_loginadm;
select * from tb_artistas;
select * from tb_genero;

create table tb_usuario(
id_usuario int primary key auto_increment,
nm_nome varchar(200),
dt_nasc datetime,
ds_email varchar(200),
ds_senha varchar(200)
);

drop table tb_loginadm;
create table tb_loginadm (
id_adm int primary key auto_increment,
ds_email varchar (200),
ds_senha varchar (200)
);

insert into tb_loginadm (ds_email, ds_senha)
values ( 'adm', 123 );

create table tb_artistas(
id_artistas int primary key auto_increment,
id_genero int,
nm_artistas varchar(200),
ds_genero varchar(200),
ds_sobre varchar(200),
img_artista varchar(200),
foreign key (id_genero) references tb_genero (id_genero)
);

create table tb_genero(
id_genero int primary key auto_increment,
nm_genero varchar (100)
);

insert into tb_genero (nm_genero)
values ( 'Funk');

insert into tb_genero (nm_genero)
values ( 'Sertanejo');