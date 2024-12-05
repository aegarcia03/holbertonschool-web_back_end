import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise.allSettled(promises).then((results) => {
    const arr = [];
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        arr.push({
          status: result.status,
          value: result.value, // Push the fulfilled result
        });
      } else {
        arr.push({
          status: result.status,
          value: `Error: ${result.reason.message}`, // Push the rejected error message
        });
      }
    });
    return arr;
  });
}
