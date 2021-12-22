create table users (
    id int auto_increment primary key,
    login varchar(100) unique not null,
    password varchar(100) not null,
    type enum('admin','entregador','empresa')
);

create table entregador (
    id int auto_increment primary key,
    idUser int,
    nome varchar(100) not null,
    cpfCnpj varchar(20),
    celular varchar(20),
    email varchar(100),
    idade tinyint,
    endereco varchar(100),
    numero varchar(10),
    complemento varchar(30),
    bairro varchar(50),
    veiculo enum('bicicleta','moto','roler','carro','skate','patinete'),
    placa varchar(10),
    FOREIGN KEY (idUser) REFERENCES users(id)
);

