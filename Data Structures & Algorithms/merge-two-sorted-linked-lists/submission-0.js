/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const list3Head=new ListNode();
        let temp=list3Head
        let temp1=list1
        let temp2=list2
        while(temp1&&temp2){
            if(temp1.val<=temp2.val){
                temp.next=temp1;
                temp1=temp1.next
            }
            else{
                temp.next=temp2
                temp2=temp2.next
            }
            temp=temp.next;
        }
        if(temp2){
            temp.next=temp2;
        }
        else if(temp1){
            temp.next=temp1
        }
        return list3Head.next;
    }
}

