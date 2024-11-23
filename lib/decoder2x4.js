import { And } from "./and.js";
import { toggleBit } from "./utils.js"

export function Decoder2x4() {
  this.input = [0, 0];
  this.output = [0,0,0,0];
  this.and = [new And(), new And(), new And(), new And()];

  this.updateInput = function (input) {
    this.input = input;
    this.update();
  };

  this.update = function () {
    this.and[0].input1 = toggleBit(this.input[0]);
    this.and[0].input2 = toggleBit(this.input[1]);
    this.and[0].update();
    this.and[1].input1 = toggleBit(this.input[0]);
    this.and[1].input2 = this.input[1];
    this.and[1].update();
    this.and[2].input1 = this.input[0];
    this.and[2].input2 = toggleBit(this.input[1]);
    this.and[2].update();
    this.and[3].input1 = this.input[0];
    this.and[3].input2 = this.input[1];
    this.and[3].update();
    for (let i=0; i<4; i++) {
        this.output[i] = this.and[i].output;
    }
  };
}
