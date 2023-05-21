canvas=document.getElementById("canvas")
ctx=canvas.getContext("2d")
 canvas.addEventListener("mousedown",clique)
 function clique(e){

ctx.beginPath();
ctx.strokeStyle="black"
ctx.lineWidth=1;
ctx.arc(400,400,40,0,180);
ctx.stroke();






 }