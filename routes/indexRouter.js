const { Router } = require("express");
const indexRouter = Router();
const messageController = require("../controllers/messagesController");

indexRouter.get("/", messageController.getNames);
indexRouter.get("/details/:indexD", messageController.getMessages);

module.exports = indexRouter;
