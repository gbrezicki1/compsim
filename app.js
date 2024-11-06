import express from "express";
import bodyParser from "body-parser";

import { And } from "./lib/and.js";
import { Or } from "./lib/or.js";
import { Xor } from "./lib/xor.js";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");

let and = new And();
let or = new Or();
let xor = new Xor();
let gates = {
  and: and,
  or: or,
  xor: xor,
};

app.get("/", (req, res) => {
  res.render("index.ejs", {
    and: and,
    or: or,
    xor: xor,
  });
});

app.post("/update", (req, res) => {
  let elementID;
  let output;
  if (req.body.input.toLowerCase().includes("and")) {
    elementID = "#andOutput";
    if (req.body.input.toLowerCase().includes("input1")) {
      and.input1 = req.body.isChecked;
    } else if (req.body.input.toLowerCase().includes("input2")) {
      and.input2 = req.body.isChecked;
    } else {
      console.log(`Invalid input # for "and": ${req.body.input}`);
    }
    and.update();
    output = and.output;
  } else if (req.body.input.toLowerCase().includes("or")) {
    elementID = "#orOutput";
    if (req.body.input.toLowerCase().includes("input1")) {
      or.input1 = req.body.isChecked;
    } else if (req.body.input.toLowerCase().includes("input2")) {
      or.input2 = req.body.isChecked;
    } else {
      console.log(`Invalid input # for "or": ${req.body.input}`);
    }
    or.update();
    output = or.output;
  } else {
    console.log("Invalid input ID.");
  }
  res.json({
    elementID: elementID,
    output: output,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
