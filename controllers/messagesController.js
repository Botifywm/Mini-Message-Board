const db = require("../db/queries");

async function getNames(req, res) {
  const messages = await db.getAllMessages();
  const names = messages.map((msg) => msg.name);
  const id = messages.map((msg) => msg.id);

  console.log("Names: ", names);
  res.render("index", { name: names, ids: id });
}

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  const { indexD } = req.params;
  const parsedIndex = parseInt(indexD, 10);
  const detail = messages.find((detail) => detail.id === parsedIndex);
  console.log(parsedIndex);
  console.log("Messages: ", detail);
  res.render("messageDetails", { details: detail });
}

async function InsertMessages(req, res) {
  const formBody = req.body;
  const name = formBody.author;
  const message = formBody.text;
  await db.insertMessages(name, message);
  res.redirect("/");
}

module.exports = { getNames, getMessages, InsertMessages };
