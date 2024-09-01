function validate (str) {
  if (str.length < 8) return false
  if (!/[A-Z]/.test(str)) return false
  if (!/[a-z]/.test(str)) return false
  if (!/[0-9]/.test(str)) return false
  if (!/[^0-9a-zA-Z\s]/.test(str)) return false
  return true
}
function getRes (str) {
  const arr = str.split('')
  let index = 0
  while (index < arr.length) {
    const char = arr[index]
    if (char === '<') {
      arr.splice(index, 1)
      --index
      if (index >= 0) {
        arr.splice(index, 1)
        --index
      }
    }
    index++
  }
  const s = arr.join('')
  return [s, validate(s)]
}

const g = getRes('ABC<c89%000<')
const g1 = getRes('<ABC')
const g2 = getRes('AB<<C<')

console.log(g)
console.log(g1)
console.log(g2)