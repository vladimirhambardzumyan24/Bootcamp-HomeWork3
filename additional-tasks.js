// testing task1
let name = "Ilya";
console.log(`hello ${1}`); // hello 1
console.log(`hello ${"name"}`); // hello name
console.log(`hello ${name}`); // hello Ilya

// testing task2
5 > 4; //true
"apple" > "pineapple"; //false
"2" > "12"; //true
undefined == null; //true
undefined === null; //false
null == "\n0\n"; //false
null === +"\n0\n"; //false

// testing task3
// console.log( null || 2 || undefined )
// console.log( console.log(1) || 2 || console.log(3) );
// console.log( 1 && null && 2 );
// console.log( console.log(1) && console.log(2) );
// console.log( null || 2 && 3 || 4 );
///
let age = 55;
if (age >= 14 && age <= 90) {
  console.log(true);
}
///////////
let agee = 10;
if (agee < 14 || agee > 90) {
  console.log(true);
}
/////////
if (-1 || 0) {
  console.log("first");
}
if (-1 && 0) {
  console.log("second");
}
if (null || (-1 && 1)) {
  console.log("third");
}

///////////////////////////
let userName = "Adminf";

if (userName === "Admin") {
  let pass = "TheMaster";

  if (pass === "TheMaster") {
    console.log("Welcome!");
  } else if (pass === "" || pass === null) {
    console.log("Canceled");
  } else {
    console.log("Wrong password");
  }
} else if (userName === "" || userName === null) {
  console.log("Canceled");
} else {
  console.log("I don't know you");
}
