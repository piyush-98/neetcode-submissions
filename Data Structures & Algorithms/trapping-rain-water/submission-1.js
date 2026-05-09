class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n=height.length
        let i=0;
        let j=n-1;
        let lmax=height[i];
        let rmax=height[j];
        let result=0;
        while(i<j){
            if(lmax<=rmax){
                i++;
                if(i>j) break;
                let vol=lmax-height[i]
                if(vol>0){
                    result+=vol;
                }
                lmax=Math.max(lmax,height[i]);
            }
            else{
                j--;
                if(i>j) break;
                let vol=rmax-height[j];
                if(vol>0)
                result+=vol;
                rmax=Math.max(rmax,height[j]);
            }
        }
        return result;
    }
}

[0,2,0,3,1,0,1,3,2,1]
lmax=3
rmax=3



