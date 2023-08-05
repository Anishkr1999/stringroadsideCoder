// Input: str = "Subscribe to RoadsideCoder",maxlength=9;
// output:"Subscribe...";

function truncate(str,maxlength){
    if(str.length>maxlength){
        return str.slice(0,maxlength)+"..."
    }
    else{
        return str
    }

}
let result = truncate("Subscribe to RoadsideCoder",9)
console.log(result);