function fizzbuzznum(num) {
  var isFizz = num % 3 == 0;
  var isBuzz = num % 5 == 0;
  if (isFizz && isBuzz) return 'FizzBuzz';
  if (isFizz) return 'Fizz';
  if (isBuzz) return 'Buzz';
  return num;
}

module.exports.fizzbuzznum = fizzbuzznum
