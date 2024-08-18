const UsersModel = require("../Models/UsersModels");

const usersModel = new UsersModel();

class UsersController {
  ControllerListar(request, response) {
    try {
      const lista = usersModel.ModelListar();
      response.json(lista);
    } catch (error) {
      response
        .status(500)
        .json({ message: "CONTROLLER: Erro ao listar usuários: " + error });
    }
  }

  async ControllerAdicionar(request, response) {
    try {
      await usersModel.ModelAdicionar(request.body);

      response.status(201).json({
        message: "CONTROLLER: Usuário cadastrado com sucesso",
      });
    } catch (error) {
      response.status(500).json({
        message: "CONTROLLER: Erro ao cadastrar usuário: " + error,
      });
    }
  }

  ControllerLitarId(request, response) {
    try {
      const id = request.params.id;
      const listaId = usersModel.ModelListarId(id);
      response.json(listaId);
    } catch (error) {
      response.status(500).json({
        message: "CONTROLLER: Erro ao listar usuários por id" + error,
      });
    }
  }

  ControllerDelete(request, response) {
    try {
      const id = request.params.id;
      usersModel.ModelDeletar(id);
      response.json({
        message: "CONTROLLER: Usuário deletado com sucesso",
      });
    } catch (error) {
      response.status(500).json({
        message: "CONTROLLER: Erro ao deletar usuário: " + error,
      });
    }
  }

  ControllerUpdate(request, response) {
    try {
      const idUser = parseInt(request.params.id);

      console.log(request.body); // Verifique se os dados estão sendo logados corretamente

      usersModel.ModelUpdate(idUser, request.body);

      return response.json({ message: "Usuário atualizado com sucesso" });
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);

      return response.status(500).json({ message: "Erro interno do servidor" });
    }
  }
}
module.exports = UsersController;
