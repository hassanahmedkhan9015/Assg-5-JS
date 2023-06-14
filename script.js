// Question-1: 
// Write a function that takes two parameters, an array of numbers and a target number. The function should return a pair of numbers from the array that adds up to the target number. If no such pair is found, the function should return null.
let numbers = [3,4,5]
function findPair(numbers,target){
 for(let i=0; i<numbers.length; i++){
  for(let j = 1+i; j<numbers.length; j++){
    if(numbers[j] + numbers[i] === target){
      return [numbers[i],numbers[j]]
    }
  }
 }

}
let target = 7;
let result2 = findPair(numbers,target);
console.log(result2);

// Question-2
// Write a function that takes a string as input and returns the reverse of the string.
let convert = "javascript";
function revs(convert) {
  return convert.split("").reverse().join("");
}
let result = revs(convert);
console.log(result);

// Question-3 
// Write a function that takes an array of numbers as input and returns the sum of the two largest numbers in the array.
let arr = [2, 4, 7, 10, 1];
function numbers1(arr) {
  let numbersArr = arr.sort((a, b) => b - a);
  return numbersArr[0] + numbersArr[1];
}
let result1 = numbers1(arr);
console.log(result1);

// Question-4 
// Write a function that takes an array of strings as input and returns a new array that contains only the strings that have more than three characters.
let array = ["Hello","hi","welcome"]
function four(array){
  let newarray = [];
  for(let i=0; i<array.length; i++){
    if (array[i].length >= 3){
      newarray.push(array[i])
    }
  }
  return newarray;
}
let result3 = four(array);
console.log(result3);

// Question-5 
 // Write a function that takes an array of numbers as input and returns a new array that contains only the even numbers.
let a = [2,3,3,43,53,22,4,,6];
function evennmbr(array1){
  let number = [];
  for(i=0; i<a.length; i++){
    if(a[i]%2 === 0)
      number.push(a[i]);
  }
  return number;
}
let result4 = evennmbr(a);
console.log(result4);

// Question-6 
 // Write a function that takes an array of objects and a key name as input and returns a new array that contains only the values of the specified key from each object in the array.
let obj = { 
  name1: "Muzammil",
  age1: 23,
  name:"Jaffar",   
  age:50
};

function six(obj){
 let value = Object.values(obj);
  return value;
}
let result5 = six(obj);
console.log(result5);

// Question-7 
// Write a function that takes a string as input and returns true if the string is a palindrome (reads the same backwards as forwards), and false otherwise.
let take = prompt("");
function seven(take){
  for(let i=0; i<take.length; i++){
  const checked = take.split("").reverse().join("");
    if(checked === take){
      return true;
    }
    else{
      return false;
    }
    return checked
  }

}
let result6 = seven(take);
console.log(result6);

// Question-9 
 // Write a function that takes an array of strings as input and returns a new array that contains the length of each string in the original array.
let arr1 = ["Sohail", "Jaffar", "Rafay"];

function counter(arr1) {
  let newarr = [];

  for (let i = 0; i < arr1.length; i++) {
    newarr.push(arr1[i].length);
  }

  return newarr;
}
let newarr = counter(arr1);
console.log(newarr);

// Question-10 
 // Write a function that takes an array of numbers as input and returns the index of the first number in the array that is greater than or equal to 10.
let no = [2,3,12,34,5,6,1];
function ten(no){
  for (let i=0; i <no.length; i++){
    if(no[i]>=10){
      return i;
    }
  }

}
let result7 = ten(no);
console.log(result7);

