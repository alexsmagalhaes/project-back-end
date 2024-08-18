const User = require("../../DataBase/Model/ModelUser");

class Model {
  ModelLogin(login, senha) {
    try {
      const indice = this.dados.findIndex(
        (item) => item.nome == login && item.senha == senha
      );
      return this.dados[indice];
    } catch (error) {
      return "MODEL: Erro ao logar usuário: " + error;
    }
  }

  async ModelListar() {
    try {
      const usuarios = await User.findAll();
      return usuarios;
    } catch (error) {
      console.error("Erro ao listar usuários:", error);
    }
  }

  async ModelAdicionar(nome, idade, email, senha) {
    try {
      const newUser = await User.create({
        USER_NOME: nome,
        USER_IDADE: idade,
        USER_EMAIL: email,
        USER_SENHA: senha,
      });

      await newUser.save();
      console.log("Usuário criado com sucesso!" + newUser);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  }

  async ModelListarId(id) {
    try {
      const usuario = await User.findByPk(id);
      return usuario;
    } catch (error) {
      console.error("Erro ao listar usuário:", error);
      return { error: "Usuário não encontrado" };
    }
  }
  async ModelDeletar(id) {
    try {
      const USER_ID = id;

      const usuarioDeletado = await User.destroy({
        where: { USER_ID },
      });

      if (usuarioDeletado === 0) {
        return { error: "Usuário não encontrado" };
      }

      return { message: "Usuário deletado com sucesso" };
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      return { error: "Erro ao deletar usuário" };
    }
  }

  async ModelUpdate(id, nome, idade, email, senha) {
    try {
      const USER_ID = id;
      const dados = {
        USER_NOME: nome,
        USER_IDADE: idade,
        USER_EMAIL: email,
        USER_SENHA: senha,
      };

      // Corrigindo a chamada para o método update
      const [linhasAfetadas, [usuarioAtualizado]] = await User.update(dados, {
        where: { USER_ID }
    });

    if (linhasAfetadas === 0) {
        return { error: "Usuário não encontrado" };
    }

    return usuarioAtualizado;

    
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      return { error: "Erro ao atualizar usuário + " + error };
    }
  }
}

module.exports = Model;
