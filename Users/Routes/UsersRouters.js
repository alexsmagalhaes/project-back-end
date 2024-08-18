const express = require("express");
const userRouter = express.Router();
const app = express();

// Controller
const UsersController = require("../Controllers/UsersController");
const usersController = new UsersController();

app.use(express.json());

// Route
userRouter.get("/user", usersController.ControllerListar);
userRouter.post("/user", usersController.ControllerAdicionar);
userRouter.get("/user/:id", usersController.ControllerLitarId);
userRouter.delete("/user/:id", usersController.ControllerDelete);
userRouter.put("/user/:id", usersController.ControllerUpdate);

module.exports = userRouter;
