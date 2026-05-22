class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit=0;
        let leastBuyPrice=Number.MAX_VALUE;
        for(let i=0;i<prices.length;i++){
            if(prices[i]<leastBuyPrice){
                leastBuyPrice=prices[i]
            }
            else{
                maxProfit=Math.max(maxProfit,prices[i] - leastBuyPrice)
            }
        }
        return maxProfit
    }
}
