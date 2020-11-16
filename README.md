<h1 align="center">Autistic Friends</h1>
<h2 title="Páginas">📌 Sobre</h2>
<p align="left">
Aplicação desenvolvida com a objeção de integrar crianças com TEA(Síndrome do Espectro Autista) ao mundo digital, ao ingressarem na plataforma os usuários podem marcar seus compromissos de rotina, tarefas diárias e também suas consultas com neurologistas afim de ter um cronograma de acesso dinâmico.
</p>

<h4 align="center">
🚧 Em desenvolvimento 🚧
</h4>

<h2>📋 Pré-requisitos</h2>
Para começar você vai precisar ter as seguintes ferramentas em sua máquina:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Também precisará de um editor para trabalhar com o código.

<h2>▶️ Rodando o projeto</h2>

``` bash
# Clone o repositório
$ git clone <https://github.com/Leandro2585/AutisticFriends>

# Acesse o diretório do projeto via terminal
$ cd AutisticFriends

# Vá até o diretório api
$ cd backend

# Instale as dependências do projeto
$ npm install

# Acesse o seu MySql pelo terminal com o comando
$ mysql -u root -p

# Crie a base de dados digitando
$ create database autistic_friends;

# Saia do MySql
$ exit;

# Execute as migrations para criar as tabelas em sua base de dados
$ knex migrate:latest

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# O serviço ficará disponível na porta: 3333 - para acessá-la use: <localhost:3333>

# Agora abra outro terminal e acesse o diretório web
$ cd AutisticFriends/frontend

# Instale as dependências
$ npm install

# Execute a aplicação web
$ npm run start

# O serviço ficará disponível na porta: 3000 - para acessá-la use: <localhost:3000>

```
<br/>

<h2>⚙️ Funcionalidades</h2>

- [x] Cadastro de usuário;<br>
- [x] Login do usuário;<br>
- [x] Agendamento de tarefas;<br>
- [x] Agendamento de consultas;<br>
- [x] Adicionar postagem(foto e comentário);<br>
- [x] Listagem dos posts;<br>
- [x] Listagem das tarefas;<br>
- [x] Listagem das consultas;<br>
- [x] Listagem dos usuários na plataforma;<br>

<h2>💡 Tecnologias</h2>
As ferramentas utilizadas no desenvolvimento desse projeto foram:
<br>
- Node.js(https://nodejs.org/en/)
<br>
- React(https://pt-br.reactjs.org/)

 <br/> Entre em contato comigo:<br/> [![Linkedin Badge](https://img.shields.io/badge/-LeandroReal-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/leandro-r-434b811a5/)](https://www.linkedin.com/in/leandro-r-434b811a5/)
|
[![Gmail Badge](https://img.shields.io/badge/-leo.real2585@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:leo.real2585@gmail.com)](mailto:leo.real2585@gmail.com)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
