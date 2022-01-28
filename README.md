# MERN Expense Tracker

> Expense tracker built with the MERN stack & Context API

## Features

- Get transactions 
- Add transaction
- Delete transaction

## API Endpoints

| End Point                                           | Verb |Use                                       |
| ----------------------------------------------------|------|------------------------------------------|
|`/api/v1/transactions`                               |POST  |Creating a transaction                    |
|`/api/v1/transactions`                               |GET   |Gets all transactions                     |
|`/api/v1/transactions/:id`                           |DELETE|Delete a transaction	         	|

## Usage

### Env Variables

Edit config.env file in ./config folder and add YOUR_DATABASE_URI

### Install Dependencies (frontend & backend)

```
npm install
cd client
npm install
```

### Run

```
# Run client (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd client
npm run build
```

## Built With

* [ReactJS](https://reactjs.org/) / [Context API](https://reactjs.org/docs/context.html)- Frontend 
* [NodeJS](https://nodejs.org/) / [Express](https://expressjs.com/) - Backend
* [MongoDB](https://www.mongodb.com/) - Database


