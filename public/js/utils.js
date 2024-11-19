
export function colorFromBitValue(bitValue) {
  let color;
  if (bitValue === 0) {
    color = "gray";
  } else {
    color = "green";
  }
  return color;
}