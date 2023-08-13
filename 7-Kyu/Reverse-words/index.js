function reverseWords(str) {
  const words = str.split(" ");
  const reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
  });
  const result = reversedWords.join(" ");
  return result;
}

// Test cases
console.log(reverseWords("This is an example!"));
console.log(reverseWords("double  spaces"));
