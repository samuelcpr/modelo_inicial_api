# Dependencias para executar o projeto

**TypeScript: É a linguagem que você está usando para escrever o código.**
`yarn add typescript --dev`

**ts-node: Permite que você execute arquivos TypeScript diretamente sem precisar**
**transpilá-los para JavaScript primeiro.**

`yarn add ts-node --dev`

**@types/express: Fornece definições de tipo para o Express, permitindo que o TypeScript**
**entenda e verifique seu código Express.**

`yarn add @types/express --dev`

**Node.js typings (opcional): Se você não tiver o arquivo de declaração de tipo do Node.js,**
**também pode instalá-lo.**

`yarn add @types/node --dev`

**Agora, você precisa configurar o TypeScript para o seu projeto. Você pode fazer isso criando**
**um arquivo de configuração tsconfig.json na raiz do seu projeto com as seguintes**
**configurações mínimas:**

<script>
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "strict": true
  },
  "include": [
    "./src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
} 

</script>

### Aqui, estamos configurando o TypeScript para compilar os arquivos TypeScript em ./src para a pasta ./dist e usando o módulo CommonJS.

### Agora você pode ajustar seu script de execução no package.json para usar ts-node para executar seu arquivo TypeScript diretamente. Por exemplo:

<script>

  "scripts": {
  "start": "ts-node src/server.ts"
},
</script>


Depois de fazer essas configurações e instalar as dependências, você pode usar yarn start para executar
 seu servidor TypeScript com Express. Certifique-se de que o arquivo de entrada seja src/server.ts, 
 ou ajuste o caminho de acordo com a estrutura do seu projeto.
