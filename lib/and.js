export function And() {
  this.name = "and";
  this.input1 = 0;
  this.input2 = 0;
  this.output = 0;
  this.update = function () {
    this.output = Number(Boolean(this.input1) && Boolean(this.input2));
  };
}
