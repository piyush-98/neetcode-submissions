class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l=1;
        let r=Math.max(...piles);
        let result=Number.MAX_VALUE;
        while(l<=r){
            const mid=l+Math.floor((r-l)/2);
            let temp=0
            for(let pile of piles){
                temp+=Math.ceil(pile/mid);
            }
            if(temp<=h){
                result=Math.min(result,mid);
                r=mid-1
            }
            else{
                l=mid+1;
            }

        }
        return result
    }
}


