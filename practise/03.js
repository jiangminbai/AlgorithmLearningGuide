function learn (n, words, chars) {
  const charsObj = {}
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i]
    charsObj[char] = typeof charsObj[char] === 'number' ? charsObj[char] + 1 : 1
  }
  if (typeof charsObj['?'] !== 'number') charsObj['?'] = 0
  let nn = 0 // words正确拼写数量
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    const wordObj = {}
    let cc = 0 // chars不够的数量
    for (let j = 0; j < word.length; j++) {
      const w = word[j]
      wordObj[w] = typeof wordObj[w] === 'number' ? wordObj[w] + 1 : 1
    }
    for (let key in wordObj) {
      const count = wordObj[key]
      const count1 = charsObj[key] || 0
      const cha = count - count1
      if (cha > 0) {
        cc +=cha
      }
    }
    if (cc === 0 || cc <= charsObj['?']) {
      nn += 1
    }
  }
  return nn
}

const m = learn(4, ['cat', 'bt', 'hat', 'tree'], 'atach??') // 3
const n = learn(3, ['hello', 'world', 'cloud'], 'welldonehoneyr') // 2
const r = learn(3, ['apple', 'car', 'window'], 'welldoneapplec?') // 2
console.log(m, n, r)