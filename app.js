import express from "express";
import bodyParser from "body-parser";

import { And } from "./lib/and.js";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index.ejs", {
        input1Initial: false,
        input2Initial: false,
        output: false
    });
});

app.post("/submit", (req,res) => {
    let and = new And();
    let input1 = req.body.input1 === "true";
    let input2 = req.body.input2 === "true";
    and.update(input1,input2);
    res.render("index.ejs",{
        input1Initial: input1,
        input2Initial: input2,
        output: and.output
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });