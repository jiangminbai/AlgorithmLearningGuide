function digitNum (num) {
  return String(num).split('').reduce((all, item) => Number(all) + Number(item), 0)
}

function dfs (m, n, k) {

}

const d = dfs(40, 40, 18)
console.log(d)