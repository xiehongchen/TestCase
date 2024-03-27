/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // 进位
    let addOne = 0
    // 新链表，用于存储结果
    let sum = new ListNode('0')
    // 链表首位置
    let head = sum
    // 判断，进位、l1、l2是否为空
    while (addOne || l1 || l2) {
        // l1不为空，则val1 = l1.val
        let val1 = l1 !== null ? l1.val : 0
        // l2不为空，则val3 = l2.val
        let val2 = l2 !== null ? l2.val : 0
        // 两数相加结果，要加上进位哦
        let r1 = val1 + val2 + addOne
        // 判断结果是否大于10，如果大于10，则进位
        addOne = r1 >= 10 ? 1 : 0
        // sum的下一个节点为r1 % 10，也就是相加结果的个位数
        sum.next = new ListNode(r1 % 10)
        // 重新赋值sum
        sum = sum.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    return head.next
};

var addTwoNumbers = function (l1, l2) {
    let flag = 0;
    let sum = 0;
    let v1, v2;
    let head = tail = l1;
    while (l1 || l2) {
        v1 = l1 ? l1.val : 0;
        v2 = l2 ? l2.val : 0;
        sum = v1 + v2 + flag;

        tail.val = sum % 10;
        flag = sum >= 10 ? 1 : 0;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        if (!l1 && !l2 && flag) {
            tail.next = new ListNode(1, null);
            return head;
        }
        tail.next = l1 ? l1 : l2;
        tail = tail.next;
    }

    return head;
};
/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
const l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)
const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)
var addTwoNumbers = function (l1, l2) {
  let n = 0
  let head = null
  let tail = null
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0
    const n2 = l2 ? l2.val : 0
    const sum = n1 + n2 + n
    if (!head) {
      head = tail = new ListNode(sum % 10)
    } else {
      tail.next = new ListNode(sum % 10)
      tail = tail.next
    }
    n = Math.floor(sum / 10)
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  if (n > 0) {
    tail.next = new ListNode(n)
  }
  return head
};
// @lc code=end

console.log(addTwoNumbers(l1, l2))