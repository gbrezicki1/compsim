import { Nand } from "./nand.js";

export function OneBitMemCell() {
  this.name = "oneBitMemCell";
  this.set = false;
  this.enable = false;
  this.nandGates = [];
  let numGates = 4;
  for (var i = 1; i <= numGates; i++) {
    this.nandGates.push(new Nand());
  }

  this.updateGates = function (input, value) {
    if (input === "set") {
      this.set = value;
    } else if (input === "enable") {
      this.enable = value;
    } else {
      console.log("Invalid input for oneBitMemCell.update().");
    }

    this.nandGates[0].input1 = this.set;
    this.nandGates[0].input2 = this.enable;
    this.nandGates[0].update();

    this.nandGates[1].input1 = this.nandGates[0].output;
    this.nandGates[1].input2 = this.enable;
    this.nandGates[1].update();

    this.nandGates[2].input1 = this.nandGates[0].output;
    this.nandGates[2].input2 = this.nandGates[3].output;
    this.nandGates[2].update();

    this.nandGates[3].input1 = this.nandGates[2].output;
    this.nandGates[3].input2 = this.nandGates[1].output;
    this.nandGates[3].update();

    this.output = this.nandGates[2].output;
  };

  this.update = function (input, value) {
    this.updateGates(input, value);
    this.updateGates(input, value);
  };
}
