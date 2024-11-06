
export function Xor() {
    this.input1 = false;
    this.input2 = false;
    this.output = false;
    this.update = function() {
        this.output = this.input1 !== this.input2;
    }
}