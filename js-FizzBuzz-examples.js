// ============================
//  My attempt(s)
// ============================

// for numbers 1—100
for (i = 1; i <= 100; i++) {
  // if it's divisible by both 3 & 5, print 'FizzBuzz'
  if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz')
  // if it's divisible by 3, print 'Fizz'
  else if (i % 3 === 0) console.log('Fizz')
  // if it's divisible by 5, print 'Buzz'
  else if (i % 5 === 0) console.log('Buzz')
  // otherwise, print the current number
  else console.log(i)
}

// ============================
//  Clever solutions
// ============================

// Paul Irish - https://gist.github.com/jaysonrowe/1592432
for (i = 1; i <= 100; i++) {
  var fizz = i % 3 == 0, buzz = i % 5 == 0
  console.log(fizz ? buzz ? 'FizzBuzz' : 'Fizz' : buzz ? 'Buzz' : i)
}
