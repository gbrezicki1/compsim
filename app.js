import express from "express";
import bodyParser from "body-parser";

import { And } from "./lib/and.js";
import { Or } from "./lib/or.js";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");

let and = new And();
let or = new Or();

app.get("/", (req, res) => {
  //     res.render("index.ejs", {
  //         andInput1Initial: and.input1,
  //         andInput2Initial: and.input2,
  //         orInput1Initial: or.input1,
  //         orInput2Initial: or.input2,
  //         andOutput: and.output
  //     });
  res.render("index.ejs", {
    and: and,
  });
});

app.post("/update", (req, res) => {
  if (req.body.input.toLowerCase().includes("and")) {
    if (req.body.input.toLowerCase().includes("input1")) {
      and.input1 = req.body.isChecked;
    } else if (req.body.input.toLowerCase().includes("input2")) {
      and.input2 = req.body.isChecked;
    } else {
      console.log(`Invalid input # for "and": ${req.body.input}`);
    }
  } else {
    console.log("Invalid input ID.");
  }

  and.update();
  res.json({ output: and.output });
});

// app.post("/submit", (req,res) => {
//     let and = new And();
//     let input1 = req.body.input1 === "true";
//     let input2 = req.body.input2 === "true";
//     and.update(input1,input2);
//     res.render("index.ejs",{
//         input1Initial: input1,
//         input2Initial: input2,
//         output: and.output
//     });
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
