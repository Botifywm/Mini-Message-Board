const path = require("node:path");
const express = require("express");
const app = express();

const { indexRouter } = require("./routes/indexRouter");
const formRouter = require("./routes/formRouter");
const { detailsRouter } = require("./routes/detailsRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", formRouter);
app.use("/details", detailsRouter);

const PORT = 3030;
app.listen(PORT, () =>
  console.log(`My first Express app - listening on port ${PORT}!`)
);
