class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet=new Set();
        for(let item of nums){
            numsSet.add(item);
        }
        let temp=0
        let result=0
        for(let item of nums){
            if(!numsSet.has(item-1)){
                temp=0
                for(let i=item;numsSet.has(i);i++){
                    temp++;
                }
                result=Math.max(temp,result);
            }
        }
        return result;
    }
}


[4,20,2,10,3,4,5]
{4,20,2,10.3,5}









