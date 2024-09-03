function get (
  N,
  heights,
  weights,
) {
  const mp = []
  for (let i=0; i<heights.length; i++) {
    mp.push({
      num: i + 1,
      height: heights[i],
      weight: weights[i]
    })
  }

  for (let i=0; i<mp.length; i++) {
    for (let j=i; j<mp.length; j++) {
      if (i !== j) {
        if (mp[i].height > mp[j].height) {
          let temp = mp[i]
          mp[i] = mp[j]
          mp[j] = temp
        } else if (mp[i].height === mp[j].height) {
          if (mp[i].weight > mp[j].weight) {
            let temp = mp[i]
            mp[i] = mp[j]
            mp[j] = temp
          }
        }
      }
    }
  }
  return mp.map(item => item.num)
}

const g = get(
  4,
  [100, 100, 120, 130],
  [40, 30, 60, 50]
)
console.log(g)