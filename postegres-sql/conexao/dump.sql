CREATE DATABASE biblioteca

CREATE TABLE autores(
	id serial primary key,
  nome varchar(150) not null,
  idade integer
); 

CREATE TABLE livros(
	ident serial primary key,
  nome varchar(150) not null,
  genero varchar(150),
  editora text, 
  data_publicacao date,
  autor_id integer references autores(id)
); 

select e.id as empresaId, f.id as filialId, e.nome, f.pais, p.nome as funcionario
from empresas e
join filiais f on e.id = f.empresa_id
join pessoas p on e.id = p.empresa_id;
  