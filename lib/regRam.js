import { And } from "./and.js";
import { Or } from "./or.js";
import { RegMultiBit } from "./regMultiBit.js";

export function RegRam(numBits) {
  this.numBits = numBits;
  this.input = [];
  this.output = [];
  this.set = 0;
  this.enable = 0;
  this.reset = 0;
  this.addrRow = 0;
  this.addrCol = 0;
  for (let i = 0; i < this.numBits; i++) {
    this.input.push(0);
    this.output.push(null);
  }
  this.orReset = new Or();
  this.andAddr = new And();
  this.andSet = new And();
  this.andEnable = new And();
  this.reg = new RegMultiBit(numBits);

  this.update = function () {
    this.andAddr.input1 = this.addrRow;
    this.andAddr.input2 = this.addrCol;
    this.andAddr.update();
    this.andSet.input1 = this.andAddr.output;
    this.andSet.input2 = this.set;
    this.andSet.update();
    this.andEnable.input1 = this.andAddr.output;
    this.andEnable.input2 = this.enable;
    this.andEnable.update();
    this.orReset.input1 = this.reset;
    this.orReset.input2 = this.andSet.output;
    this.orReset.update();
    this.reg.set = this.orReset.output;
    this.reg.enable = this.andEnable.output;
    this.reg.input = this.input;
    this.reg.update();
    this.output = this.reg.output;
  };
}
