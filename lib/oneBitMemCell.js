import { Nand } from "./lib/nand.js";

export function OneBitMemCell() {
    this.name = "oneBitMemCell";
    this.input1 = false;
    this.input2 = false;
    this.nandGates = [];
    let numGates = 4;
    for (var i = 1; i < numGates; i++) {
        this.nandGates.push(new Nand());
    }
    
}