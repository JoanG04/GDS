let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let ball  = {x:100, y:200,yspeed:3,xspeed:3}


let collision = () => {
  if (ball.y >= canvas.height - 50){
    ball.yspeed = -ball.yspeed;
  }
  ball.y += ball.yspeed;
}


function animate(){
  window.requestAnimationFrame(animate);

  context.fillStyle = "lightblue";
  context.fillRect(0,0, canvas.width, canvas.height)
  
  context.fillStyle = "White";
  context.fillRect(ball.x, ball.y, 50, 50);
  collision();


}

animate();
