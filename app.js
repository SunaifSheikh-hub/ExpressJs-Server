const express = require("express");
const bodyParser = require("body-parser")
const app = express()
const path = require("path")
// const req = require("express/lib/request");
// const res = require("express/lib/response");
const formRoutes = require("./routes/form");

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, "public" )));


app.use((req, res, next) => {
    console.log(req.url)
    next();
})

app.use("/form", formRoutes);

app.use("/", (req, res) => {
    res.send("Welcome to express app")
} )

app.listen(3000);