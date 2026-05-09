class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const prefix=Array(height.length).fill(0);
        const suffix=Array(height.length).fill(0);
        let prefixTaller=height[0];
        for(let i=0;i<height.length-1;i++){
            prefixTaller=Math.max(height[i],prefixTaller);
            prefix[i+1]=prefixTaller;
        }
        let suffixTaller=height[height.length-1];
        for(let i=height.length-1;i>0;i--){
            suffixTaller=Math.max(height[i],suffixTaller);
            suffix[i-1]=suffixTaller;
        }
        let result=0
        for(let i=0;i<height.length;i++){
            let vol=(Math.min(prefix[i],suffix[i])-height[i])
            if(vol>0){
                result+=vol;
            }
        }
        return result;
    }
}
