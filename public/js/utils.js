
export function colorFromBitValue(bitValue) {
  if (bitValue === 0) {
    return "gray";
  } else if (bitValue === 1 ) {
    return "green";
  } else {
    return "blue"
  }
}