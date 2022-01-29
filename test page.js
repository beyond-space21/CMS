var drgst = false
function drgstate(w) {
    drgst = w
    document.addEventListener('mousemove', function (e) {
        if (drgst) {
            document.getElementsByClassName('exe')[0].style.width = e.clientX + 5 + 'px'
            document.getElementsByClassName('qa')[0].style.width = window.innerWidth - document.getElementsByClassName('exe')[0].offsetWidth + 'px'
        }
    })
}

var total_questions = 10
for (var i = 0; i < total_questions; i++) {
    var elm = document.createElement('div')
    elm.className = 'numbers'
    elm.innerHTML = i + 1
    document.getElementsByClassName('quesnu')[0].appendChild(elm)
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(50, 50, 40, 1.7 * Math.PI, 1.5 * Math.PI);
ctx.strokeStyle = '#fff2d1';
ctx.lineWidth = 5;
ctx.stroke();
ctx.font = "12px Arial";
ctx.fillStyle = "#7bd41a";
ctx.textAlign = "center";
ctx.fillText("30:26", 50, 50);

exe()
function exe() {
    document.getElementsByClassName('exe')[0].style.height = window.innerHeight + 'px'
    document.getElementsByClassName('qa')[0].style.width = window.innerWidth - document.getElementsByClassName('exe')[0].offsetWidth + 'px'
}