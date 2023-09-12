**Crie uma Estrutura de Diretórios:**
**Crie uma estrutura de diretórios para o seu projeto. Por exemplo:**

- src/
  - server.ts


# Crie um Servidor Express Simples:
# No arquivo server.ts, configure um servidor Express simples. 
# Você pode adicionar rotas e controladores à medida que o projeto avança.

`import express from 'express';`

`const app = express();`
`const port = 3000;`

`app.get('/', (req, res) => {`
  `res.send('API Node.js com TypeScript');`
`});`

`app.listen(port, () => {`
  `console.log(`Servidor rodando na porta ${port}`);`
`});`


