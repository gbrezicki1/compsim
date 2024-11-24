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

  this.update = function () {
    for (let i = 0; i < this.numBits; i++) {
      this.andGates[i].input1 = this.enable;
      this.andGates[i].input2 = this.input[i];
      this.andGates[i].update();
      this.buffers[i].input = this.andGates[i].output;
      this.buffers[i].enable = this.enable;
      this.buffers[i].update();
      this.output[i] = this.buffers[i].output;
    }
  };
}
