function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    if (number <= 3) {
      return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
    
    return true;
  }
  
  function checkFirstElementPrime(array) {
    if (array.length === 0) {
      return false; // No elements in the array
    }
    
    const firstElement = array[0];
    
    if (typeof firstElement !== 'number') {
      return false; // First element is not a number
    }
    
    return isPrime(firstElement);
  }
  
  // Example usage
  const myArray = [9, 4, 7, 11, 20];
  console.log(`the first number is prime - ${checkFirstElementPrime(myArray)}`);
  