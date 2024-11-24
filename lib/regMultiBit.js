import { MemCellMultiBit } from "./memCellMultiBit.js";
import { EnableMultiBit } from "./enableMultiBit.js";

export function RegMultiBit(numBits) {
    this.numBits = numBits;
    this.memCellMultiBit = new MemCellMultiBit(numBits);
    this.enableMultiBit = new EnableMultiBit(numBits)
    this.set = 0;
    this.enable = 0;
    this.input = [];
    this.output = [];
    for (let i=0; i < numBits; i++) {
        this.input.push(0);
        this.output.push(null);
    }
    this.update = function() {
        this.memCellMultiBit.set = this.set;
        this.memCellMultiBit.input = this.input;
        this.memCellMultiBit.update();
        this.enableMultiBit.enable = this.enable;
        this.enableMultiBit.input = this.memCellMultiBit.output;
        this.enableMultiBit.update();
        this.output = this.enableMultiBit.output;
    }
}