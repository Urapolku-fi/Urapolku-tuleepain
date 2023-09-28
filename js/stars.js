const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

let stars = []; // This array will hold your stars
const numStars = 200; // Number of stars to display
let speed = 0;
let reverse = false;

// Set canvas size to full window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Function to create a star object with random properties
function createStar() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const radius = Math.random() * 3;
  return { x, y, radius };
}

// Populate the stars array
for (let i = 0; i < numStars; i++) {
  stars.push(createStar());
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = "#ffffff"; // White color for the stars
    ctx.fill();
  });
}

function updateStars() {
  stars.forEach((star) => {
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
        star.x > canvas.width ||
        star.y < 0 ||
        star.y > canvas.height
      ) {
        star.x = Math.random() * canvas.width;
        star.y = Math.random() * canvas.height;
      }
    } else {
      star.x += dirX * speed;
      star.y += dirY * speed;
      // If the star reaches the center, reset its position
      if (distance < 1) {
        star.x = Math.random() * canvas.width;
        star.y = Math.random() * canvas.height;
      }
    }
  });
}

function animateStars() {
  updateStars();
  drawStars();
  requestAnimationFrame(() => animateStars()); // Save the ID of the animation frame
}

function playAnimationFor(duration) {
  speed = 4;
  setTimeout(() => {
    speed = 0;
  }, duration);
}

// Initial draw
drawStars();

animateStars(false);
