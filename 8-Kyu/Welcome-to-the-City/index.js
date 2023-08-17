function sayHello(name, city, state) {
  const fullName = name.join(" ");
  const welcomeMessage = `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
  return welcomeMessage;
}

const name = ["John", "Smith"];
const city = "Phoenix";
const state = "Arizona";

const message = sayHello(name, city, state);
console.log(message);
//cara cepat
// function sayHello(name, city, state) {
//   return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
// }

// let name = ["jhon", "wick"];
// let city = "sidoarjo";
// let state = "indonesia";

// const message = sayHello(name, city, state);
// console.log(message);
