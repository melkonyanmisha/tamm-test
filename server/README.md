## The node.js tamm-test
### Welcome to the Node.js project! This project is built using Express and utilizes environment variables stored in an `.env.development` file.

- Authorization
- Authentication
- The application allows you to add posts and view them
## Requirements

* Node.js (version 16.17.0 or higher)
* NPM (version 8.15.0 or higher)
* Git

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/melkonyanmisha/tamm-test.git
cd tamm-test/server
```

```bash
npm install
yarn
```

Open [http://localhost:3000](http://localhost:3000) and take a look around.

## Configuration
The project requires certain environment variables to be set in an .env.development file. Follow these steps to set up the environment:

* Create a new file named .env in the root directory of the project.
* Open the .env.development file and define your environment variables in the format VARIABLE_NAME=VALUE.

## env.development.example
* APP_PORT=3000
* APP_HOST=localhost
* APP_URL=http://localhost:3000
* DB_NAME=tamm-test
* DB_URI=mongodb://localhost:27017
* JWT_ACCESS_SECRET=JWT_ACCESS_SECRET
* JWT_REFRESH_SECRET=JWT_REFRESH_SECRET
* SMTP_HOST=smtp.gmail.com
* SMTP_PORT=587
* SMTP_USER=tamt34679@gmail.com
* SMTP_PASS=zmylvjstfdxrcypr
* CLIENT_URL=http://localhost:3003

## To start the express server, run the following

```bash
npm run dev
or 
npm run start
```


# Endpoints
### The project exposes the following endpoints:

## Authorization:
### POST api/v1/auth/registration
### POST api/v1/auth/login
### POST api/v1/auth/logout
### GET api/v1/auth/refresh

## Users
### POST api/v1/users/:userId

## Posts
### POST api/v1/posts
### PUT api/v1/posts/:postId
### GET api/v1/posts/:postId
### GET api/v1/posts
### DELETE api/v1/posts/:postId


# Postman Collection
### For convenience, a Postman collection has been provided in the postman directory of this project. You can import this collection into Postman to easily test the API endpoints. The collection includes example requests for the available endpoints.

### To import the collection into Postman, follow these steps:

* Open Postman.

* Click on the "Import" button in the top left corner.

* Select the option to import from a file and browse to the postman directory in this project.

* Choose the Tamm Test Task.postman_collection.json file and click "Open" to import the collection.

### You can now explore and test the endpoints using the imported collection in Postman.

### Feel free to customize the content and add more endpoints according to your project requirements.
