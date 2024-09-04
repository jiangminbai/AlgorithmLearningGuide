function add(
  first,
  second,
  k
) {
  const all = []
  for (let i=0; i<first.length; i++) {
    for (let j=0; j<second.length; j++) {
      all.push(first[i] + second[j])
    }
  }
  all.sort((a, b) => a - b)
  return all.slice(0, k).reduce((num, item) => num + item, 0)
}

const a = add(
  [1, 1, 2],
  [1, 2, 3],
  2
)
console.log(a)