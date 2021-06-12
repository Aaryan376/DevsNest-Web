function checkArray(a){
    console.log(Array.isArray(a));
}


var a = [5,7,8,9];
var b = "Aaryan";
var c = [['Aaryan',7],['Tokyo',6],['Denver',5]];

checkArray(a);
checkArray(b);
checkArray(c);
checkArray("one");
checkArray(['a','b','c']);