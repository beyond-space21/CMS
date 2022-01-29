var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(50, 50, 40, 1.7*Math.PI, 1.5* Math.PI);
ctx.strokeStyle = '#fff2d1';
ctx.lineWidth = 5;
ctx.stroke();
ctx.font = "12px Arial";
ctx.fillStyle = "#7bd41a";
ctx.textAlign = "center";
ctx.fillText("30:26",50,50);

exe()

window.onresize=function(){
    exe()
}

function exe(){
// document.getElementsByClassName('quesnu')[0].style.width= document.getElementsByClassName('bottom-dash')[0].offsetWidth-c.width+'px'
}