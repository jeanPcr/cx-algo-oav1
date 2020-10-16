//01 HowManyCamelCase
/*Create a function called howManyCamelCase that will take one string input str.
We are given a sequence of words that are sandwiched together with no space.
With the exception of the first word, in all of the subsequent words, the first letter of each word is capitalized.
The goal of the function is to output the number of words that are in the camelcase string. Let’s use an example:*/

const howManyCamelCase = (str) => {
  let numberOfWord = 0;
  if (str && str !== "") {
    numberOfWord = 1;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === str.charAt(i).toUpperCase()) numberOfWord++;
    }
  }
  return console.log(`Number of words in ${str} : ${numberOfWord}`);
};

howManyCamelCase(process.argv[2]);
