create database projetosalao;

create table clientes(
id int primary key auto_increment,
nome varchar(100) not null,
telefone varchar(20) not null
);

create table servico(
id int primary key auto_increment,
nome_servico varchar(50) not null,
tempo_servico int not null
);

create table agendamento(
id int primary key auto_increment,
id_cliente int,
id_servico int,
data date not null,
hora time not null,
status varchar(20) not null,
servico varchar(50) not null,
FOREIGN KEY (id_cliente) references clientes (id),
FOREIGN KEY (id_servico) references servico (id)
);