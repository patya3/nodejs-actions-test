const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("home");
  res.send("Hello World!");
});

app.listen(port, () => {
  onsole.log("app is running");
  console.log(`Example app listening on port ${port}`);
});
