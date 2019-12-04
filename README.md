### Adicionando bibliotecas básicas

Adicionando bibliotecas básicas

```
yarn add express pg pg-hstore sequelize
yarn add sequelize-cli -D
yarn add nodemon -D
```

Altere o `package.json` adicionando o código abaixo:

```
"scripts": {
        "dev": "nodemon src/server.js"
    },
```

### Banco de Dados

Dentro da diretório `src` crie os arquivos `routes.js`, `server.js`.

Também dentro do diretório `src` vai ser criado um diretório que vai se chamar `database`
e dentro desse diretório será criado um arquivo `index.js` para fazer a conexão com a base de dados.

Novamente no diretório `src` crie um outro deretório chamado `config` e dentro dele crie um arquivo chamado `database.js` onde terá as configurações de conexão com o bando de dados.

Crie na raiz do projeto um arquivo chamado `.sequilizerc` para apontar para as credenciais do banco.

Se os arquivos, diretórios e configurações foram feitas corretamente então rode o comando abaixo, esse comando vai fazer com que seja criado um bando de dados.

```
yarn sequelize db:create
```

### Migrations

No arquivo `.sequilizerc` tem que definir o caminho onde é que vai ser criado as `migritions-path`. Dentro do diretório `database` crie um diretório chamado `migrations` e rode comando abaixo para criar a migration.

```
yarn sequelize migration:create --name=create-users
```

Agora preencha as tabelas como os nomes das tabelas que serão criadas no banco de dados

Rode a `migration` com o comando abaixo, com esse comando será criado uma tabela com os campos definidos dentro dela.

```
yarn sequelize db:migrate
```

Revertendo a última migration

```
yarn sequelize db:migrate:undo
```

Dentro do diretório `src` crie um diretório chamado `models` e depois crie um `model` para usuários chamado `User.js` em formato de classe e definir o formato de usuários dentro da base de dados.

Vá para o diretório `database` e dentro do arquivo `index.js` importe o `../models/User`

- Crie uma rota para cadastro de usuário.

Vai ser criado no diretório `src` um diretório chamado `controllers`

- Crie um arquivo chamado `UserControler.js`
  - Que vai lidar com as requisições e lidar e devolver respostas.
  - Vai ser criado um método `store` que vai servir para armazenar um usuário.
- Vá no `routes.js` e importe o `UserController`

```

yarn sequelize migration:create --name=add-age-field-to-users
yarn sequelize db:migrate`
yarn sequelize db:migrate:undo
```

### Instruções para eu

Para baixar todas as dependências, se for continuar em outra máquina, execute o camando abaixo na raiz do projeto, com isso será baixado todas as dependências.

```
yarn install
```

### parado em 25

treta que quer dá pull

trera que push pull
