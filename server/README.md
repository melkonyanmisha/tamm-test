## The node.js tamm test

- Authorization
- Authentication
- The application allows you to add posts and view them
## Requirements

* Node
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

## Steps for access

To start the express server, run the following

```bash
npm run dev
or 
npm run start
```

Open [http://localhost:3003](http://localhost:3003) and take a look around.


## env.development.example
APP_PORT=3000
APP_HOST=localhost
APP_URL=http://localhost:3000
DB_NAME=tamm-test
DB_URI=mongodb://localhost:27017
JWT_ACCESS_SECRET=JWT_ACCESS_SECRET
JWT_REFRESH_SECRET=JWT_REFRESH_SECRET
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tamt34679@gmail.com
SMTP_PASS=zmylvjstfdxrcypr
CLIENT_URL=http://localhost:3003

