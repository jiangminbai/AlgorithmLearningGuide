/**
 * 双向链表
 */

// 链表节点
class LinkNode {
  constructor(key) {
    this.key = key
    this.prev = null // 前驱节点
    this.next = null // 后继节点
  }
}

// 双向链表类
class DoubleLinkedList {
  constructor() {
    this.head = null // 表头
    this.tail = null // 表尾
    this.length = 0
  }

  /**
   * 搜索
   * @param {String} key key值
   */
  search(key) {
    let node = this.head
    while(node) {
      if (node.key === key) {
        return node
      }
      node = node.next
    }
    return null
  }

  /**
   * 插入表头
   * @param {Object} node 节点
   */
  insert(node) {
    node.next = this.head
    if (this.head) this.head.prev = node
    this.head = node
    if (this.length === 0) this.tail = node
    this.length++
  }

  /**
   * 删除节点
   * @param {Object} node 节点
   */
  delete(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
  }
}

/**
 * 双向链表的时间复杂度
+--------+--------+--------+
| search | insert | delete |
+--------+--------+--------+
| O(n)   | O(1)   | O(1)   |
+--------+--------+--------+
 */