var maxProfit = function(prices) {
    let result = 0;
    
    for(let i=0; i<prices.length; i++) {
      result += prices[i] < prices[i+1] ? prices[i+1] - prices[i] : 0;
    }
    
    return result;
};