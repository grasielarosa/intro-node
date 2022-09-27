const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const items = [
    {
      title: "D",
      message: "evelopment",
    },
    {
      title: "E",
      message: "JS",
    },
    {
      title: "M",
      message: "Map",
    },
    {
      title: "A",
      message: "rray",
    },
    {
      title: "I",
      message: "nstall",
    },
    {
      title: "S",
      message: "intaxe",
    },
  ];
  res.render("pages/index", {
    qualities: items,
  });
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(8080);
console.log("listening on http://localhost:8080");
