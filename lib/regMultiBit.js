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
        this.memCellMultiBit.updateSet(this.set);
        this.memCellMultiBit.updateInput(this.input);
        this.enableMultiBit.updateEnable(this.enable);
        this.enableMultiBit.updateInput(this.memCellMultiBit.output);
        this.output = this.enableMultiBit.output;
    }
    this.updateSet = function(set) {
        this.set = set;
        this.update();
    }
    this.updateEnable = function(enable) {
        this.enable = enable;
        this.update();
    }
    this.updateInput = function(input) {
        this.input = input;
        this.update();
    }
    
}