import express from "express";
import bodyParser from "body-parser";

import { And } from "./lib/and.js";
import { Or } from "./lib/or.js";
import { Xor } from "./lib/xor.js";
import { Nand } from "./lib/nand.js";
import { OneBitMemCell } from "./lib/oneBitMemCell.js";
import { update_gate } from "./lib/utils.js";

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
let oneBitMemCell = new OneBitMemCell();

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

app.post("/update_gates", (req, res) => {
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

function setColor(ioName) {
  let color;
  if (oneBitMemCell[ioName]) {
    color = "green";
  } else {
    color = "gray";
  }
  return color;
}

app.get("/onebitmemcell", (req, res) => {
  let colors = {};
  colors["set"] = setColor("set");
  colors["enable"] = setColor("enable");
  colors["output"] = setColor("output");
  res.render("oneBitMemCell.ejs", { mem: oneBitMemCell, colors: colors });
});

app.post("/update_onebitmemcell", (req, res) => {
  let value;
  let newInputColor;
  let green = "rgb(128, 128, 128)";
  if (req.body["currentColor"] === green) {
    value = true;
    newInputColor = "green";
  } else {
    value = false;
    newInputColor = "gray";
  }
  oneBitMemCell.update(req.body["inputID"], value);
  let newOutputColor;
  if (oneBitMemCell.output === true) {
    newOutputColor = "green";
  } else {
    newOutputColor = "gray";
  }
  res.json({
    newInputColor: newInputColor,
    newOutputColor: newOutputColor,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
