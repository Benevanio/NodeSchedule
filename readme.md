## Documentação do Projeto NodeSchedule

### Visão Geral
Este projeto é uma aplicação Node.js que utiliza Express para criar um servidor web e Mongoose para interagir com um banco de dados MongoDB. O projeto inclui operações básicas de CRUD (Create, Read, Update, Delete) para artigos.

### Estrutura do Projeto
```
NodeSchedule/
├── .gitignore
├── index.js
├── model/
│   └── article.js
├── package-lock.json
└── package.json
```

### Arquivos Principais

#### `.gitignore`
Ignora arquivos e diretórios que não devem ser versionados, como `node_modules`, arquivos de log e variáveis de ambiente.

```plaintext
node_modules
dist
coverage
*.log
.env
.vscode
*.
```

#### `index.js`
O ponto de entrada da aplicação. Configura o servidor Express, conecta ao MongoDB e define operações básicas de CRUD.

```javascript
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const ArticleModel = require('./model/article');

// Conecta ao MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected!'))
  .catch(err => console.log(err));

const Article = mongoose.model('Article', ArticleModel);

// Exemplo de operações CRUD
const article = new Article({
    title: 'Desenvolvimento com o C#',
    autor: 'benevanio',
    body: 'Aprenda a desenvolver com o C#',
    special: true
});

// Delete um artigo
Article.findByIdAndDelete("67db55a33c6366ebc4a679e5")
    .then(() => console.log('Article deleted'))
    .catch(err => console.log(err));

// Atualiza um artigo
Article.updateOne({ title: 'Desenvolvimento com o C#' }, { title: 'Desenvolvimento com o C# 2' })
    .then(() => console.log('Article updated'))
    .catch(err => console.log(err));

// Busca todos os artigos
Article.find()
    .then(articles => console.log(articles))
    .catch(err => console.log(err));

// Salva um novo artigo
article.save()
    .then(() => console.log('Article saved'))
    .catch(err => console.log(err));

// Inicia o servidor
app.listen(3000, () => {
    console.log('Server is running');
});
```

#### `model/article.js`
Define o schema do Mongoose para a coleção de artigos.

```javascript
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    special: {
        type: Boolean,
        required: true
    }
});

module.exports = articleSchema;
```

#### `package.json`
Define as dependências e scripts do projeto.

```json
{
  "name": "mongodb",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "mongoose": "^8.12.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }
}
```

### Configuração do Ambiente

1. **Instale as Dependências**:
   ```bash
   npm install
   ```

2. **Configure o Ambiente**:
   Crie um arquivo `.env` na raiz do projeto e adicione a URL do seu banco de dados MongoDB:
   ```plaintext
   DATABASE_URL=mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
   ```

3. **Execute o Projeto**:
   ```bash
   npm run dev
   ```

### Operações CRUD

- **Create**: Cria um novo artigo.
- **Read**: Busca todos os artigos.
- **Update**: Atualiza um artigo existente.
- **Delete**: Remove um artigo.

### Contribuição

Sinta-se à vontade para contribuir com o projeto. Abra uma issue ou envie um pull request no [repositório do GitHub](https://github.com/Benevanio/NodeSchedule).

