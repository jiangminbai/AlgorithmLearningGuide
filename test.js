console.log('main1')
new Promise((resolve, reject) => {
  resolve('promise1')
}).then(res => {
  console.log(res)
})
new Promise((resolve, reject) => {
  resolve('promise2')
}).then(res => {
  console.log(res)
})
console.log('main2')