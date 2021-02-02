// Given a number num return the index value of the
// Fibonacci sequence, where the sequence is:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

/**
 * @param {number} num
 * @return {number}
 */

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
