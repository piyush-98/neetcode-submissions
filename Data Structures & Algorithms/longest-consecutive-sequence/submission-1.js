class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a,b)=>a-b);
        let prev=null
        let i=0;
        let result=0;
        let temp=0
        while(i<nums.length){
            if(prev!==null&&Math.abs((nums[i]-prev))===1){
                temp++;
            }
            else if(prev===null||Math.abs(nums[i]-prev)>0){
                temp=1
            }
            result=Math.max(result,temp);
            prev=nums[i]
            i++;
        }
        return result
    }
}

