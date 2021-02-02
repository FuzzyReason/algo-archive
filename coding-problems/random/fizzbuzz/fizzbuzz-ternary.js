/**
 * @param {number} num
 */

function fizzBuzz(num) {
  if (num <= 0) return null;

  for (var i = 1; i <= num; i++) {
    var fizz = i % 3 == 0,
      buzz = i % 5 == 0;
    console.log(fizz ? (buzz ? "FizzBuzz" : "Fizz") : buzz ? "Buzz" : i);
  }
}
