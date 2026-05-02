class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result=new Map();
        nums.sort((a,b)=>a-b);
        for(let i=0;i<nums.length;i++){
            let j=i+1;
            let k=nums.length-1;
            let target=0-nums[i];
            while(j<k){
                if(nums[j]+nums[k]>target){
                    k--;
                }
                else if(nums[j]+nums[k]<target){
                    j++;
                }
                else{
                    const value=[nums[i],nums[j],nums[k]];
                    const key=value.join('')
                    if(!result.has(key)){
                        result.set(key,value);
                    }
                    j++;
                    k--;
                }
            }
        }
        return Array.from(result.values());
    }
}


