/**
 * @param {number} num
 * @return {number}
 */

function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}
