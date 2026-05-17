class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const maxHours=Math.max(...piles)
        let l=1
        let r=maxHours;
        while(l<r){
            const mid=l+Math.floor((r-l)/2);
            let totalHours=0;
            for(let item of piles){
                totalHours+=Math.ceil(item/mid);
            }   
            if(totalHours>h){
                l=mid+1;
            }
            else{
                r=mid;
            }
            
        }
        return l;
    }
}
