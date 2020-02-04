/**
 * B树：平衡多路搜索树
 * m阶的B树的特征：
 * 1.非空B树的根节点至少有两个孩纸
 * 2.每个中间节点包含(m/2)~m个子节点和(m/2-1)~(m-1)个关键字
 * 3.每个叶节点包含(m/2-1)~(m-1)个关键字
 * 4.所有叶子节点位于同一层
 * 5.每个节点的关键字从小到大排列，节点当中的关键字正好是子节点关键字包含的关键字值域划分
 */

/**
 * 每个节点x的属性
 * n：表示关键字的个数
 * leaf：是否为叶节点
 * key{Array}: 存储关键字的数组
 * c{Array}: 存储子节点的指针
 */

/**
 * 磁盘读取-这是一个耗时操作
 * @param {Object} x 树节点
 * @param {Number}} i 树节点持有子节点引用数组的坐标
 * @returns {Object} 树子节点
 */
function diskRead(x, i) {
  return x.c[i]
}

/**
 * 磁盘写入-将节点信息写入磁盘(这里为空操作)
 */
function diskWrite(x) {
}

/**
 * 为对象分配空间(这里是模拟写法)
 */
function allocNode() {
  return {
    n: 0,
    leaf: false,
    key: [],
    c: []
  }
}

/**
 * search：搜索关键字k
 */
function BTreeSearch(x, k) {
  let i = 0
  // 在节点x上查找关键字k所在的范围
  while(i < x.n && x.key[i] < k) {
    i++
  }
  if (k === x.key[i])
    return [x, i]
  else if (x.leaf)
    return null
  else {
    let childNode = diskRead(x, i)
    return BTreeSearch(childNode, k)
  }
}

/**
 * create：创建一棵空的B树
 */
function BTreeCreate(T) {
  let x = allocNode()
  x.n = 0
  x.leaf = true
  diskWrite(x)
  T.root = x
}

/**
 * 分裂
 * @param {Object} x 非满的内部节点
 * @param {number} i 是x.c[i]为满子节点的下标
 */
function BTreeSplitChild(x, i) {
  let y = x.c[i]
  let z = allocNode()
  z.leaf = y.leaf
  z.n = t - 1

  // 以x.c[i]中间关键字为分界线，右边部分划给z节点
  for (let j = 0; j < t - 1; j++) {
    z.key[j] = y.key[j + t]
  }
  if (!z.leaf) {
    for (let j = 0; j < t; j++) {
      z.c[j] = y.c[j + t]
    }
  }
  // 以x.c[i]中间关键字为分界线，左边部分划给y节点
  y.n = t - 1
  y.key.length = t - 1
  y.c.length = t
  // 把x.c[i]中间关键字提升到x节点
  for (j = x.n + 1; j > i + 1; j--) {
    x.c[j+1] = x.c[j]
  }
  x.c[i+1] = z
  for (j = x.n; j > i; j--) {
    x.key[j+1] = x.key[j]
  }
  x.key[i+1] = y.key[t]
  x.n = x.n + 1
  diskWrite(x)
  diskWrite(y)
  diskWrite(z)
}

/**
 * insert：向B树种插入一个关键字
 * @param {Object} 根节点
 * @param {number} 关键字
 */

function BTreeInsert(T, k) {
  let r = T.root
  if (r.n === 2 * t - 1) {
    let s = allocNode()
    T.root = s
    s.leaf = false
    s.n = 0
    s.c[0] = r
    BTreeSplitChild(s, 0)
    BTreeInsertNonFull(s, k)
  } else {
    BTreeInsertNonFull(r, k)
  }
}

/**
 * 向非满内部节点插入关键字
 * @param {Object} x 树节点
 * @param {number} k 关键字
 */
function BTreeInsertNonFull(x, k) {
  let i = x.n
  if (x.leaf) {
    while (i >= 1 && k < x.key[i]) {
      x.key[i + 1] = x.key[i]
      i--
    }
    x.key[i + 1] = k
    x.n = x.n + 1
    diskRead(x)
  } else {
    while (i >= 1 && k < x.key[i]) {
      i--
    }
    i++
    diskRead(x.c[i])
    if (x.c[i].n === 2 * t - 1) {
      BTreeSplitChild(x, i)
      if (k > x.key[i]) {
        i++
      }
    }
    BTreeInsertNonFull(x.c[i], k)
  }
}