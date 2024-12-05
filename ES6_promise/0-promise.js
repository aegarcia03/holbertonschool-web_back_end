export default function getResponseFromAPI() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 300);
  });
}
