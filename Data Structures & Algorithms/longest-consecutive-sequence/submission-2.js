class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet=new Set();
        let result=0
        for(let item of nums){
            numSet.add(item)
        }
        for(let item of nums){
            if(!numSet.has(item-1)){
                let i=item;
                while(numSet.has(i)){
                    i++;
                }
                result=Math.max(result,i-item);
            }
        }
        return result;
    }
}






