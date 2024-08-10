// CASE 1: what is the minimum number of coins combinations required to produce a sum "n"

// CASE 2: given sum "n", in how many ways we can form this sum from given sets of coin?

// For greedy approach, we require to itirate the coins array every time again and again and then also we get wrong answer,
// So, we need to apply dynamic programming
// here we see how many minimum amount we need to make sum 1,2,3,4,5... (sum + 1)

const minimum_coin_combination = (sum, coinsList) => {
    if (sum < 1) return 0;
    const dp = Array(sum + 1).fill(Infinity);
    dp[0] = 0;
    noOfCoinsRequired = {}
    for (let i = 0; i < coinsList.length; i++) {
        for (let j = coinsList[i]; j <= sum; j++) {
            noOfCoinsRequired[j] = dp[j] = Math.min(dp[j], dp[j - coinsList[i]] + 1);
        }
    }
    // CASE 1
    const noOfCombination = noOfCoinsRequired[sum] === Infinity ? -1 : noOfCoinsRequired[sum];
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
   
    return {noOfCombination, coins: result.join(' '), noOfCoinsRequired};
}

console.log(minimum_coin_combination(11,[1,2,5]))
