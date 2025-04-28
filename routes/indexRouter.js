const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    user: "Amando",
  },
  {
    user: "Charles",
  },
  {
    user: "Jane",
  },
  {
    user: "Kathy",
  },
  {
    user: "Zeo",
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { message: messages });
});

module.exports = { indexRouter, messages };
