# Crie um arquivo docker-compose.yml para configurar o serviço PostgreSQL usando o Docker Compose:

`version: '3'`
`services:`
  `postgres:`
    `image: postgres:latest`
    `container_name: postgres-local`
    `ports:`
      `- "5432:5432"`
    `environment:`
      `POSTGRES_USER: yourusername`
      `POSTGRES_PASSWORD: yourpassword`
      `POSTGRES_DB: yourdatabase`

**Substitua "yourusername", "yourpassword" e "yourdatabase" pelas configurações desejadas para o banco de dados PostgreSQL.**

`FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]``
