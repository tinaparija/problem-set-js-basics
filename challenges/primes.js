/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE

let isPrime = function(num) {
	var factors = 0; 
	for (let i=2; i<num; i++){
		if (num%i==0){
			factors+=1; 
		}
	}
	if (factors>0){
		return false; 
	}
	else{
		return true; 
	}
};


let primes = function(max){
	let primeNumbers = [1]; 
	for (let i=2; i <= max; i++){
		let verifier = isPrime(i);
		if (verifier) {
			primeNumbers.push(i);
		}
	}
	console.log(primeNumbers);
}; 

primes(19);