function getCount (
  teams,
  ability
) {
  teams.sort((a, b) => a - b)
  let count = 0
  while (teams.length) {
    const max = teams.pop()
    if (max >= ability) {
      count++
    } else {
      while (teams.length) {
        const left = teams.shift()
        if (left + max >= ability) {
          count++
          break;
        }
      }
    }
  }
  return count
}

const c = getCount(
  [3, 1, 5, 7, 9],
  8
)

console.log(c)