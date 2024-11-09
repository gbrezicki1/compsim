import express from "express";
import bodyParser from "body-parser";

import { And } from "./lib/and.js";
import { Or } from "./lib/or.js";
import { Xor } from "./lib/xor.js";
import { Nand } from "./lib/nand.js";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");

let and = new And();
let or = new Or();
let xor = new Xor();
let nand = new Nand();

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/gates", (req, res) => {
  res.render("gates.ejs", {
    and: and,
    or: or,
    xor: xor,
    nand: nand,
  });
});

function update_gate(gate, input, value) {
  if (input.toLowerCase().includes("input1")) {
    gate.input1 = value;
  } else {
    gate.input2 = value;
  }
  gate.update();
}

app.post("/update", (req, res) => {
  let gate;
  if (req.body.input.toLowerCase().startsWith("and")) {
    gate = and;
  } else if (req.body.input.toLowerCase().startsWith("or")) {
    gate = or;
  } else if (req.body.input.toLowerCase().startsWith("nand")) {
    gate = nand;
  } else {
    gate = xor;
  }
  update_gate(gate, req.body.input, req.body.isChecked);
  res.json({
    elementID: `#${gate.name}Output`,
    output: gate.output,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
