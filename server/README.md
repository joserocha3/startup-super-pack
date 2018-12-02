# Startup Super Pack - Server

## Getting Started

These instructions will get a copy of an _application server_ up and running on your local machine. Make sure you already have `yarn`, `prisma-cli` and `node` (version 10 or greater) installed.

These steps will allow for local development of the _application server_ on your machine. The database is not run locally, but is connected to your _Prisma development server_.

> It is possible to run a Prisma server and database locally using Docker. If you wish to do so, the [Prisma documentation](https://www.prisma.io/docs/1.20/get-started/01-setting-up-prisma-new-database-JAVASCRIPT-a002/) has instructions.

1. Clone this repository
2. Set your environment variables in `example.env`
3. Rename `example.env` to `.env`
4. Run `yarn install` to install dependencies
5. Run `yarn start` to start the server locally
6. In your browser open `http://localhost:4000/` to access the application's GraphQL Playground
7. Enter the following in the HTTP HEADERS section, replace `AUTH_TEST_TOKEN` with the value found in the `.env` file:

```json
{
  "Authorization": "Bearer AUTH_TEST_TOKEN"
}
```

## Deploying

### Prisma

Deploys to Prisma are initiated using the `$ yarn deploy` command. That command will push `database/datamodel.prisma` to the database connected to our Prisma project. After running the command you will get output informing you if the command was successful or not.

### Heroku

In the Heroku dashboard you can create an app, then under the deploy section link your repository. The `Procfile` file and the `postinstall` script will assure Heroku properly builds and starts your app.

## Commands

List of commands found in `package.json`. Most of the actions you need to perform via the command line will be available via these commands. These all assume you are in the project root.

`yarn dev` - start development server locally and watch for changes

`yarn start` - run contents of `dist` directory

`yarn build` - output into `dist` directory for production

`yarn heroku-postbuild` - instructions for Heroku, this does not need to be manually executed

`yarn prisma-generate` - output into `src/generated` directory based on `database` directory contents

`yarn prisma-deploy` - tells Prisma to take the contents of 'database/datamodel.prisma` and apply them to the database

`yarn lint` - instructions for `husky`/`lint-staged`, this does not need to be manually executed

## Project Structure

```
├── database
│   ├── datamodel.prisma (entire datamodel lives here)
│   └──prisma.yml
├── dist
├── node_modules
├── src
│   ├── generated
│   ├── resolvers
│   │   ├── Mutation (one file per graphQL `type`)
│   │   ├── Query (one file per graphQL `type`)
│   │   └── index.js (export all mutations and queries)
│   ├── schema
│   │   ├── directiveResolver.js
│   │   ├── schema.graphql (entire graphQL schema lives here)
│   │   └── schemaDirectives.js
│   ├── utils
│   └──index.js
├── .bablerc
├── .eslint.json
├── .gitignore
├── package.json
├── Procfile (instructions for Heroku)
├── README.md
└── yarn.lock
```
