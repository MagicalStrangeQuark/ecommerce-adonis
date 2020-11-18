<p align="center"><a href="https://adonisjs.com"><p align="center"><img src="../adonis-js-seeklogo.com.svg" width="400"></p></a></p>

<p align="center">Development of an Ecommerce Using the 🚀<a href="https://adonisjs.com">Adonis.js</a> Framework</p>

<p align="center">
    <a href="https://opensource.org/licenses/MIT">
        <img alt="License" src="https://img.shields.io/badge/License-MIT-yellow.svg">
    </a>
    <a href="#">
        <img alt="License" src="https://img.shields.io/github/languages/count/MagicalStrangeQuark/ecommerce-adonis">
    </a>
    <a href="#">
        <img alt="License" src="https://img.shields.io/github/last-commit/MagicalStrangeQuark/ecommerce-adonis">
    </a>
    <a href="#">
        <img alt="License" src="https://img.shields.io/github/followers/MagicalStrangeQuark?style=social">
    </a>
</p>

<h6 align="center">🥂 Framework Installation</h6>

```bash
    npm install -g @adonisjs/cli
```

```bash
    adonis --version
```

```bash
    adonis new app --api-only
```

<h6 align="center">🍾 Start</h6>

```bash
    cd app
    
    adonis serve --dev
```

<h6 align="center">🍻 Open in Browser</h6>

```bash
    http://127.0.0.1:3333
```

<h6 align="center">🌂 MySQL Connection</h6>

<h3 align="center">Modelos</h3>

<h3 align="center">Configurando o banco de dados</h3>

<h6 align="center">Manjaro</h6>

```bash
  sudo systemctl start `mariadb`

  sudo mysql --user root
```

<h6 align="center">Windows</h6>

```bash
    mysqlsh
```

```sql
    \connect root@localhost

    \sql
```

<h6 align="center">MySQL</h6>

```sql
  CREATE DATABASE adonis;

  CREATE USER 'adonis'@'localhost' IDENTIFIED WITH mysql_native_password;

  FLUSH PRIVILEGES;

  ALTER USER 'adonis'@'localhost' IDENTIFIED BY 'secret';

  FLUSH PRIVILEGES;

  GRANT ALL PRIVILEGES ON adonis.* TO 'adonis'@'localhost';

  FLUSH PRIVILEGES;

  select host, user, authentication_string from mysql.user;

  USE adonis;
```

<h6 align="center">Configurando .ENV: Ajustar os campos conforme o cadastro prévio efetuado na base de dados</h6>

```bash
  DB_CONNECTION=`mysql`

  DB_USER=`adonis`

  DB_PASSWORD=`secret`

  DB_DATABASE=`adonis`
```

<h6 align="center">No arquivo <app\config\database.js>, alterar as linhas para caso não haja conexão definida em .ENV</h6>

```bash
  connection: Env.get('DB_CONNECTION', 'mysql');
```

<h6 align="center">Packages</h6>

<h6 align="center">Ao adicionarmos um novo pacote, no diretório start/app.js, na constante provider adicionar o caminho para o mesmo.</h6>

```bash
  npm i --save mysql
```

```bash
  adonis install @adonisjs/mail

  adonis install @adonisjs/validator

  adonis install @adonisjs/websocket
  
  adonis install @adonisjs/adonis-acl

  adonis install adobis-acl

  adonis install adonis-bumblebee
```