export default function getFullResponseFromAPI(success) {
  const promise1 = new Promise((resolve, reject) => {
    const response = {
      status: 200,
      body: 'Success',
    };
    if (success) {
      resolve(response);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  return promise1;
}
