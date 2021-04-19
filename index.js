const express = require("express"),
  app = express(),
  port = process.env.port || 3000;

app.use(express.json());
app.use(express.static("public"));
app.listen(port);
