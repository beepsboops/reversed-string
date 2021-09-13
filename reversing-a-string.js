// const userInput = process.argv.slice(2);

const userInput = "olleh";
console.log("userInput:", userInput);

const reverseString = function (string) {
  let reversedArr = [];
  let length = string.length;
  for (let i = 0; i <= string.length; i++) {
    let newIndex = length - i - 1;
    reversedArr.push(string[newIndex]);
  }
  let reversedString = reversedArr.toString();
  return reversedString;
};
console.log("reverseString output:", reverseString(userInput));
// charOrder;

// console.log("reversed", reversed);
