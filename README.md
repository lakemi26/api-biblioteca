# 📚 Biblioteca API - Projeto Pós Tech
<br/>
API RESTful desenvolvida com **Node.js + TypeScript** para gerenciamento de livros em uma biblioteca, utilizando o **Firebase Firestore** como banco de dados.

## ✅ Requisitos

* Node.js 24 ou superior
* Conta no Firebase
* Chave de serviço gerada pelo Firebase
* Ferramenta de testes de API (usei o https://curlbuilder.com/)


## ⚙️ Tecnologias usadas

* Node.js
* TypeScript
* Express
* Firebase Admin SDK (Firestore)
* Dotenv


## 🛠️ Como criar o projeto

Criar o arquivo package.
```
npm init
```

Instalar o Express para gerenciar as requisições, rotas e URLs, entre outras funcionalidades.

```
npm i express
```

Instalar os pacotes para suporte ao Typescript.

```
npm i --save-dev @types/express
npm i --save-dev @types/node
```

Instalar o compilador do projeto com TypeScript e reiniciar o projeto quando o aquivo é modificado.

```
npm i --save-dev ts-node
```

Gerar o aquivo de configuração para o TypeScript.

```
npx tsc --init
```

Compilar o arquivo TypeScrip.
```
npx tsc
```

Executar o arquivo gerado com Node.js.
```
node dist/index.js
```
---

## Instalar o firebase

```
npm install express dotenv firebase-admin
npm install --save-dev typescript ts-node-dev @types/node @types/express
```

---

 
## 📮 Endpoints da API

| Método | Rota          | Descrição                    |
| ------ | ------------- | ---------------------------- |
| POST   | `/livros`     | Cadastrar novo livro         |
| GET    | `/livros`     | Listar todos os livros       |
| PUT    | `/livros/:id` | Atualizar um livro existente |
| DELETE | `/livros/:id` | Remover um livro da coleção  |




