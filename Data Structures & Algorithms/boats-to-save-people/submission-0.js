class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b)=>{
            return a-b;
        })
        let i=0;
        let j=people.length-1;
        let result=0
        while(i<=j){
            const sum=people[i]+people[j]
            if(sum<=limit||(i==j&&people[i]<=limit)){
                j--;
                i++;
            }
            else{
                j--;
            }
            result++;
        }
        return result;
    }
}


