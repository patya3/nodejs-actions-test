const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("index");
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("hello szia minde nrendeb");
  console.log(`Example app listening on port ${port}`);
});
