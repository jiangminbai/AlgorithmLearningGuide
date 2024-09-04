function prime (n) {
  let res = [-1, -1]
  for (let i=2; i<=n-1; i++) {
    const rest = n % i
    if (rest === 0) {
      if (prime(i)[0] === -1 && prime(n / i)[0] === -1) {
        res = [i, n / i]
      }
    }
  }
  return res
}

const p = prime(15)
console.log(p)
const p1 = prime(27)
console.log(p1)