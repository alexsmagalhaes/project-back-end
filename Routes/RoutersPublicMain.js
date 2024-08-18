const express = require("express");
const routerPublic = express.Router();
const Autenticador = require("../Users/Controllers/Autenticador"); 
var jwt = require('jsonwebtoken');
require('dotenv').config();


routerPublic.use(express.json());

// Montar as rotas
routerPublic.post("/validacao", async (request, response) => {

  try {
    const { nome, senha } = request.body; 

    const autenticador = new Autenticador(); 
    const usuario = await autenticador.AutenticadorLogin(nome, senha); 
    console.log(usuario);

    if (usuario) { 
      
      const token = jwt.sign(usuario, process.env.APP_KEY_SECRET);

      return response.json({
        usuarios: usuario,
        token: token,
        message: "Autenticação realizada com sucesso",
        
      });

    } else {
      return response.status(401).json({ message: "Usuário ou senha incorretos" }); 
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Erro interno do servidor" }); 
  }
});

module.exports = routerPublic;