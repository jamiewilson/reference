// This is the introduction to the “Composing Software” series on learning functional programming and compositional
// software techniques in JavaScript ES6+ from the ground up. Stay tuned. There’s a lot more of this to come!
// https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea

// ============================
//  Ternary operator variable assignment
// ============================

var myAge = 16, votingAge = 18
var canVote = myAge >= votingAge ? true : false

// ============================
//  Short circuit variable assignment
// ============================

var myAge = 18, votingAge = 18
var canVote = myAge >= votingAge || false

// ============================
//  Building composites with class inheritance:
// ============================

class Milk {
  constructor () {
    this.base = { milk: 'whole' }
  }
}

class Milkshake extends Milk {
  constructor (options) {
    super(options)
    this.additions = { iceCream: 'vanilla' }
  }
}

const myMilkshake = new Milkshake()
// { base: { milk: 'whole' }, additions: { iceCream: 'vanilla' }

// ============================
//  Building composites with mixin composition:
// ============================

const base = { milk: 'whole' }
const additions = { iceCream: 'vanilla' }

const myMilkshake = { base, additions }
// { base: { milk: 'whole' }, additions: { iceCream: 'vanilla' }

// ============================
//  Function Composition
// ============================

const inc = n => n + 1
const double = n => n * 2
const doStuffBetter = x => inc(double(x))
doStuffBetter(20)
// 42

// ============================
//  unary and n-ary function epressions
// ============================

function sum(x, y) {
  return x + y
}

function first(x) {
 function second(y) {
    return x + y
  }
}

// ============================
//  Composing Two Functions
// ============================

// compose() takes the double function as the first argument, the inc function as the second,
// then applies the composition of those two functions to the argument 3
const compose = first => second => arg => first(second(arg))

const double = x => x * 2
const increment = x => x + 1

compose(double)(increment)(3)

// Non ES6 version for comparison
const double = function(n) {
  return n * 2
}

const inc = function(n) {
  return n + 1
}

const compose = function(first) {
  return function(second) {
    return function(argument) {
      return first(second(argument))
    }
  }
}

// ============================
//  Destructuring
// ============================

const [ one, two ] = [ 1, 2 ]
one // 1
two // 2

const obj = { key: 'value' }

// The following is equivalent to: const key = obj.key
const { key } = obj
key // 'value'

// Using a different name for the new binding
const { key: newKey } = obj
newKey // 'value'

// ============================
//  Default Function parameters
// ============================

// Returns the argument or if none is supplied, returns 0
const orZero = (n = 0) => n

// ============================
//  Named Arguments with Default Parameters
// ============================

const createUser = ({
  name = 'Anonymous',
  avatar = 'avatar.png'
}) => ({
  name,
  avatar
})

const george = createUser({
  name: 'George',
  avatar: 'george.png'
})

george
// {
//   name: 'George',
//   avatar: 'george.png'
// }

// ============================
//  Rest/Spread Operator
// ============================

const firstToLast = (firstArg, ...otherArgs) => [...otherArgs, firstArg]
firstToLast(1, 2, 3, 4, 5) // [2, 3, 4, 5, 1]

// ============================
//  Autocurry helper
// ============================

const curry = (f, arr = []) => (...args) => (a => a.length === f.length ? f(...a) : curry(f, a))([...arr, ...args])
const add3 = curry((a, b, c) => a + b + c)
add3(1, 2, 3) // 6
add3(1, 2)(3) // 6
add3(1)(2, 3) // 6
add3(1)(2)(3) // 6

// ============================
//  Array methods
// ============================

// Map: applies a function to each item in the array
const double = n => n * 2
[1, 2, 3].map(double) // [2, 4, 6]


// https://medium.com/javascript-scene/higher-order-functions-composing-software-5365cf2cbe99#.egoxjg6x7
