class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix=Array(nums.length).fill(1)
        const suffix=Array(nums.length).fill(1);
        let i=1;
        let j=nums.length-2;
        while(i<nums.length&&j>=0){
            prefix[i]=prefix[i-1]*nums[i-1];
            suffix[j]=suffix[j+1]*nums[j+1];
            i++;
            j--;
        }
        const result=Array(nums.length).fill(1);
        for(let i=0;i<result.length;i++){
            result[i]=prefix[i]*suffix[i];
        }
        return result
    }
}