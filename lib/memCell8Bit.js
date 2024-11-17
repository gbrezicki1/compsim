import { OneBitMemCell} from "../lib/oneBitMemCell.js";

export function MemCell8Bit() {
  this.numBits = 8;
  this.input = [0, 0, 0, 0, 0, 0, 0, 0];
  this.output = this.input;
  this.set = 0;
  this.oneBitMemCells = [];
  for (var i = 1; i <= this.numBits; i++) {
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
