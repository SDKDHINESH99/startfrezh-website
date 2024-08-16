
function onClick(element){
    
    //document.getElementById("imgval").src=element.src;
    var filename=element.src;
    filename=filename.replace("https://sdkdhinesh99.github.io/startfrezh-website/assets/blender","https://sdkdhinesh99.github.io/startfrezh-website/assets/blender/sprite");
   // console.log(filename)
 
    var contvalu=document.getElementsByClassName("animimg")[0];
 
    //console.log(contvalu);
 
    backimg=style="background-image:url(\'"+filename+"\'); height: 512px; width: 512px; animation: anim3d 2s steps(8) infinite;  ";
    //console.log(backimg);
     contvalu.setAttribute("style",backimg);
     contvalu.setAttribute("style",backimg);
 
    //document.getElementsByClassName("imgincont")[0].style.background-image=filename;
    document.getElementById("imgcon").style.display="block";
 
 
 }
 
 var clo=document.getElementsByClassName("cbutton")[0];
 
 clo.onclick=function(){
     imgcon.style.display="none";
 }
