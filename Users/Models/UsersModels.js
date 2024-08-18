class Model {
  dados = [
    {
      id: 1,
      nome: "Lana",
      sobrenome: "Sarah",
      senha: "123456",
    },
    {
      id: 2,
      nome: "Penelope",
      sobrenome: "Charmosa",
      senha: "123456",
    },
    {
      id: 3,
      nome: "Alex",
      sobrenome: "Santos",
      senha: "123456",
    },
  ];

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

  ModelListar() {
    try {
      return this.dados;
    } catch (error) {
      return "MODEL: Erro ao listar usuários: " + error;
    }
  }

  async ModelAdicionar(data) {
    console.log(data);
    try {
      await this.dados.push(data);
    } catch (error) {
      return "MODEL: Erro ao adicionar usuários: " + error;
    }
  }
  ModelListarId(id) {
    try {
      const pesquisa = this.dados.filter((item) => item.id == id);
      return pesquisa;
    } catch (error) {
      return "MODEL: Erro ao filtrar usuários por id: " + error;
    }
  }
  ModelDeletar(id) {
    try {
      const dadosUser = this.dados.filter((item) => item.id != id);
      this.dados = dadosUser;

      return dadosUser;
    } catch (error) {
      return "MODEL: Erro ao deletar usuários por id: " + error;
    }
  }

  ModelUpdate(id, data) {
    try {
      const index = this.dados.findIndex((item) => item.id === id);

      if (index !== -1) {
        this.dados[index] = { ...this.dados[index], ...data };
        return "Usuário atualizado com sucesso";
      } else {
        return "Usuário não encontrado";
      }
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      return "Erro ao atualizar usuário";
    }
  }
}

module.exports = Model;
