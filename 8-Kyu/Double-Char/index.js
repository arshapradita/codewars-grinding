function doubleChar(str) {
  let output = "";

  for (let i = 0; i < str.length; i++) {
    output += str[i] + str[i];
  }

  return output;
}

console.log(doubleChar("String"));
console.log(doubleChar("Hello World"));
console.log(doubleChar("1234!_ "));
