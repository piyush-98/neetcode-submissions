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
        const fleetStack=[]
        for(let car of fleetArr){
            const time=(target-car[0])/car[1];
            fleetStack.push(time)
            const n=fleetStack.length
            if(n>1 && fleetStack[n-1]<=fleetStack[n-2]){
                fleetStack.pop()
            }
            
        }
        return fleetStack.length
    }
}

