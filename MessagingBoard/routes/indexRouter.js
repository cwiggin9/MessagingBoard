const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages })
});

indexRouter.post("/new", (req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

indexRouter.get("/:messageIndex", (req, res) => {
  const messageIndex = parseInt(req.params.messageIndex, 10) - 1;

  const message = messages[messageIndex];

  res.render("message", { message })
})

module.exports = indexRouter;