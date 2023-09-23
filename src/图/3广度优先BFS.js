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
 * 场景：最短距离
 */
// 图的数据结构-邻接链表表示法
const graph1 = new Map()
// 节点
const v1 = { key: 1 }
const v2 = { key: 2 }
const v3 = { key: 3 }
const v4 = { key: 4 }
const v5 = { key: 5 }
const v6 = { key: 6 }

// 设置顶点和边
graph1.set(v1, [v2, v4])
graph1.set(v2, [v5])
graph1.set(v3, [v5, v6])
graph1.set(v4, [v2])
graph1.set(v5, [v4])
graph1.set(v6, [v6])

/**
 * BFS搜索算法-构建一颗广度优先搜索树
 * @param {Map} g 图
 * @param {Object}} s 源节点
 */
const WHITE = 0
const GRAY = 1
const BLACK = 2

function bfs1(g, s) {
  // 1.遍历每个节点，为每个节点赋予额外属性
  // 属性包括节点颜色color、与源节点s的距离d、节点的父节点p
  for (let v of g.keys()) {
    v.color = WHITE
    v.d = Number.MAX_VALUE
    v.p = null
  }
  
  // 2.设置源节点的颜色为灰色,并把源节点推入队列Q中
  const Q = []
  s.color = GRAY
  s.d = 0
  s.p = null
  Q.push(s)

  // 3.将顶点推出队列Q并设置为黑色;将顶点关联的邻接点关联数组的所有节点颜色设置为灰色并推入队列Q中
  while(Q.length) {
    let u = Q.shift()
    
    for (let v of g.get(u)) {
      if (v.color === WHITE) {
        v.color = GRAY
        v.d = u.d + 1
        v.p = u
        Q.push(v)
      }
    }

    u.color = BLACK
  }
}