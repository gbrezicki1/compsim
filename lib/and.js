
export function And() {
    this.output = false;
    this.update = function(input1,input2) {
        this.output = input1 && input2;
    }
}