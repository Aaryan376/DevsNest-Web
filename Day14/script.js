function randomColor(){
    var rcolor ='#'+ Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = rcolor;
    document.getElementById("display").innerHTML = "Hex Code: "+rcolor;
}