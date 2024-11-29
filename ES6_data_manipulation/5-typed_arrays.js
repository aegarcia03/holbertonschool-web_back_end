export default function createInt8TypedArray(length, position, value) {
  // Create an ArrayBudder of the given length
  const buffer = new ArrayBuffer(length);
  // Create a DataView to interact with the buffer
  const view = new DataView(buffer);

  // Check if the position is valid
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  view.setInt8(position, value);
  return view;
}
