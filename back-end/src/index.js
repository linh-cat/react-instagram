const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = 3333;

require("dotenv").config();

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
  })
  .catch((error) => handleError(error));
app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

app.use(require("./routes"));

app.listen(port, () => console.log(`🚀 Server started on port ${port}`));
