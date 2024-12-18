const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routers/routes'); // Importando as rotas

const app = express();
const PORT = 3001;

// URI de conexão do MongoDB Atlas
const uri = "mongodb+srv://caldasdv:pamonhafrita@cluster0.4zoif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Configuração do Mongoose com opções do MongoDB
const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true }
};

// Função para conectar ao banco de dados
async function connectDatabase() {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log("Conectado ao MongoDB com sucesso");
  } catch (err) {
    console.log("Erro ao conectar ao MongoDB:", err);
    process.exit(1); // Encerra o processo se a conexão falhar
  }
}

// Conectar ao banco de dados
connectDatabase();

// Configuração do middleware
app.use(express.json());  // Para permitir o uso de JSON nas requisições

// Usando as rotas
app.use('/api', routes);

// Rota de boas-vindas
app.get('/', (req, res) => {
  res.send('Bem-vindo ao Sistema de Gerenciamento de Condominio');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
