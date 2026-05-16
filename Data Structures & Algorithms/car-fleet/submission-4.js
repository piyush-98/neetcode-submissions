class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const fleetArr=position.map((item,index)=>[item,speed[index]])
        fleetArr.sort((a,b)=>b[0]-a[0]);
        let latestCarTime=-1
        let result=1
        for(let car of fleetArr){
            const time=(target-car[0])/car[1];
            if(latestCarTime>0 && time>latestCarTime){
                result++;
            }
            latestCarTime=Math.max(time,latestCarTime)
            
        }
        return result
    }
}
[4,1],[2,3],[0,2]
6


