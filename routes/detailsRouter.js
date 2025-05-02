const { Router } = require("express");
const detailsRouter = Router();

// const detailLinks = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//   },
//   {
//     text: "Hello Friends!",
//     user: "Jane",
//     added: new Date(),
//   },
//   {
//     text: "Surprise World!",
//     user: "Kathy",
//     added: new Date(),
//   },
//   {
//     text: "We will get there hopefully!",
//     user: "Zeo",
//     added: new Date(),
//   },
// ];

detailsRouter.get("/:indexD", (req, res) => {
  const { indexD } = req.params;
  const parsedIndex = parseInt(indexD, 10);
  res.render("messageDetails", { index: parsedIndex, details: detailLinks });
});

module.exports = { detailLinks, detailsRouter };
