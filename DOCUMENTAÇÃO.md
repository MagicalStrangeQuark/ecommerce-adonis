<p align="center">
  <img src="https://adonisjs.com/images/favicons/favicon-196x196.png" width="400">
</p>

# WEBSITE

<https://adonisjs.com/>

## INSTALAÇÃO DO FRAMEWORK ADONIS

  npm i -g @adonisjs/cli

## CRIAÇÃO DE UM PROJETO

  adonis new myapp --api-only

## PACOTES

Ao adicionarmos um novo pacote, no diretório `start/app.js`, na constante provider adicionar o caminho para o mesmo.

> npm i --save mysql

> adonis install @adonisjs/mail

> adonis install @adonisjs/validator

> adonis install @adonisjs/websocket
 
> adonis install @adonisjs/adonis-acl

> adonis install adonis-acl                                                                              
> adonis install adonis-bumblebee

## MODELOS

## CONFIGURANDO A BASE DE DADOS

  sudo systemctl start `mariadb`

  sudo mysql --user root

  CREATE DATABASE adonis;

  CREATE USER 'adonis'@'localhost' IDENTIFIED WITH mysql_native_password;

  FLUSH PRIVILEGES;

  ALTER USER 'adonis'@'localhost' IDENTIFIED BY 'P@ssw0rd';

  FLUSH PRIVILEGES;

  GRANT ALL PRIVILEGES ON adonis.* TO 'adonis'@'localhost';

  FLUSH PRIVILEGES;

  select host, user, password from mysql.user;

  use adonis;

  ### CONFIGURAÇÃO .ENV, AJUSTAR OS CAMPOS CONFORME CADASTRO PRÉVIA EFETUADO NA BASE DE DADOS

      > DB_CONNECTION=`mysql`

      > DB_USER=`adonis`

      > DB_PASSWORD=`P@ssw0rd`

      > DB_DATABASE=`adonis`

  ### NO ARQUIVO DATABASE PRESENTE EM CONFIG, ALTERAR AS LINHAS PARA

    CASO NÃO EXISTA UMA CONEXÃO EM .ENV
    
    > connection: Env.get('DB_CONNECTION', 'mysql');

## CRIAÇÃO DO ARQUIVO RESPONSÁVEL PELA PERSISTÊNCIA DOS LOGS DE ERROS

> adonis make:ehandler

  No arquivo `App/Exceptions/Handler.js`, instanciar a constante `Logger`, da seguinte forma:

      > const Logger = use('Logger');

  Ainda no arquivo Handle.js, modificar o método report da seguinte forma:

  ```
    async report(error, {
      request
    }) {
      if (error.status >= 500) {
        Logger.error(error.message, {
          stack: error.stack,
          message: error.message,
          status: error.status,
          name: error.name
        });
      }
    }
  ```

  Em config/app.js, dentro do atributo logger, usar transport como file, pois queremos persistir o erro num arquivo.

## MIGRAÇÕES

  > adonis make:migration MigrationName

## CONTROLADORES

## VISÕES