var last_x,last_y;
canvas=document.getElementById('myCanvas');
ctx= canvas.getContext("2d");
colour="green";
width=10;
var screen_width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;
if(screen_width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
 console.log("my_touchstart");
 colour=document.getElementById("color").value;
 last_x=e.touches[0].clientX-canvas.offsetLeft;
 last_y=e.touches[0].clienty-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
   currentX=e.touches[0].clientX-canvas.offsetLeft;
   currentY=e.touches[0].clientY-canvas.offsetTop;
  
       ctx.beginPath();
       ctx.strokeStyle=colour;
       ctx.lineWidth=width;
       console.log("last position of x and y");
       console.log("x="+last_x+" y="+last_y);
       ctx.moveTo(last_x,last_y);
       console.log("current position of x and y");
       console.log("x="+ currentX+" y="+ currentY);
       ctx.lineTo(currentX,currentY);
       ctx.stroke();
 
   last_x=currentX;
   last_y=currentY;
}