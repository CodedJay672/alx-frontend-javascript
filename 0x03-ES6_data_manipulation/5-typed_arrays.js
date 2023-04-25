export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const arrayBuffer = new Int8Array(buffer);
  arrayBuffer[position] = value;
  return arrayBuffer;
}
