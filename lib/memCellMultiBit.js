import { OneBitMemCell} from "../lib/oneBitMemCell.js";

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

  this.updateSet = function (set) {
    this.set = set;
    for (var i = 0; i < this.numBits; i++) {
      this.oneBitMemCells[i].update("enable", Boolean(set));
      this.output[i] = Number(this.oneBitMemCells[i].output);
    }
  };

  this.updateInput = function (input) {
    this.input = input;
    for (var i = 0; i < this.numBits; i++) {
      this.oneBitMemCells[i].update("set", Boolean(input[i]));
      this.output[i] = Number(this.oneBitMemCells[i].output);
    }
  };
}
