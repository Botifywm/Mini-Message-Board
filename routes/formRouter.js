const { Router } = require("express");
const formRouter = Router();
const messageController = require("../controllers/messagesController");

formRouter.get("/", (req, res) => {
  res.render("form");
});

formRouter.post("/", messageController.InsertMessages);

module.exports = formRouter;
