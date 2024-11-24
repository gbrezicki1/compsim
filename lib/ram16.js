import { RegRam } from "./regRam.js";
import { Decoder2x4 } from "./decoder2x4.js";
import { MemCellMultiBit } from "./memCellMultiBit.js";

export function Ram16(numBits) {
  this.numBits = numBits;
  this.input = [];
  this.output = [];
  this.addr = [];
  this.reset = 0;
  this.write = 0;
  this.read = 0;
  this.addrSet = 0;
  for (let i = 0; i < numBits; i++) {
    this.input.push(0);
    this.output.push(null);
    this.addr.push(0);
  }
  this.addrMemCell = new MemCellMultiBit(this.numBits);
  this.decoderRow = new Decoder2x4();
  this.decoderCol = new Decoder2x4();
  this.registers = [];
  for (let row = 0; row < 4; row++) {
    this.registers.push([]);
    for (let col = 0; col < 4; col++) {
      this.registers[row].push(new RegRam(numBits));
    }
  }

  this.update = function () {
    this.addrMemCell.set = this.addrSet;
    this.addrMemCell.input = this.addr;
    this.addrMemCell.update();
    this.decoderRow.input = [
      this.addrMemCell.output[0],
      this.addrMemCell.output[1],
    ];
    this.decoderRow.update();
    this.decoderCol.input = [
      this.addrMemCell.output[2],
      this.addrMemCell.output[3],
    ];
    this.decoderCol.update();
    let registerOutputWrittenToBus = false;
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        this.registers[row][col].addrRow = this.decoderRow.output[row];
        this.registers[row][col].addrCol = this.decoderCol.output[col];
        this.registers[row][col].reset = this.reset;
        this.registers[row][col].set = this.write;
        this.registers[row][col].enable = this.read;
        this.registers[row][col].input = this.input;
        this.registers[row][col].update();
        let output = this.registers[row][col].output;
        let outputIsNull = output.every((value) => value === null);
        if (!outputIsNull) {
          if (registerOutputWrittenToBus) {
            console.log(
              "Warning: more than one register output written to bus."
            );
          }
          this.output = output;
          registerOutputWrittenToBus = true;
        }
      }
    }
    if (!registerOutputWrittenToBus) {
      this.output.fill(null);
    }
  };
}
