const UsersModel = require("../Models/UsersModels");

class Autenticador {
    AutenticadorLogin(nome, senha){

        const usersModel = new UsersModel();

        const dados = usersModel.ModelLogin(nome, senha);
        return dados;
        
    };
};

module.exports = Autenticador;