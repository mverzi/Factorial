/**
 * This function returns the factorial of a number between 0 and 12
 * @param {integer} n 
 * @returns factorial of n
 */
function factorial(n) {
    if (n < 0 || n > 12)
      throw new RangeError('Number must be in range') 
    return n === 0 || n === 1 ? 1 : n * factorial(n-1)
  }