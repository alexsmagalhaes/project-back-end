const modelUser = require("./ModelUser");
const ModelProduct = require("./ModelProducts");
const modelCategory = require("./ModelCategory");
const ModelOrder = require("./ModelOrder");


Promise.all([
  modelUser.sync({ force: true }),
  ModelProduct.sync({ force: true }),
  modelCategory.sync({ force: true }),
  ModelOrder.sync({ force: true })
])
  .then(() => {
    console.log("Tabelas criadas com sucesso");
  })
  .catch((error) => {
    console.error("Erro ao criar tabelas:"+ error);
  });