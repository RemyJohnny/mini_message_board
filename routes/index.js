var express = require("express");
var router = express.Router();
var moment = require("moment");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: moment().format("MMMM Do YYYY, h:mm:ss a"),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: moment().format("MMMM Do YYYY, h:mm:ss a"),
  },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "mini message board", messages });
});

router.get("/new", function (req, res) {
  res.render("form", { title: "add new message" });
});

router.post("/new", function (req, res) {
  let newMsg = {
    ...req.body,
    added: moment().format("MMMM Do YYYY, h:mm:ss a"),
  };
  messages.push(newMsg);
  res.redirect("/");
});

module.exports = router;
