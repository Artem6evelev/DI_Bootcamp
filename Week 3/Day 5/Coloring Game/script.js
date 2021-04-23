let mainContainer= document.getElementById("mainContainer");
//create squares inside the mainContainer, by adding one everytime it loops.
for(i=0; i<=3068; i++){
    let square = document.createElement("div");
    square.setAttribute("class","square");
    mainContainer.appendChild(square);
}

let colorCurrent;
let area= document.getElementsByClassName("area");
for(col of area){
col.addEventListener("click",function(){
    colorCurrent=this.style.backgroundColor;
})
};

let squareColor= document.getElementsByClassName("square");
for (final of squareColor){
    final.addEventListener("mouseover", function(){
            this.style.backgroundColor= colorCurrent;
        })
    
};

let clear=document.getElementsByTagName("button")[0];
clear.addEventListener("mousedown", clearb);
 function clearb(e){
     for(c of squareColor){
         c.style.backgroundColor="white";
}
}
