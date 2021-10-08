# Discovery Nodejs

## API for family and users of family.

This project was created to explore API development with nodejs. The project tried to be coded clean and understandable, its tests were written.

## Built With

* Express (Node.js web application framework)
* Mongodb (NoSQL Database)
* express-validator (Validator for express)
* mongoose (Mongodb object modeling for node.js)
* babel (Compiler for JavaScript)
* nodemon (For automatically restarting)

# Installation

The app uses port 3000. Therefore you make sure port 3000 is empty.

You can installation with docker or npm. Below you can do it step by step.

Clone the source code:

```
git clone https://github.com/halilcn/discovery-nodejs-api.git
```

Go to `discovery-nodejs-api` directory when project is cloned.

````
cd discovery-nodejs-api
````

## Installation with docker

Running app

```
docker-compose up -d
```

After the compilation is complete, API ready on ``` http://127.0.0.1:3000/api/v1```. You can refer to
the [documentation](#documentation-for-api) to use the api.

## Installation with npm

The application uses mongodb for database operations. Therefore you must have mongodb installed on your computer and the
mongodb must use port 27017.

Database and collections will automatic create on mongodb when the application is started.

Change the directory

```
cd backend
```

Install packages with npm

```
npm install
```

Start the app

```
npm run start
```

After installation packages, API ready on ``http://127.0.0.1:3000/api/v1``. You can refer to
the [documentation](#documentation-for-api) to use the api.

## Documentation for API

### Users

* _Get all users_

```http
  GET /api/v1/users
```

* _Save user_

```http
  POST /api/v1/users
```

| Parameters | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | (**Required**) Name of user
| `surname`      | `string` | (**Required**) Surname of user
| `age`      | `string or integer` | (**Required**) Age of user
| `gender`      | `string` | (**Required**) Gender of user

* _Get user_

```http
  Get /api/v1/users/:userId
```

| Parameters | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `integer` | (**Required**) Id of user

* _Update user_

```http
 PUT /api/v1/users/:userId
```

| Parameters | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `integer` | (**Required**) Id of user

| Parameters | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | (**Required**) Name of user
| `surname`      | `string` | (**Required**) Surname of user
| `age`      | `string or integer` | (**Required**) Age of user
| `gender`      | `string` | (**Required**) Gender of user

* _Delete user_

```http
 DELETE /api/v1/users/:userId
```

| Parameters | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `integer` | (**Required**) Id of user

_More documents will be added soon..._
