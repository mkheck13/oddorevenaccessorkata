// Create a function or callable object that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. The function should also return "Even" or "Odd" when accessing a value at an integer index.

// For example:

// evenOrOdd(2); //'Even'
// evenOrOdd[2]; //'Even'
// evenOrOdd(7); //'Odd'
// evenOrOdd[7]; //'Odd'

// lets try a if statement out for this
// if its divisable by two it should return even
// this doesn't work for all of the tests
function evenOrOdd(n) {
  if (n % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// First, there's a function called target that takes a number and returns "Even" if the number is divisible by 2, or "Odd" if it's not.
// Then, a handler object is created with a special get method. This method will be called whenever someone tries to access a property of our proxied object.
// A Proxy object called evenOrOdd is created using the target function and the handler object.
// When you try to access any property of evenOrOdd, like evenOrOdd[5], the get method in the handler is triggered.
// This get method calls the target function, passing in the property name (which gets converted to a number) as an argument.
// The target function then determines if this number is even or odd and returns the result.


const target = function (n) {
  return n % 2 == 0 ? "Even" : "Odd";
};

const handler = {
  get(target, prop) {
    return target(prop);
  },
};

const evenOrOdd = new Proxy(target, handler);
