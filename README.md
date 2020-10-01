<p align="center">
  <img alt="logo" src="inventory_api/src/assets/inventory.png" heigh="200px" width="200px"/>
</p>

<h1 align="center">
      Inventory Control
</h1>

<h4 align="center">
  A simple inventory control web application.
</h4>

<p align="center">
  <img alt="github-top-language" src="https://img.shields.io/github/languages/top/esterandr02/InventoryControl">
  <img alt="github-repo-size" src="https://img.shields.io/github/repo-size/esterandr02/InventoryControl?color=red">
  <img alt="github-last-commit" src="https://img.shields.io/github/last-commit/esterandr02/DInventoryControl?color=green">
  <img alt="github-repo-license" src="https://img.shields.io/static/v1?label=license&message=MIT&color=blueviolet">
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#warning-prerequisites">Prerequisites</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;
</p>

## How works

-   Giving complaints coordinates that will find some address where you want to complain
-   Register complaints whistleblower on database

## :rocket: Technologies

-   [Typescript](https://www.typescriptlang.org/)
-   [Node.js](https://nodejs.org/en/)
-   [Docker](https://www.docker.com/)
-   [Eslint](https://eslint.org/docs/about/)
-   [Prettier](https://prettier.io/)
-   [Express](https://expressjs.com/)
-   [React Js](https://pt-br.reactjs.org/)
-   [Tsyringe](https://www.npmjs.com/package/tsyringe)
-   [Postgres](https://www.postgresql.org/about/)
-   [jest](https://jestjs.io/)

## :warning: Prerequisites

- create a .env file and put the informations .env.example requires on it

-   [Git](https://git-scm.com)
-   [Node.js v12.18.1](https://nodejs.org/dist/v12.18.1/node-v12.18.1-linux-x64.tar.xz) - LTS version
-   [Yarn v1.13](https://yarnpkg.com/getting-started) - package manager
-   [Docker with postgres database](https://hub.docker.com/_/postgres) - follow the instructions to create a container that will contains the image of postgres.
-   [Account on Mapquest API](https://reactjs.org/)
-   Don't forget to put your consumer Mapquest key on _.env.example_ file

## :information_source: Getting Started

```bash
# Clone this repository
$ git clone https://github.com/esterandr02/InventoryControl.git
```
## Run Backend

```bash
# Go into the api path
$ cd InventoryControl/inventory_api

# Install dependences
$ yarn

# Create a Docker container
$ sudo docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres

# Start container - (if your machine has been powered off)
$ docker start (container name/id)

# Ckeck port - (if port 5432 has been used)
$ lsof -i :5432
$ sudo kill -9 (process that is using the port)

# Construct database tables
$ yarn typeorm migration:run

# Start the Server
$ yarn dev

# route: includes post and get methods
http://localhost:3333/inventory

Now you can use the app :D

obs: Ctrl + C to stop the server.
```
