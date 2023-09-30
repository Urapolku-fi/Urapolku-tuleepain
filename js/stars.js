function Star(x,y,r,color){
  this.x = x;
  this.y = y;
  this.r = r;
  this.rChange = 0.015;
  // this.vx = Math.floor(Math.random()*4+1);
  // this.vy = Math.floor(Math.random()*4+1);
  this.color = color;
}

Star.prototype = {
  constructor: Star,
  render: function(){
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2*Math.PI, false);
    context.shadowBlur = 8;
    context.shadowColor = "white";
    context.fillStyle = this.color;
    context.fill();
  },
  update: function(){

    if (this.r > 2 || this.r < .8){
      this.rChange = - this.rChange;
    }
    this.r += this.rChange;
  }
}

const canvas = document.getElementById("starfield");
const context = canvas.getContext("2d");

const canvasWidth = canvas.width = document.body.offsetWidth;
const canvasHeight = canvas.height = document.body.offsetHeight;
const centerX = canvasWidth / 2;
const centerY = canvasHeight / 2;

const numStars = 200;
let speed = 0;
let reverse = false;

function randomColor(){
  const arrColors = ["ffffff", "ffecd3" , "bfcfff"];
  return "#"+arrColors[Math.floor((Math.random()*3))];
}

let arrStars = [];
for(let i = 0; i < numStars; i++){
  let randX = Math.floor((Math.random()*canvasWidth)+1);
  let randY = Math.floor((Math.random()*canvasHeight)+1);
  let randR = Math.random() * 1.7 + .5;

  let star = new Star(randX, randY, randR, randomColor());
  arrStars.push(star);
}
function update(){
  for(let i = 0; i < arrStars.length; i ++){
    arrStars[i].update();
  }
}
function animate(){
  update();
  /*
    Remove comments below these for a cool trailing effect & comment
    out the context.clearRect.
  */
  context.fillStyle = 'rgba(255, 255, 255, .1)';
  context.fillRect(0,0, canvasWidth, canvasHeight);
  context.clearRect(0,0, canvasWidth, canvasHeight);
  for(let i = 0; i < arrStars.length; i++){
    arrStars[i].render();
  }
  requestAnimationFrame(animate);
}
function updateStars() {
  arrStars.forEach((star) => {
    // Calculate the direction from the star to the center
    let dirX = centerX - star.x;
    let dirY = centerY - star.y;

    // Calculate the distance
    let distance = Math.sqrt(dirX * dirX + dirY * dirY);

    // Normalize the direction
    dirX /= distance;
    dirY /= distance;

    // Move the star
    if (reverse) {
      star.x -= dirX * speed;
      star.y -= dirY * speed;
      // If the star goes off the canvas, reset its position to the center
      if (
        star.x < 0 ||
        star.x > canvasWidth ||
        star.y < 0 ||
        star.y > canvasHeight
      ) {
        star.x = Math.random() * canvasWidth;
        star.y = Math.random() * canvasHeight;
      }
    } else {
      star.x += dirX * speed;
      star.y += dirY * speed;
      // If the star reaches the center, reset its position
      if (distance < 1) {
        star.x = Math.random() * canvasWidth;
        star.y = Math.random() * canvasHeight;
      }
    }
  });
}

animate();
function animateStars() {
  if (speed > 0) {
    updateStars();
    requestAnimationFrame(() => animateStars()); // Save the ID of the animation frame
  }
}
function playAnimationFor(duration) {
  speed = 4;
  animateStars();
  setTimeout(() => {
    speed = 0;
  }, duration);
}
