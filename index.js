const express = require("express"),
  app = express(),
  cors = require("cors"),
  port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: true }));
app.use(express.static("public"));
app.get("/*", (req, res) => {
  return res.sendFile("index.html", { root: "./public" });
});
app.listen(port);
