# Note du dévellopeur :

Bonjour, j'ai créé le projet d'Open Classroom Argent Bank. Ci-dessous, à partir de # Argent Bank API, vous pourrez suivre les étapes d'initialisation pour démarrer le projet. Cependant, je souhaite clarifier cette étape.

Premièrement, j'ai installé Node.js v12 et MongoDB.

Les instructions pour démarrer le projet n'étaient pas à jour, alors je vous indique comment lancer le projet via le terminal :

# Argent Bank API

1er terminal :  cd Backend : nvm list -> nvm use 12 -> npm run dev:server
2ème terminal :  cd Backend : npm run populate-db
3ème terminal : cd Backend : mongod
4ème terminal : mongod --version
5ème terminal : cd Frontend -> cd argent-bank nvm list -> nvm use 20 -> npm run dev

Il est bon de noter que pour lancer Mongo, ce n'est pas "mongo" mais "mongod". 
De même, pour voir la version de celui-ci, ce n'est pas "mongo --version" mais "mongod --version".


This codebase contains the code needed to run the backend for Argent Bank.


caisso.n92@gmail.com

## Getting Started



### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Instructions

1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## Design Assets

Static HTML and CSS has been created for most of the site and is located in: `/designs`.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in `/designs/wireframes/edit-user-name.png`.

And for the API model that you will be proposing for transactitons, the wireframe can be found in `/designs/wireframes/transactions.png`.
