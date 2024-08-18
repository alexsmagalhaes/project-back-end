const express = require("express");
const router = express.Router();

const routerPrivate = require("./RoutersPrivateMain");
const routerPublic = require("./RoutersPublicMain");

// Configuração do middleware JSON
router.use(express.json());

// Montar as rotas
router.use("/main", routerPrivate);
router.use("/login", routerPublic);

module.exports = router;
