

function onClick(element){
    
   document.getElementById("imgval").src=element.src;

   document.getElementById("imgcon").style.display="block";


}

var clo=document.getElementsByClassName("cbutton")[0];

clo.onclick=function(){
    imgcon.style.display="none";
}