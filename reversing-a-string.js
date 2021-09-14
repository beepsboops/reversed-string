// const userInput = process.argv.slice(2);

const userInput = "olleh goodbye";
console.log("userInput:", userInput);

const reverseString = function (string) {
  let reversedArr = [];
  let length = string.length;
  for (let i = 0; i <= string.length; i++) {
    let newIndex = length - i - 1;
    reversedArr.push(string[newIndex]);
  }
  // console.log("reversedArr", reversedArr);
  let reversedString = reversedArr.toString();
  let noCommaArr = [];
  for (let i = 0; i <= reversedString.length; i++) {
    // console.log("in 2nd loop i:", reversedString[i]);
    if (reversedString[i] !== ",") {
      noCommaArr.push(reversedString[i]);
    }
  }
  return noCommaArr;
};

console.log("reverseString output:", reverseString(userInput));
// charOrder;

// console.log("reversed", reversed);
