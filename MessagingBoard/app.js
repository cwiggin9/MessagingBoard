const express = require('express')
const app = express()
const indexRouter = require("./routes/indexRouter");
const messagesRouter = require("./routes/messagesRouter");

app.use(express.static("public"))

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", messagesRouter);

app.listen(3000);
