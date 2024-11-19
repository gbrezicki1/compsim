export function update_gate(gate, input, value) {
  if (input.toLowerCase().includes("input1")) {
    gate.input1 = value;
  } else {
    gate.input2 = value;
  }
  gate.update();
}


export function toggleBit(inputValue) {
  if (inputValue === 0) {
    return 1;
  } else if (inputValue === 1) {
    return 0;
  } else {
    console.log("Input value to toggleBit() must be zero or one.");
  }
}
