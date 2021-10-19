export const generateRandomNumbers = (max, length, exception) => {
  // all parameters should be integer
  const arr = [];

  while (arr.length !== length) {
    const num = Math.floor(Math.random() * (max + 1));
    // check whether the array already has this number or the number is = to `exception`
    !arr.includes(num) && num !== exception && arr.push(num);
  }
  return arr
}