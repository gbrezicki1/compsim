export function Nand() {
  this.name = "nand";
  this.input1 = 0;
  this.input2 = 0;
  this.output = 1;
  this.update = function () {
    this.output = Number(!(Boolean(this.input1) && Boolean(this.input2)));
  };
}
