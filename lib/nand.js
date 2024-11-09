export function Nand() {
  this.name = "nand";
  this.input1 = false;
  this.input2 = false;
  this.output = true;
  this.update = function () {
    this.output = !(this.input1 && this.input2);
  };
}
