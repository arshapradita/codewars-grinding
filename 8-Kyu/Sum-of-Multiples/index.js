function sumMul(n, m) {
  //your idea here
  if (m <= n) {
    return "INVALID";
  }

  let sum = 0;
  for (let i = n; i < m; i += n) {
    sum += i;
  }

  return sum;
}

console.log(sumMul(2, 9));
console.log(sumMul(3, 13));
console.log(sumMul(4, 123));
console.log(sumMul(4, -7));
