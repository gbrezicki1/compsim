import { And } from "./and.js";
import { toggleBit } from "../public/js/utils.js"

export function Decoder2x4() {
    this.input = [0,0];
    this.and = [new And(), new And(), new And(), new And()];

    this.update = function() {
        this.and[0].input1 = toggleBit(this.input[0]);
        this.and[0].input2 =  
    }
}