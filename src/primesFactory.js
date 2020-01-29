export function isPrime(int) {
  if (int <= 1) {
    return false;
  }
  for (var x = int - 1; x > 1; x--) {
    if (int % x === 0) {
      return false;
    }
  }
  return true;
}

export function nthPrime(n) {
  if (n < 1) {
    return null;
  }
  var primeCount = 0;
  for (var x = 0; primeCount <= n; x++) {
    if (isPrime(x)) {
      primeCount += 1;
    }
    if (primeCount === n) {
      return x;
    }
  }
}
