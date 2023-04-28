export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const arrayBuffer = new Int8Array(buffer);
  if (position > arrayBuffer.length) {
    throw new Error('Position outside range');
  } else {
    arrayBuffer[position] = value;
  }
  return new DataView(buffer);
}
