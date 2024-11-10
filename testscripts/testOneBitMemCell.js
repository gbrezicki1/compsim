import { OneBitMemCell } from "../lib/oneBitMemCell.js";

let cell = new OneBitMemCell();
let sequence = [
  { input: "enable", value: true },
  { input: "set", value: false },
  { input: "enable", value: false },
  { input: "set", value: false },
  { input: "enable", value: true },
  { input: "set", value: true },
  { input: "set", value: false },
  { input: "enable", value: false },
  { input: "set", value: true },
];

for (const instruction of sequence) {
    cell.update(instruction["input"], instruction["value"])
    console.log(`output = ${cell.output}`);
    console.log("");
}