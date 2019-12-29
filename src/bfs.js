/**
 * 图和广度优先搜索算法(breadth-first search)
 */

/**
 * 图数据结构
 */
const graph = {
  you: ['alice', 'bob', 'claire'],
  bob: ['anuj', 'peggy'],
  alice: ['peggy'],
  claire: ['thom', 'jonny'],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: []
}

/**
 * 广度优先搜索算法
 * @param {String} name 图的起始节点
 */
function bfs(name) {
  let searchQueue = [ name ] // 搜索列表->队列
  let searchedQueue = [] // 搜索过的项目

  while(searchQueue.length) {
    let person = searchQueue.shift()

    if (person === 'thom') return true
    else {
      let searched = false
      for(let i = 0; i < searchedQueue.length; i++) {
        if (searchedQueue[i] === person) {
          searched = true
          break
        }
      }
      // let searched = searchedQueue.indexOf(person) > -1
      if (!searched) {
        searchedQueue.push(person)
        searchQueue.push(...graph[person])
      }
    }
  }
  return false
}

console.log(bfs('you'))

/**
 * 图：由节点和边组成。有向图：边有箭头，表示方向，是单向的； 无向图：边无箭头
 * 广度优先搜索算法时间复杂度：O(V+E) V表示节点数 E表示边数
 */