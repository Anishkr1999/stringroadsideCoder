// Hamming Distance

// Given  two string  x and y , return the haming distance between them


// Input:x = "hello", y="hwllr"
// output 2 ;

// explanation
// (hello)
// (hwllr)

function hammingDistance(x,y ){
    if(x.length !==y.length){
        throw new Error("string must be the same length")
    }
    let distance = 0;
    for(let i = 0;i<x.length;i++){
        if(x[i]!==y[i]){
            distance++
        }
    }
    return distance

}
console.log(hammingDistance("hello","hwllr"));
console.log("abc")