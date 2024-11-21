import express from "express";
import bodyParser from "body-parser";

import { And } from "./lib/and.js";
import { Or } from "./lib/or.js";
import { Xor } from "./lib/xor.js";
import { Nand } from "./lib/nand.js";
import { OneBitMemCell } from "./lib/oneBitMemCell.js";
import { update_gate } from "./lib/utils.js";
import { MemCell8Bit } from "./lib/memCell8Bit.js";
import { toggleBit } from "./lib/utils.js";
import { colorFromBitValue } from "./public/js/utils.js";
import { RegMultiBit } from "./lib/regMultiBit.js";

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
let memCell8Bit = new MemCell8Bit();
let reg = new RegMultiBit(8);

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

app.get("/memCell8Bit", (req, res) => {
  res.render("memCell8Bit.ejs", {
    cell: memCell8Bit,
    colorFromBitValue: colorFromBitValue,
  });
});

app.post("/update_memcell8bit", (req, res) => {
  let newSetOrInputValue;
  if (req.body["boxID"] === "setBit") {
    newSetOrInputValue = toggleBit(memCell8Bit.set);
    memCell8Bit.updateSet(newSetOrInputValue);
  } else {
    const boxID = req.body["boxID"];
    const bitNum = parseInt(boxID.replace(/\D/g, ""), 10);
    newSetOrInputValue = toggleBit(memCell8Bit.input[bitNum]);
    let new8BitInputValue = memCell8Bit.input.slice();
    new8BitInputValue[bitNum] = newSetOrInputValue;
    memCell8Bit.updateInput(new8BitInputValue);
  }
  let newOutputValue = memCell8Bit.output;
  res.json({
    newSetOrInputValue: newSetOrInputValue,
    newOutputValue: newOutputValue,
    numBits: memCell8Bit.numBits,
  });
});

app.get("/reg", (req, res) => {
  res.render("reg.ejs", { reg: reg, colorFromBitValue: colorFromBitValue });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
