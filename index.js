const express = require("express");
const kanbanRouter = require("./routers/kanbanRouter");
const tasklistRouter = require("./routers/tasklistRouter");
const cardRouter = require("./routers/cardRouter");
const logger = require("./middlewares/logger");
const errorHandling = require("./middlewares/errorHandling");

const server = express();
server.use(express.json());
server.use(logger);

server.use("/boards", kanbanRouter);
server.use("/tasklists", tasklistRouter);
server.use("/cards", cardRouter);


server.get("/", (req, res) => {
  res.send("Express'ten merhaba");
});

server.use(errorHandling);

server.listen(5000, () => {
  console.log("http://localhost:5000 adresine gelen istekler dinleniyor...");
});