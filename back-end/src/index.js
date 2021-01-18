const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
var bodyParser = require("body-parser");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = 3001;

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

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

app.use(require("./routes"));

app.listen(port, () => console.log(`🚀 Server started on port ${port}`));
