// Iteration #1: Find the maximum
// Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the largest.

function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  }
  if (b > a) {
    return b;
  }
}

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot', 'crocodila', 'arocodila'];

let longestWord = '0';
let equalWords = [];
function findLongestWord(words) {
  //get longest word
  for (i = 0; i < words.length; i++) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    }
  }

  //find other words with equal length
  for (i = 0; i < words.length; i++) {
    if (longestWord.length === words[i].length) {
      //push to array
      equalWords.push(words[i]);
    }
    console.log('Not other words');
  }

  //sort to array
  equalWords.sort();

  //return logest word
  return equalWords[0];
}

findLongestWord(words);

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sum(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

sum(numbers);

// // // Iteration #4: Calculate the average

// // //Level 1: Array of numbers
// // const numbersTwo = [2, 6, 9, 10, 7, 4, 1, 9];

// // function sum (numbers) {
// //   let sum = 0
// // for(i=0; i < numbers.length; i++){
// //   sum = numbers[i] + sum;

// // }
// // return sum / 2
// // }

// // sum(numbersTwo)

// // //Level 2: Array of strings

// // const wordsArray = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

// // function stringLengthAverage(words){
// //   let arraySum = 0
// //   for(i=0; i < words.length; i++){
// //       arraySum = words[i].length + arraySum
// //   }
// //   return arraySum / 2
// // }

// // stringLengthAverage(wordsArray)

// //Iteration #5: Unique arrays

// // const words = [
// //   'crab',
// //   'poison',
// //   'contagious',
// //   'simple',
// //   'bring',
// //   'sharp',
// //   'playground',
// //   'poison',
// //   'communion',
// //   'simple',
// //   'bring'
// // ];

// // function uniquifyArray(words) {
// //   let newWordArray = [];
// //     for(i=0; i < words.length; i++){
// //       if(!newWordArray.include)
// //     }

// //   return newWordArray
// // }

// // uniquifyArray(words)
