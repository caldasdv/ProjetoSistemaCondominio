# 🌟 Programação de Computadores 3 (JavaScript) - Instituto Federal de Brasília 🌟

<p align="center">
    <img src="https://img.shields.io/badge/Language-JavaScript-yellow" alt="Language">
    <img src="https://img.shields.io/badge/Database-MongoDB-blue" alt="Database">
    <img src="https://img.shields.io/badge/Tools-Postman-FF6C37" alt="Tools">
</p>

## 👨‍🏫 Professor
- **Leandro Vaguetti**

## 👨‍🎓 Alunos
- **[Arthur Ferreira]()**
- **[David Caldas](https://github.com/caldasdv)**
- **[Tales Oliveira](https://github.com/TalesLimaOliveira)**

## 📚 Descrição
Repositório com o projeto desenvolvido na disciplina de **Programação de Computadores**, com foco na linguagem **JavaScript**. Este projeto tem como objetivo o desenvolvimento de uma **API Backend** para atender às demandas de um protótipo de aplicação elaborado em sala de aula. 🚀

### 🔍 Tópicos abordados:
- Estruturação e manipulação de **APIs RESTful** 🌐  
- Operações de **CRUD** (Create, Read, Update, Delete) com JavaScript 🗃️  
- Integração com **bancos de dados** MongoDB 🛢️

---

## Sistema de Gestão de Condomínio
Este é um sistema completo para a gestão de um condomínio, que permite realizar o cadastro de usuários, unidades, reservas, controle financeiro, ocorrências, encomendas, avisos, entre outras funcionalidades. Ele possui uma API RESTful desenvolvida com Node.js e MongoDB, permitindo fácil integração e gerenciamento do condomínio

### 🔗 Protótipo do projeto: [Quant UX](https://app.quant-ux.com/#/test.html?h=a2aa10az2iLb0Ao2DrTWqsqFPggbOKzNwgCywsL4tRuj9wFvpRajsRkwyQ3y&ln=en)

---

### ⚙️ Funcionalidades
- **Cadastro e Gerenciamento de Usuários**: Permite adicionar, editar, excluir e listar os usuários do sistema.
- **Gerenciamento de Unidades**: Cadastro, edição e listagem de unidades residenciais ou comerciais no condomínio.
- **Reservas**: Sistema para realizar e controlar as reservas de áreas comuns, como piscina, salão de festas, estacionamento, etc.
- **Controle Financeiro**: Gerenciamento das contas do condomínio, incluindo contas pendentes e pagas.
- **Ocorrências e Reclamações**: Permite registrar e consultar ocorrências de moradores e visitantes.
- **Taxas Extras**: Cadastro de taxas extras para cobranças adicionais.
- **Encomendas**: Sistema para registrar e controlar as encomendas recebidas no condomínio.
- **Avisos e Comunicados**: Cadastro e listagem de avisos importantes e comunicados para moradores e administradores.
- **Controle de Visitantes**: Registro de visitantes que acessam o condomínio.

---

### 💻 Tecnologias Usadas
- **Node.js**: Para o desenvolvimento da API backend.
- **Express**: Framework web para Node.js, utilizado para estruturar as rotas e controlar o fluxo de requisições.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar as informações do sistema.
- **Mongoose**: Biblioteca para modelagem de dados MongoDB em Node.js.

---

### 📂 Estrutura do Projeto

| **Diretório/Arquivo** | **Descrição**                             |
|-------------------|-----------------------------------------------|
| ├`controllers/`   | Lógica de controle das rotas.                 |
| ├`models/`        | Modelo de dados para usuários.                |
| ├`routers/`       | Rotas da aplicação.                           |
| ├`index.js`       | Ponto de entrada da aplicação.                | 
| ├`package.json`   | Configurações do projeto e dependências.      |
| └`README.md`      | Documentação do projeto (este arquivo).       |

---

### 🚀 Como Executar  

1. **Instale os pacotes necessários:**  
> npm install

2. **Inicie a aplicação:**  
> npm start

---

### 📌 Exemplos de Uso
- O servidor estará rodando na porta 3001. Acesse `http://localhost:3001` para ver a mensagem de boas-vindas.

- Use um cliente HTTP (como Postman) para interagir com a API através das rotas definidas em `src/routers/routes.js`.

- Adicionar um usuário:

> curl -X POST http://localhost:3001/user -H "Content-Type: application/json" -d '{"nome": "John Doe", "email": "john@example.com", "password": "123456"}'

- Listar todos os usuários:

> curl http://localhost:3001/user

---

### 📋 Rotas da API

#### 🧑 Usuários:

- `POST /api/user`: Adiciona um novo usuário.
- `GET /api/user`: Lista todos os usuários.
- `GET /api/user/buscaemail`: Busca usuário por email.
- `DELETE /api/user/:id` Deleta um usuário por ID.
- `PUT /api/user/:id`: Atualiza um usuário por ID.

#### 🏠 Unidades:

- `POST /api/unidade`: Adiciona uma nova unidade.
- `GET /api/unidade`: Lista todas as unidades.
- `GET /api/unidade/:id`: Busca unidade por ID.
- `DELETE /api/unidade/:id`: Deleta uma unidade por ID.
- `PUT /api/unidade/:id`: Atualiza uma unidade por ID.

#### 🎉 Reservas:

- `POST /api/reserva`: Adiciona uma nova reserva.
- `GET /api/reserva`: Lista todas as reservas.
- `GET /api/reserva/:id`: Busca reserva por ID.
- `DELETE /api/reserva/:id`: Deleta uma reserva por ID.
- `PUT /api/reserva/:id`: Atualiza uma reserva por ID.

#### 💸 Financeiro:

- `POST /api/financeiro`: Adiciona uma nova movimentação financeira.
- `GET /api/financeiro`: Lista todas as movimentações financeiras.
- `GET /api/financeiro/:id`: Busca movimentação financeira por ID.
- `DELETE /api/financeiro/:id`: Deleta uma movimentação financeira por ID.
- `PUT /api/financeiro/:id`: Atualiza uma movimentação financeira por ID.

#### 📦 Ocorrências:

- `POST /api/ocorrencia`: Adiciona uma nova ocorrência.
- `GET /api/ocorrencia`: Lista todas as ocorrências.
- `GET /api/ocorrencia/:id`: Busca ocorrência por ID.
- `DELETE /api/ocorrencia/:id`: Deleta uma ocorrência por ID.
- `PUT /api/ocorrencia/:id`: Atualiza uma ocorrência por ID.

#### 📝 Reclamações:

- `POST /api/reclamacao`: Cria uma nova reclamação.
- `GET /api/reclamacao`: Lista todas as reclamações.
- `GET /api/reclamacao/:id`: Busca uma reclamação por ID.
- `PUT /api/reclamacao/:id`: Atualiza uma reclamação existente.
- `DELETE /api/reclamacao/:id`: Deleta uma reclamação.

#### 📢 Avisos:

- `POST /api/aviso`: Cria um novo aviso.
- `GET /api/aviso`: Lista todos os avisos.
- `GET /api/aviso/:id`: Busca um aviso por ID.
- `PUT /api/aviso/:id`: Atualiza um aviso existente.
- `DELETE /api/aviso/:id`: Deleta um aviso.

#### 📄 Documentos:

- `POST /api/documento`: Cria um novo documento ou comunicado.
- `GET /api/documento`: Lista todos os documentos e comunicados.
- `GET /api/documento/:id`: Busca um documento ou comunicado por ID.
- `PUT /api/documento/:id`: Atualiza um documento ou comunicado.
- `DELETE /api/documento/:id`: Deleta um documento ou comunicado.

#### 📦 Encomendas:

- `POST /api/encomenda`: Cria uma nova encomenda.
- `GET /api/encomenda`: Lista todas as encomendas.
- `GET /api/encomenda/:id`: Busca encomenda por ID.
- `PUT /api/encomenda/:id`: Atualiza uma encomenda existente.
- `DELETE /api/encomenda/:id`: Deleta uma encomenda.

#### 🏢 Blocos:

- `POST /api/bloco`: Cria um novo bloco.
- `GET /api/bloco`: Lista todos os blocos.
- `PUT /api/bloco/:id`: Atualiza as informações de um bloco.
- `DELETE /api/bloco/:id`: Deleta um bloco.