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
    this.head = null // head为表头，如果head为null表示长度为0
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
   * @param {Object} preNode 节点
   * @param {Object} node 节点
   */
  insert(preNode, node) {
    // 插入到中间
    if (node) {
      node.next = preNode.next
      preNode.next = node
    } else {
      // 插入到表头
      node = preNode
      node.next = this.head
      this.head = node
    }
    
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
