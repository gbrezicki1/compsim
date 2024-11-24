import { Nand } from "./nand.js";

export function OneBitMemCell() {
  this.input = 0;
  this.set = 0;
  this.nandGates = [];
  let numGates = 4;
  for (var i = 1; i <= numGates; i++) {
    this.nandGates.push(new Nand());
  }

  this.updateSinglePass = function () {
    this.nandGates[0].input1 = this.input;
    this.nandGates[0].input2 = this.set;
    this.nandGates[0].update();

    this.nandGates[1].input1 = this.nandGates[0].output;
    this.nandGates[1].input2 = this.set;
    this.nandGates[1].update();

    this.nandGates[2].input1 = this.nandGates[0].output;
    this.nandGates[2].input2 = this.nandGates[3].output;
    this.nandGates[2].update();

    this.nandGates[3].input1 = this.nandGates[2].output;
    this.nandGates[3].input2 = this.nandGates[1].output;
    this.nandGates[3].update();

    this.output = this.nandGates[2].output;
  };

  this.update = function () {
    // gates are updated twice to ensure that the changes propagate all the way
    // through the network
    this.updateSinglePass();
    this.updateSinglePass();
  };
}
