export function update_gate(gate, input, value) {
    if (input.toLowerCase().includes("input1")) {
      gate.input1 = value;
    } else {
      gate.input2 = value;
    }
    gate.update();
  }
  