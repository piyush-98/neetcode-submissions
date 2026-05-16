class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result=Array(temperatures.length).fill(0)
        const dataStack=[]
        dataStack.push([temperatures[0],0]);
        for(let i=1;i<temperatures.length;i++){
            while(dataStack.length&&dataStack[dataStack.length-1][0]<temperatures[i]){
               const oldDayData= dataStack.pop();
               result[oldDayData[1]]= i - oldDayData[1]
            }
            dataStack.push([temperatures[i],i])
        }
        return result
    }
}