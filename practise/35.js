function time (
  task,
  tasks
) {
  let queue = 0
  let t = 0
  while (queue > 0 || t < tasks.length) {
    if (tasks[t]) {
      queue += tasks[t]
    }
    t++
    queue = queue - task > 0 ? queue - task : 0
  }
  return t
}

const t = time(
  3,
  [1, 2, 3, 4, 5]
)
console.log(t)

const t1 = time(
  4,
  [5, 4, 1, 1, 1]
)
console.log(t1)