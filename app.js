const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  console.log("helloka");
  res.send("hello szia");
});

app.listen(port, () => {
  console.log("app is running and we happy");
  console.log(`Example app listening on port ${port}`);
});
