let OddID = [ ];
let EvenID = [ ];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        EvenID.push(i);
     } else{
         OddID.push(i);
    }
}

console.log(EvenID.length);
console.log(OddID.length);
console.log(EvenID.length + OddID.length);
