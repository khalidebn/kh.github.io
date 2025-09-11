/* Typing Effect */
const typingElement = document.getElementById("typing");
const typingText = [
  "> Scanning vulnerabilities...",
  "> Exploiting targets...",
  "> Securing systems..."
];
let index = 0, charIndex = 0;

function type() {
  if (charIndex < typingText[index].length) {
    typingElement.textContent += typingText[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      typingElement.textContent = "";
      index = (index + 1) % typingText.length;
      charIndex = 0;
      type();
    }, 2000);
  }
}
type();

/* Contact Form */
function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  alert("Message received, " + name + ". I’ll get back to you soon!");
  document.querySelector("form").reset();
}

/* Matrix Background */
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
const drops = [];

/* Initialize drops */
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

/* Draw function */
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff00";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(draw, 35);

/* Handle resize */
window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  columns = Math.floor(canvas.width / fontSize);
  drops.length = 0;
  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
  }
});
