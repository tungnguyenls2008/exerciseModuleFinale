let ctx = document.getElementById("myCanvas").getContext("2d");
let circles=[];

function Circle( x, y, radius, color ) {

    this.x 	= x;
    this.y 	= y;
    this.color=color;
    this.radius = radius;

    this.render = function() {
        ctx.beginPath();
        ctx.arc( this.x, this.y,  this.radius, 0, Math.PI * 2, false  );
        ctx.fillStyle = this.color;
        ctx.fill();
    };
}
let circle= new Circle(10,10,100,"rgb(0,0,0)");
ctx=circle.render();

