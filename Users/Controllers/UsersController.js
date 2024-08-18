const UsersModel = require("../Models/UsersModels");

const usersModel = new UsersModel();

class UsersController {
  async ControllerListar(request, response) {
    try {
      
      const usuario = await usersModel.ModelListar();

      if (!usuario) {
        return response.status(404).json({ error: "CONTROLLER: Usuário não encontrado" });
      }

      response.json(usuario);
      
    } catch (error) {
      response
        .status(500)
        .json({ message: "CONTROLLER: Erro ao listar usuários: " + error });
    }
  }

  async ControllerAdicionar(request, response) {
    try {
      const { nome, idade, email, senha } = request.body;
      await usersModel.ModelAdicionar(nome, idade, email, senha);
      console.log(nome, idade, email, senha);

      response.status(201).json({
        message: "CONTROLLER: Usuário cadastrado com sucesso",
      });
    } catch (error) {
      response.status(500).json({
        message: "CONTROLLER: Erro ao cadastrar usuário: " + error,
      });
    }
  }

  async ControllerLitarId(request, response) {
    try {
      const { id } = request.params;
      const usuario = await usersModel.ModelListarId(id);

      if (!usuario) {
        return response.status(404).json({ error: "CONTROLLER: Usuário não encontrado" });
      }

      response.json(usuario);
    } catch (error) {
      response.status(500).json({
        message: "CONTROLLER: Erro ao listar usuários por id" + error,
      });
    }
  }

  async ControllerDelete(request, response) {
    try {
    const { id } = request.params;
    const resultado = await usersModel.ModelDeletardeletar(id);

    res.json(resultado);
    } catch (error) {
      response.status(500).json({
        message: "CONTROLLER: Erro ao deletar usuário: " + error,
      });
    }
  }

  async ControllerUpdate(request, response) {
    try {
      const { nome, idade, email, senha } = request.body;
      const { id } = request.params;
      

      const usuarioAtualizado = await usersModel.ModelUpdate(id, nome, idade, email, senha);

      response.json(usuarioAtualizado);

    } catch (error) {

      return response.json({ message: "CONTROLLER: Erro ao atualizar usuário" + error});
    }
  }
}
module.exports = UsersController;
