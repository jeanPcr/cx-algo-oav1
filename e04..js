// 04 Hello, Array

const myArray = [10, 5, 6, 15, 16, 20, 2];

// 4.1 Count
// Create a function that take an array as an input and calculate the number of occurrences of a given element in an array.
const count1 = (array) => {
  return console.log(`Count1 | Number of occurences ${array.length}`);
};
// 4.2 Average
// Create a function that calculate the average of the elements of an array.

const count2 = (array) => {
  if (array.length > 0) {
    let somme = 0;
    for (let i = 0; i < array.length; i++) {
      somme = somme + array[i];
    }
    return console.log(`Count2 | Average of ${array} : ${somme / array.length}`);
  } else {
    return console.error("Error : Empty array !");
  }
};
count2(myArray);
// 4.3 Min
// Create a function that calculate the minimum of the elements of an array.
const count3 = (array) => {
  if (array.length > 0) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    //console.log(`Count3 | Minimum of ${array} : ${min}`);
    return min;
  } else console.error("Error : Empty array !");
};
count3(myArray);
// 4.4 Max
// Create a function that calculate the maximum of the elements of an array.
const count4 = (array) => {
  if (array.length > 0) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    //console.log(`Count4 | Max of ${array} : ${max}`);
    return max;
  } else console.error("Error : Empty array !");
};
count4(myArray);

// 4.5 Shift
// Create a function that shift the elements of an array.

// 4.6 Diff
// Create a function that calculates the largest deviation in an array (the deviation is the absolute value of the difference of two elements)
const count6 = (array) => {
  let deviation = count4(array) - count3(array);
  console.log(`Count6 | Largest deviation : ${deviation}`);
  return deviation;
};
count6(myArray);
// 0X #soon
