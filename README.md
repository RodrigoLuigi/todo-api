# <h1 id="top" align="center">To-do API ⚙️</h1>

<p align="center">
  <a href="#sobre">Sobre</a> &#xa0; | &#xa0;
  <a href="#gear-features">Features</a> &#xa0; | &#xa0;
  <a href="#-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#-requisitos">Requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-iniciando">Iniciando</a> &#xa0; | &#xa0;
  <a href="https://github.com/RodrigoLuigi" target="_blank">Author</a>
</p>

<br>

## <img id="sobre" src="https://imgur.com/VhTBbHg.png" alt="imagem de um notebook" align="center" width="30px"> _**O que desenvolvemos neste Projeto?**_

📌 To-do é uma aplicação de uma lista de tarefas digital para se organizar durante o dia-a-dia.
 O projeto foi desenvolvido com módulos separados para facilitar a escalabilidade e a manutenção da aplicação.

Desenvolvido utilizando **Node.js** e **Express.** Criação de um banco de dados utilizando **PostgreSQL**, e manipulaçãod o DataBase utilizando **Sequelize**.

## :gear: Features

:heavy_check_mark: Cadastrar task\
:heavy_check_mark: Atualizar status da task\
:heavy_check_mark: Deletar task\
:heavy_check_mark: Editar task\
:heavy_check_mark: Listar tasks

## 👨‍💻 Tecnologias

As seguintes ferramentas foram usadas neste projeto:

- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://www.w3schools.com/js/default.asp)
- [PostgreSQL](https://www.postgresql.org/docs/)

## :books: Bibliotecas

_**As seguintes bibliotecas foram utilizadas neste projeto:**_

- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## 📝 Requisitos

- [Git](https://git-scm.com)
- [Node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## :checkered_flag: Iniciando

```bash
# Clone este projeto
$ git clone https://github.com/RodrigoLuigi/FoodExplorer-API.git

# Acesse o projeto
$ cd todo-api

# Instale as dependências
$ npm install

# Inicializando Migrations
$ npm run migrate

# Inicializando projeto
$ npm start

# Inicializando projeto modo Desenvolvimento
$ npm run dev

# O Server irá inicializar em http://localhost:3333
```

## 🔗 Rotas

<div style="display: flex">

```bash
# [POST] Criar task
/tasks

# [GET] Listar tasks
/tasks

# [PUT] Atualizar task
/tasks/:id

# [DELETE] Deletar task
/tasks/:id

# [PATCH] Atualizar status da task
/tasks/:id
```

</div>

&#xa0;

_**Feito por <a href="https://github.com/RodrigoLuigi" target="_blank">Rodrigo Luigi</a>**_ 👨‍🚀

<a href="#top">Back to top</a>
