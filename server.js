const express = require("express");
const host = "localhost";
const port = 3000;
const app = express();

const routerMain = require("./Routes/RouterMain");

app.use(routerMain);

app.use(express.json());

app.listen(port, host, () => {
  console.log(`http://${host}:${port}`);
});
