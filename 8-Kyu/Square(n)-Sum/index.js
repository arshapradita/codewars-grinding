function squareSum(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num ** 2;
  }
  return sum;
}

console.log(squareSum([1, 2, 2]));
