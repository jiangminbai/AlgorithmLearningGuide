function max (
  m,
  commands
) {
  let steps = 0
  const offset = [0]
  for (let i=0; i<commands.length; i++) {
    let command = commands[i]
    if (command === m) {
      if (m > 0) command++
      command--
    }
    steps += command
    offset.push(steps)
  }
  return Math.max(...offset)
}

const m = max(
  1,
  [-5, 1]
)
console.log(m)

const m1 = max(
  -5,
  [-5, 1, 6, 0, -7]
)
console.log(m1)