import { Nand } from "./nand.js";

export function OneBitMemCell() {
  this.name = "oneBitMemCell";
  this.set = false;
  this.enable = false;
  this.nandGates = [];
  let numGates = 4;
  for (var i = 1; i < numGates; i++) {
    this.nandGates.push(new Nand());
  }
}
