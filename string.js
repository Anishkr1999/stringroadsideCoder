const str = "world";
console.log(str);

const str2 = `${"cat"}`
console.log(str2);

// Functiom

function test(string,y,z){
  console.log(string,y,z)
  return

}
const channel = "RoadSide";
const name ="Anish"
test`Subscribe to ${channel} run by ${name}`;



// How to check length  of string;

let str3 = "Ab";
// console.log(str3.length)



//How to Accessing Characters


let str4 = "Subscriber rode side"
console.log(str4[3])
console.log(str4.charAt(3))





//Looping

let str5 = "Looping";

for(let i=0;i<=str5.length-1;i++){
    console.log(str5[i])
}



//Modifing string


let str6 = "Subscribe";
str6[2] ="d"//cant'n do this;
console.log(str6)
console.log(str6.replace("Subscribe","Amit"));

console.log(str6.replace("b","f"));
console.log(str6.replaceAll("b",4));

//Concat()
let str7 = "Amit";
let str8 = "anish";

let str9 = str7.concat(str8);
console.log(str9);


//trim()
// clear a extra space

let str10 = "                this is codeer rode";
console.log(str10.trim())



//searching 

let str11 = "Seatrching the "
console.log(str11.indexOf("t"))
console.log(str11.lastIndexOf("t"));


//check string

let str12 = "Abcd";
let str13 = "Xsn";

console.log(str12.startsWith("A"));
console.log(str13.endsWith("n"));

// let data = [4,7,1,4,9,2,4,1];

// data.length=8;
// console.log(data)

 


//substring
let str14 = "Thsis is aa coder"
let sub = str14.substring(2,4);
console.log(sub)

// ************************substring is similar to slice but more powerfull slice****************

let sli =str14.slice(2,5);
console.log(sli)


// convert in to string case

const toBeConverted = null;
let converted = String(toBeConverted)
 console.log(typeof(converted));



//  Converted Case2 
const toBeConverted2 = {name:"Anish"}
console.log(JSON.stringify(toBeConverted2))           //{"name":"Anish"}
console.log(String(toBeConverted2));                  //[object Object]



// change in UpperCase

let upper = "annvn";
console.log(upper.toUpperCase())


// change in LowerCase


let lower = "ASSDFF"
console.log(lower.toLowerCase());


// Why capetal leter and small leter are not same
// because Ascii value is different

let num = [5,6,8,5,9,5];
let uniqVal = new Set(num)
console.log(num)
console.log(uniqVal);


//Comprision String
// localeCompare()
let str15 = "apple";
let str16 = "apple";

console.log(str15.localeCompare(str16))  // 0

//include()

let str17 = " hello i am include checker true or false"
console.log(str17.includes("am"));


//spliting & joining string


let split1 = "This is  split array";
console.log(split1.split(" "));


let joi1=["apple","orange"];
 console.log(joi1.join(" and "));

 









































