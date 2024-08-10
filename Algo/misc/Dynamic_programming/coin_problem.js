// CASE 1: what is the minimum number of coins combinations required to produce a sum "n"

// CASE 2: given sum "n", in how many ways we can form this sum from given sets of coin?

const minimum_coin_combination = (sum, coinsList) => {
    const dp = Array(sum + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i < coinsList.length; i++) {
        for (let j = coinsList[i]; j <= sum; j++) {
            dp[j] = Math.min(dp[j], dp[j - coinsList[i]] + 1);
        }
    }
    // CASE 1
    const noOfCombination = dp[sum] === Infinity ? -1 : dp[sum];
    // CASE 2
    let i = sum;
    const result = [];
    while (sum > 0) {
      for (let j = 0; j < coinsList.length; j++) {
        if (sum >= coinsList[j] && dp[sum - coinsList[j]] === dp[sum] - 1) {
          result.push(coinsList[j]);
          sum -= coinsList[j];
          break;
        }
      }
    }
   
    return {noOfCombination, coins: result.join(' ')};
}

console.log(minimum_coin_combination(11,[1,2,5]))
