function exchange(
  A,
  B
) {
  A.sort((a, b) => a - b)
  B.sort((a, b) => a - b)

  const ANum = A.reduce((num, item) => num + item, 0)
  const BNum = B.reduce((num, item) => num + item, 0)
  const diff = (ANum - BNum) / 2

  for (let i=0; i<A.length; i++) {
    const a = A[i]
    for (let j=0; j<B.length; j++) {
      const b = B[j]
      if (a - b === diff) return [a, b]
    }
  }
}

const e = exchange(
  [1, 1],
  [2, 2]
)
console.log(e)

const e1 = exchange(
  [2],
  [1, 3]
)
console.log(e1)