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
    this.addrA = 0;
    this.addrB = 0;
    for (let i=0; i<this.numBits; i++) {
        this.input.push(0);
        this.output.push(null);
    }
    this.orReset = new Or();
    this.andAddr = new And();
    this.andSet = new And();
    this.andEnable = new And();
    this.reg = new RegMultiBit(numBits);

    this.update = function() {
        this.andAddr.input1(this.addrA);
        this.andAddr.input2(this.addrB);
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
        this.reg.updateSet(this.orReset.output);
        this.reg.updateEnable(this.andEnable.output);
        this.reg.updateInput(this.input);
        this.output = this.reg.output;

        this.updateReset = function(reset) {
            this.reset = reset;
            this.update();
        }

        this.updateAddrA = function(addrA) {
            this.addrA = addrA;
            this.update();
        }

        this.updateAddrB = function(addrB) {
            this.addrB = addrB;
            this.update();
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
}