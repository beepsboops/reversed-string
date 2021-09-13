// const userInput = process.argv.slice(2);

const userInput = "olleh";

const reverseString = function (string) {
  let reversedIndex = [];
  let length = string.length;
  for (let i = 0; i <= string.length; i++) {
    let newIndex = length - i - 1;
    reversedIndex.push(string[newIndex]);
  }
  console.log("string", string);
  console.log("reversedIndex:", reversedIndex);
  return reversedIndex;
};
console.log("reverseString output:", reverseString(userInput));
// charOrder;

// console.log("reversed", reversed);
