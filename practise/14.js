function getSort (
  [studentsCount, subjectsCount],
  info,
  sub
) {
  const subs = info[0]
  const students = []
  const infoRest = info.slice(1)
  for (let i = 0; i < infoRest.length; i++) {
    const row = infoRest[i]
    const rowRest = row.slice(1)
    const student = {
      name: row[0],
    }
    for (let j = 0; j < rowRest.length; j++) {
      student[subs[j]] = rowRest[j]
    }
    students.push(student)
  }
  if (subs.includes(sub)) {
    return students.sort((a, b) => b[sub] - a[sub]).map(item => item.name)
  } else {
    return students.sort((a, b) => {
      const as = subs.map(sub => a[sub]).reduce((all, item) => all + item, 0)
      const bs = subs.map(sub => b[sub]).reduce((all, item) => all + item, 0)
      return bs - as
    }).map(item => item.name)
  }
}

const g = getSort(
  [3, 2],
  [
    ['yuwen', 'shuxue'],
    ['fangfang', 95, 90],
    ['xiaohua', 88, 95],
    ['minmin', 100, 82],
  ],
  'shuxue'
)

console.log(g)

const g1 = getSort(
  [3, 2],
  [
    ['yuwen', 'shuxue'],
    ['fangfang', 95, 90],
    ['xiaohua', 88, 95],
    ['minmin', 90, 95],
  ],
  'zongfen'
)

console.log(g1)