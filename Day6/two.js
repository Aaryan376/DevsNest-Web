/* var a = [4,5,6,8,9];
console.log(a);

// Method 1 to clone an array
var b = a.map((x)=> x);
console.log(b);

// Method 2 to clone an array

var c = a.filter(()=>true);
console.log(c);

// Method 3 to clone an array

var d = a.reduce((newArray,elements)=>{
    newArray.push(elements);
    return newArray;
},[]);

console.log(d);

// Method 4 to clone an array

var z = a.slice(0,5);
console.log(z);
*/

function cloneArray(array){
    var b = array.map((x)=>x);
    console.log(b);
}

cloneArray([1,2,3,4]);
cloneArray(['a','b','c']);
cloneArray([1,2,[4,3]]);