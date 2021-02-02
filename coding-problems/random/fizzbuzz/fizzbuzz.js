/**
 * @param {number} num
 */

function fizzBuzzTest(num) {
  if (num <= 0) return null;

  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
