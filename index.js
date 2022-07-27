const express = require("express");
const app = express();
const port = 5000;
// const path = require("path");
const isLogin = false;

app.set("view engine", "hbs");
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello");
});
// console.log(__dirname);

app.get("/index", (req, res) => {
  res.render("index", { isLogin: isLogin });
});

app.post("/add-project", (req, res) => {
  const data = req.body;
  console.log(data);

  res.redirect("/add-project");
});

app.get("/add-project", (req, res) => {
  res.render("add-project");
});

app.get("/Contact-me", (req, res) => {
  res.render("Contact-me");
});

app.get("/DetailProject/:index", (req, res) => {
  const index = req.params.index;
  console.log(index);

  res.render("DetailProject");
});

app.listen(port, () => {
  console.log(`Exemple app listen port ${port} `);
});
