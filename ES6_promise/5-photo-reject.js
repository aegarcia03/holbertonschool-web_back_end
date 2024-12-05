export default function uploadPhoto(filename) {
  const rejectedPromise = Promise.reject(
    new Error(`${filename} cannot be processed`),
  );

  return rejectedPromise;
}
