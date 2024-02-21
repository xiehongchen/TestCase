/**
 * 问题：给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
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

var addTwoNumbers = function(l1, l2) {
    let flag = 0;
    let sum = 0;
    let v1, v2;
    let head = tail = l1;
    while(l1 || l2) {
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
