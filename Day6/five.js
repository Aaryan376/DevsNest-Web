function frequency(array){
    var c=0;
    var count=1;
    var item=0;
    for(let i = 0;i<array.length;i++){
        for(let j=i;j<array.length;j++){
            if(array[i]===array[j])
              c++;
            if(count<c){
                count=c;
                item=array[i];
            }
        }
        c=0;
    }
    console.log(item+" "+"("+count+" times"+")");
}

frequency([3,'a','b','a']);