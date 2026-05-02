class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result=[]
        nums.sort((a,b)=>a-b);
        for(let i=0;i<nums.length;i++){
            if(nums[i]>0){
                break
            }
            if(i>0&&nums[i]===nums[i-1]){
                continue
            }
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
                    result.push(value)
                    j++;
                    k--;
                    while(j<k&&nums[j]===nums[j-1]){
                        j++;
                    }
                }
            }
        }
        return result
    }
}

[-1,-1,-1,0,1,2,2,4]


