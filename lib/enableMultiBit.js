import { And } from "./and.js";
import { Buffer } from "./buffer.js";

export function EnableMultiBit(numBits) {
  this.numBits = numBits;
  this.enable = 0;
  this.input = [];
  this.output = [];
  this.andGates = [];
  this.buffers = [];
  for (let i = 0; i < this.numBits; i++) {
    this.input.push(0);
    this.output.push(null);
    this.andGates.push(new And());
    this.buffers.push(new Buffer());
  }

  this.updateEnable = function (enable) {
    this.enable = enable;
    this.update();
  };

  this.updateInput = function (input) {
    this.input = input;
    this.update();
  };

  this.update = function () {
    for (let i = 0; i < this.numBits; i++) {
      this.andGates[i].input1 = Boolean(this.enable);
      this.andGates[i].input2 = Boolean(this.input[i]);
      this.andGates[i].update();
      this.buffers[i].updateInput(Number(this.andGates[i].output));
      this.buffers[i].updateEnable(this.enable);
      this.output[i] = this.buffers[i].output;
    }
    console.log(`enableMultiBit output: ${this.output}`);
  };
}
