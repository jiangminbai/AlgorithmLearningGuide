function count (urls, [index, str]) {
  const u = urls.map(item => item.split('/'))
  let num = 0
  u.forEach(element => {
    if (element[index - 1] === str) {
      num++
    }
  });
  return num
}

const c = count(
  [
    'huawei/computing/no/one',
    'huawei/computing',
    'huawei',
    'huawei/cloud/no/one',
    'huawei/wireless/no/one',
  ],
  [2, 'computing']
)
console.log(c)