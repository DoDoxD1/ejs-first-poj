const express = require("express");
const ejs = require("ejs");
const PORT = 3000;
const app = express();
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const d = new Date();
  let day = d.getDay();
  res.render("index", { day: days[day] });
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
