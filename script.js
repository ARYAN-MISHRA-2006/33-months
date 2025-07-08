// Show the forgiveness popup
function showForgivenessPopup() {
  const popup = document.getElementById("popup");
  if (popup) popup.classList.remove("hidden");
}

// Handle "Yes, I forgive you 💖"
function forgiveYes() {
  const popup = document.getElementById("popup");
  if (popup) popup.classList.add("hidden");

  // Remove any existing message first
  const oldMessage = document.querySelector(".love-message");
  if (oldMessage) oldMessage.remove();

  const message = document.createElement("div");
  message.className = "love-message";
  message.innerHTML = "Yayyy! You forgave me 😍 I love you soooo much, Podu baby 💕💖💘";

  document.querySelector(".main").appendChild(message);

  // Optional: remove after 7 seconds
  setTimeout(() => {
    message.remove();
  }, 7000);
}

// Handle "Still Angry"
function forgiveNo() {
  alert("Aww 😢 I’ll keep trying till I win your heart again!");
  const popup = document.getElementById("popup");
  if (popup) popup.classList.add("hidden");
}

// Show surprise
function showSurprise() {
  document.getElementById("surprise").classList.remove("hidden");
}

// Falling hearts effect
const heartContainer = document.querySelector('.heart-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
