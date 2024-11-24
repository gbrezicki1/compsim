import { OneBitMemCell } from "../lib/oneBitMemCell.js";

export function MemCellMultiBit(numBits) {
  this.numBits = numBits;
  this.set = 0;
  this.input = [];
  this.output = [];
  this.oneBitMemCells = [];
  for (var i = 1; i <= this.numBits; i++) {
    this.input.push(0);
    this.output.push(0);
    this.oneBitMemCells.push(new OneBitMemCell());
  }

  this.update = function () {
    for (var i = 0; i < this.numBits; i++) {
      this.oneBitMemCells[i].set = this.set;
      this.oneBitMemCells[i].input = this.input[i];
      this.oneBitMemCells[i].update();
      this.output[i] = this.oneBitMemCells[i].output;
    }
  };
}
