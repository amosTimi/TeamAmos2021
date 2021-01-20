// Assessment 3 Section 2 || FizzBuzz 

let Fizz = [];
let Buzz = [];
let FizzBuzz = [];
let Other = [];

for(let i = 1; i <= 200; i++){
    if(i % 3 === 0 && i % 5 === 0){
        FizzBuzz.push(i);
    }else if(i % 3 === 0){
        Fizz.push(i);
    }else if(i % 5 === 0){
        Buzz.push(i);
    }else{
        Other.push(i);
    }
}

console.log('Fizz: ', Fizz.length);
console.log('Buzz: ', Buzz.length);
console.log('FizzBuzz:', FizzBuzz.length);
console.log('Other: ', Other.length);