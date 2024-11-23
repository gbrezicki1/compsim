import { Decoder2x4 } from "../lib/decoder2x4.js";

let decoder = new Decoder2x4();
console.log(decoder.output);
decoder.updateInput([0,1]);
console.log(decoder.output);
decoder.updateInput([1,0]);
console.log(decoder.output);
decoder.updateInput([1,1]);
console.log(decoder.output);