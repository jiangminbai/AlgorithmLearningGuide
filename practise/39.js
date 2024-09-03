function area (
  [N, E],
  commands
) {
  commands = [...commands, [E, undefined]]
  let x = 0
  let y = 0
  const areas = []
  for (let i=0; i<N+1; i++) {
    const item = commands[i]
    const width = item[0] - x
    const height = Math.abs(y)
    areas.push(width * height)
    x = item[0]
    y += item[1]
  }
  return areas.reduce((num, item) => num + item, 0)
}

const a = area(
  [4, 10],
  [
    [1, 1],
    [2, 1],
    [3, 1],
    [4, -2]
  ]
)

console.log(a)

const a1 = area(
  [2, 4],
  [
    [0, 1],
    [2, -2]
  ]
)
console.log(a1)