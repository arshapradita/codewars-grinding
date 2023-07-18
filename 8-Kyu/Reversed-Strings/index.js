function solution(str) {
  let character = str.split("");
  let reversedCharacter = character.reverse();
  let reversedStr = reversedCharacter.join("");

  return reversedStr;
}

console.log(solution("world"));
console.log(solution("word"));
