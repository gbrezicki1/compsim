export function Or() {
  this.name = "or";
  this.input1 = 0;
  this.input2 = 0;
  this.output = false;
  this.update = function () {
    this.output = Number(Boolean(this.input1) || Boolean(this.input2));
  };
}
