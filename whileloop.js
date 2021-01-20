// simple function that uses a while loop in JavaScript

function whilefunction(num){
    const myArr = [];
    if (num < 5){
        while(num <=5){
            myArr.push(num);
            num++;
        }
        console.log(myArr);
    }else{
            while(num <= 10){
                myArr.unshift(num);
                num++;
            }
            console.log(myArr);
        }
    
}

whilefunction(6);
