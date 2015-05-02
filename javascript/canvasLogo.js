window.onload = function(){
    dibujaLogo();
};

function dibujaLogo(){
    var canvas = document.getElementById('logohtml5');
    var ctx = canvas.getContext('2d');
    
    ctx.font = "bolder 15px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("HTML", 30, 20);
    ctx.translate(0,23);
    
    // Escudo de fondo naranja
    ctx.fillStyle = "#E34C26";
    ctx.beginPath();
    ctx.moveTo(20, 65);
    ctx.lineTo(15, 0);
    ctx.lineTo(85, 0);
    ctx.lineTo(80, 65);
    ctx.lineTo(51, 74);
    ctx.closePath();
    ctx.fill();
 
    // naranja parte de la derecha
    ctx.fillStyle = "#F06529";
    ctx.beginPath();
    ctx.moveTo(51, 71);
    ctx.lineTo(77, 63);
    ctx.lineTo(82, 3);
    ctx.lineTo(51, 3);
    ctx.closePath();
    ctx.fill();
 
    //Parte izquierda del número 5 
    ctx.fillStyle = "#EBEBEB";
    ctx.beginPath();
    ctx.moveTo(51, 25);
    ctx.lineTo(39, 25);
    ctx.lineTo(38, 17);
    ctx.lineTo(51, 17);
    ctx.lineTo(51, 7);
    ctx.lineTo(27, 7);
    ctx.lineTo(29, 35);
    ctx.lineTo(51, 35);
    ctx.closePath();
    ctx.fill();
 
    ctx.beginPath();
    ctx.moveTo(51, 53);
    ctx.lineTo(42, 50);
    ctx.lineTo(42, 40);
    ctx.lineTo(30, 40);
    ctx.lineTo(32, 60);
    ctx.lineTo(51, 66);
    ctx.closePath();
    ctx.fill();
 
   // Parte derecha del número 5
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.moveTo(51, 25);
    ctx.lineTo(51, 35);
    ctx.lineTo(60, 35);
    ctx.lineTo(60, 50);
    ctx.lineTo(51, 53);
    ctx.lineTo(51, 66);
    ctx.lineTo(70, 60);
    ctx.lineTo(72, 25);
    ctx.closePath();
    ctx.fill();
 
    ctx.beginPath();
    ctx.moveTo(51, 17);
    ctx.lineTo(51, 7);
    ctx.lineTo(74, 7);
    ctx.lineTo(73, 17);
    ctx.closePath();
    ctx.fill();
}
