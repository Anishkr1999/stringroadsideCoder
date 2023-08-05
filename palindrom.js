// Question1:-Palindrome Number;

// An integer is a palindrome when it reads the same forward and backward.

// Input : x = 121 --------->>>>>> output:true
// Input : x = 10    ---------->>>>>> output:false


const ispalindrome = function(x){
    
    return x<0?false: x=== +x.toString().split(" ").reverse().join(" ")
};
let result = ispalindrome(121)
console.log(result)