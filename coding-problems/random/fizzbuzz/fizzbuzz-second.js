/**
 * @param {number} num
 */

function fizzBuzz(num) {
  if (num <= 0) return null;

  for (let i = 1; i <= num; i++) {
    let str = "";
    if (!(i % 3)) str += "Fizz";
    if (!(i % 5)) str += "Buzz";
    console.log(str || i);
  }
}
