class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const n=nums.length
        const result=[]
        nums.sort((a,b)=>a-b);
        for(let i=0;i<nums.length;i++){
            if(i>0&&nums[i]===nums[i-1]){
                continue;
            }
            if(nums[i]>0){
                break;
            }
            let target=0-nums[i];
            let j=i+1;
            let k=n-1;
            while(j<k){
                let pairSum=nums[j]+nums[k]
                if(pairSum===target){
                    result.push([nums[i],nums[j],nums[k]])
                    j++;
                    k--;
                    while(nums[j]===nums[j-1]){
                        j++;
                    }
                }
                else if(pairSum<target){
                    j++;
                }
                else{
                    k--;
                }
            }
        }
        return result
    }
}

[-2,0,0,2,2]


