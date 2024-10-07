function x(a) {
  // 'y' forms a closure, capturing the variable 'a' from the outer function 'x'
  function y(b) {
    // 'z' forms a closure, capturing both 'a' from 'x' and 'b' from 'y'
    function z(c) {
      // 'z' has access to variables 'a', 'b', and 'c' due to closures
      return a + b + c;
    }
    return z;
  }
  return y;
}

const a = x(10); // 'a' is now a function that takes 'b' (inner function 'y')
let b = a(20); // 'b' is now a function that takes 'c' (innermost function 'z')
let c = b(30); // 'c' evaluates the sum of 'a', 'b', and 'c'

console.log(c); // Output: 60

// Explanation of closure:
// A closure is when a function retains access to variables from its outer scope,
// even after the outer function has returned. In the above code, 'y' forms a
// closure that retains access to the 'a' variable from 'x', and 'z' forms a closure
// that retains access to both 'a' from 'x' and 'b' from 'y'. Thus, when 'z' is
// called, it can use all three variables: 'a', 'b', and 'c'.
