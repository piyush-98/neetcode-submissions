class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    binarySearch(nums,target,l,r){
        while(l<=r){
            const mid=l + Math.floor((r-l)/2);
            if(nums[mid]===target){
                return mid;
            }
            if(nums[mid]<target){
                l=mid+1;
            }
            else{
                r=mid-1;
            }
        }
        return -1
    }

    search(nums, target) {
        let l=0;
        let r=nums.length-1;
        let pivot;
        while(l<r){
            const mid=l + Math.floor((r-l)/2);
            if(nums[mid]>nums[r]){
                l=mid+1;
            }
            else {
                r=mid
            }
        }
        pivot=l;
        const leftSearch=this.binarySearch(nums,target,0,pivot-1);
        if(leftSearch!==-1){
            return leftSearch;
        }
        return this.binarySearch(nums,target,pivot,nums.length-1)
    }
}
