
canvas=new fabric.Canvas("mycanvas");

ball_x=0;
ball_y=0;
hole_x=400;
hole_y=800;
hole_obj=" ";
ball_obj=" ";
blockimg_width = 5;
blockimg_height = 5;
function CreateIMGHOLE () {
    fabric.Image.fromURL("golf-h.png",function (Img) {
        hole_obj=Img;
        //set width and height
        hole_obj.scaleToWidth(150);
        hole_obj.scaleToHeight(150);
        //set postion,,top=y,left=x
        hole_obj.set({
            top:hole_y,
            left:hole_x
        });
        canvas.add(hole_obj);
    });
Creatball()
}


function Createball () {
    fabric.Image.fromURL("ball.png",function (Img) {
        ball_obj=Img;
        //set width and height
        ball_obj.scaleToWidth(blockimg_width);
        ball_obj.scaleToHeight(blockimg_height);
        //set postion,,top=y,left=x
        ball_obj.set({
            top:ball_y,
            left:ball_x
        });
        canvas.add(ball_obj);
    });
CreateIMGHOLE()
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
if ((ball_x==hole_x)&&(ball_y=hole_y)) {
	canvas.remove(ball_obj);
	document.getElementById("hd3").innerHTML="You have hit the GOAL";
  document.getElementById("mycanvas").style.borderColor="red";
}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	function up() {
		if (ball_y>0) {
			ball_y=ball_y-10;
			canvas.remove(ball_obj);
			Createball ();
			canvas.log("up key is pressed");
		} 
	 }
	 function down() {
		if (ball_y<600) {
			ball_y=ball_y+10;
			canvas.remove(ball_obj);
			Createball ();
			canvas.log("down key is pressed");
		} 
	 }

	function left(){
    if(ball_x >0){
		ball_x=ball_x-10;
        canvas.remove(ball_obj);
        Createball ();	
		canvas.log("left key is pressed");
		}
	}

	function right(){
		if(ball_x <1000){
			ball_x=ball_x+10;
			canvas.remove(ball_obj);
			Createball ();
			canvas.log("right key is pressed");
		}
	}
	
}

