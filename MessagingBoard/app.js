const express = require('express')
const app = express()
const indexRouter = require("./routes/indexRouter");
const messagesRouter = require("./routes/messagesRouter");
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", messagesRouter);

app.listen(3000);
