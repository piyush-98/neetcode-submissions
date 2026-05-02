class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a,b)=>a-b);
        let temp=0;
        let result=0;
        let prev=null;
        for(let i=0;i<nums.length;i++){
            if(prev===null||(nums[i]-prev===1)){
                temp++;
            }
            else if(nums[i]-prev>1){
                temp=1;
            }
            prev=nums[i];
            result=Math.max(result,temp);
        }
        return result
    }
}


