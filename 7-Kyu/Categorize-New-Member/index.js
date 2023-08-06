function openOrSenior(data) {
  const result = [];
  for (const member of data) {
    const [age, handicap] = member;
    if (age >= 55 && handicap > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  }
  return result;
}

const inputList = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];
const outputList = openOrSenior(inputList);
console.log(outputList);
