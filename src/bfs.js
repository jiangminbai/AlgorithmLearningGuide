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
 * 有向有环图不重复访问节点的策略：
 * 1.用散列表或者数组存储已经访问过的节点
 * 2.使用节点属性标记此节点是否被访问过
 * 时间复杂度：O(V+E) V表示节点数 E表示边数
 */
function bfs(name) {
  let searchQueue = [ name ] // 搜索队列
  let searched = {} // 搜索过的项目

  while(searchQueue.length) {
    let person = searchQueue.shift()
    if (person === 'thom') return true
    else {
      if (!searched[person]) {
        searched[person] = true
        searchQueue.push(...graph[person])
      }
    }
  }
  return false
}

console.log(bfs('you'))

/**
 * 广度优先搜索算法
 * 这里使用节点的颜色属性来解决节点重复访问问题
 */
// 图的数据结构-邻接链表表示法
const graph1 = new Map()
// 顶点
const v1 = { key: 1 }
const v2 = { key: 2 }
const v3 = { key: 3 }
const v4 = { key: 4 }
const v5 = { key: 5 }
const v6 = { key: 6 }

// 设置顶点和边
graph1.set('s', v1)
graph1.set(v1, [v2, v4])
graph1.set(v2, [v5])
graph1.set(v3, [v5, v6])
graph1.set(v4, [v2])
graph1.set(v5, [v4])
graph1.set(v6, [v6])