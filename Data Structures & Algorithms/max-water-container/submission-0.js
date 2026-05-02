class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i=0;
        let j=heights.length-1;
        let result=0;
        while(i<j){
            let minHeight=Math.min(heights[i],heights[j]);
            let volume=minHeight*(j-i);
            result=Math.max(volume,result);
            if(heights[i]<heights[j]){
                i++;
            }
            else{
                j--;
            }
        }
        return result;
    }
}
