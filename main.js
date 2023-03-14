//así se declaran 2 variables a la vez
var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var width = screen.width;

new_width =  screen.width - 70; 
new_height = screen.height - 300;
	if(width < 992)
	{
    //así se pone para ponerle al canvas de ancho el valor de la variable
	document.getElementById("myCanvas").width = new_width;
    //así se pone para darle al canvas el alto del valor de la variable
    document.getElementById("myCanvas").height = new_height;
    //aquí estamos ocultando la "barrita" para bajar y hacemos que todo se vea bien sin necesidad de ir hacia abajo
    document.body.style.overflow = "hidden";
	}
    //"touchstart" y "mouseDown" son lo mismo solo que "touchstart" es para dispositivos táctiles
	canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) 
{
	console.log("my_touchstart");
  //Actividad adicional
  //"value" es para obtener lo que haya en el id que estamos llamando
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;
  //Final de la actividad adicional
         
    //"e" es para mandar a llamar el evento, "touches[0]" es para que solo se use un dedo y "canvas.offsetLeft" es para que la linea se dibuje en donde tú picaste
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) 
{

	console.log("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    // old same old as the paint web app
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
    
    // end of old same old as the paint web app
}

    // old same old as the paint web app
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    // end of old same old as the paint web app
