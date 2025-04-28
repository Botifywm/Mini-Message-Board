const { Router } = require("express");
const formRouter = Router();
const { messages } = require("./indexRouter");
const { detailLinks } = require("./detailsRouter");

formRouter.get("/", (req, res) => {
  res.render("form");
});

formRouter.post("/", (req, res) => {
  const formBody = req.body;
  const name = formBody.author;
  const message = formBody.text;
  messages.push({ user: name });
  detailLinks.push({ text: message, user: name, added: new Date() });
  res.redirect("/");
});

module.exports = formRouter;
