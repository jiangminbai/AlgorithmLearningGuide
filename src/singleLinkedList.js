/**
 * 单向链表
 */

// 链表节点类
class LinkNode {
  constructor(key) {
    this.key = key
    this.next = null // next为null表示为链表尾
  }
}

// 单向链表类
class SingleLinkedList {
  constructor() {
    this.head = null // 表头，如果head为null表示长度为0
    this.tail = null // 表尾
    this.length = 0
  }

  /**
   * 搜索指定key值的节点
   * @param {number} key 节点的key值
   * @param {Object} node 节点
   */
  search(key) {
    let node = this.head
    while(node) {
      if (node.key === key) return node
      node = node.next
    }
    return null
  }

  /**
   * 插入节点
   * @param {Object} node 节点
   */
  insert(node) {
    if (this.tail) this.tail.next = node, this.tail = node
    if (this.length === 0) this.head = node, this.tail = node
    
    this.length++
  }

  /**
   * 删除链表中指定的节点
   * @param {Object} preNode 节点
   * @param {Object} node 节点
   */
  delete(preNode, node) {
    preNode.next = node.next
    this.length++
  }

  display(head) {
    let info = "["
    let node = head
    while(node) {
      info += `${node.key}->`
      node = node.next
    }
    info += 'NULL]'
    console.log(info)
  }
}

/**
 * 单向链表的时间复杂度
 * 与数组对比：在插入和删除方面优于数组，在搜索方面差于数组，数组支持通过索引随机访问
+--------+--------+--------+
| search | insert | delete |
+--------+--------+--------+
| O(n)   | O(1)   | O(1)   |
+--------+--------+--------+
 */

let list = new SingleLinkedList()
let nodea = new LinkNode('a')
let nodeb = new LinkNode('b')
let nodec = new LinkNode('c')
let noded = new LinkNode('d')
list.insert(nodea)
list.insert(nodeb)
list.insert(nodec)
list.insert(noded)
list.display(list.head)

// 反转单链表-遍历法
// {key:a,next}->{key:b,next}->{key:c,next}->{key:d,next}->null
function reverseList(head) {
  let [prev, node] = [null, head]
  while(node) {
    [node.next, prev, node] = [prev, node, node.next]
  }
  return prev
}

list.display(reverseList(list.head))
