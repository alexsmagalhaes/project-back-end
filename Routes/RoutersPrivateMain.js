const express = require("express");
const routerPrivate = express.Router();
const userRouter = require("../Users/Routes/UsersRouters");
var jwt = require('jsonwebtoken');
require('dotenv').config();

routerPrivate.use(express.json());

//Middleware
routerPrivate.use((request, response, next) => {

  if (request.headers.token) {

    const {token} = request.headers;
    jwt.verify(token, process.env.APP_KEY_SECRET);
    
  } else{
    return response.status(401).send("Router: Acesso não autorizado"); 
  }

 

  next();                                                                                                                                                     
});

// Montar as rotas
routerPrivate.use("/users", userRouter);

module.exports = routerPrivate;
