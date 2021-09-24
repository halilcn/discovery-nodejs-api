
# Discovery Nodejs
## API for family and users of family.


This project was created to explore API development with node.js. The project has been tried to be coded clean and understandable


## Built With
1. Express (Node.js web application framework)
2. Mongodb (NoSQL Database)
3. express-validator (Validator for express)
4. mongoose (Mongodb object modeling for node.js)
5. babel (Compiler for JavaScript)
6. nodemon (devtool for automatically restarting)

# Installation
You can installation with docker or npm. Below you can do it step by step

Clone the source code:
```
git clone https://github.com/halilcn/discovery-nodejs-api.git
```

## Installation with docker

## Installation with npm
The application uses mongodb for database operations.
So you must have mongodb installed on your computer and the mongodb must use port 27017. (database'de oluşturmam gerek mi?

Database and collections will automatic create on mongodb when the application is started.




Change to the directory
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
After installation packages, API ready on http://127.0.0.1:3000/api/v1 You can refer to the documentation to use the api.



## Documentation for API

### Users

#### Get all users

```http
  GET /api/v1/users
```
#### Save user

```http
  POST /api/v1/users
```
#### Get user

```http
  POST /api/v1/users/:userId
```
| Parameters | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `string or integer` | (**Required**) Id of user ()??

#### Öğeyi getir

```http
  GET /api/items/${id}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Gerekli**. Çağrılacak öğenin anahtar değeri |

#### add(num1, num2)

İki sayı alır ve toplamı döndürür.

  
