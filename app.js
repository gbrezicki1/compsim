import express from "express";
//import bodyParser from "body-parser";
//app.use(bodyParser.urlencoded({ extended: true }));

import { And } from "./lib/and";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {
        input1Initial: false,
        input2Initial: false,
        output: false
    });
});

app.post("/submit", (req,res) => {
    let and = new And();
    and.update(input1=req.body.input1, input2=req.body.input2);
    res.render("index.ejs",{
        input1Initial: req.body.input1,
        input2Initial: req.body.input2,
        output: and.output
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });