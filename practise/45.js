function last (arr) {
  const lastItem = arr[arr.length - 1]
  return lastItem[lastItem.length - 1]
}
function calc (str) {
  const nreg = /[0-9]/
  const creg = /[\-|\+|\*]/
  const arr = [[]]
  for (let i=0; i< str.length; i++) {
    const item = str[i]
    if (nreg.test(item) && (!last(arr) || nreg.test(last(arr)) || creg.test(last(arr)))) {
      arr[arr.length - 1].push(item)
    } else if (creg.test(item) && nreg.test(last(arr))) {
      arr[arr.length - 1].push(item)
    } else {
      arr.push([])
    }
  }
  const maxLen = Math.max(...arr.map(item => item.length))
  const target = arr.find(item => item.length === maxLen)
  return eval(target.join(''))
}

const c = calc('1-2abc')
console.log(c)