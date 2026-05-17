class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l=0;
        let r=nums.length-1;
        let result=Number.MAX_VALUE;
        while(l<=r){
            const m=l+Math.floor((r-l)/2);
            result
            if(nums[l]<=nums[r]){
                result=Math.min(result,nums[l]);
                break;
            }
            result=Math.min(result,nums[m]);
            if(nums[m]>=nums[l]){
                l=m+1;
            }
            else{
                r=m-1;
            }
        }
        return result
    }
}