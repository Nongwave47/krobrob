const heartsContainer = document.querySelector(".hearts");

// สร้างหัวใจลอย
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  const size = 15 + Math.random() * 20;
  heart.style.width = size + "px";
  heart.style.height = size + "px";
  heart.style.animationDuration = (2 + Math.random() * 3) + "s";
  heart.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

const musicBtn = document.getElementById('music-btn');
const music = document.getElementById('music');

// กำหนดค่าเริ่มต้น
musicBtn.textContent = '🔊';
musicBtn.style.backgroundColor = "#ff6b81";



// เริ่มสร้างหัวใจ ทุก 0.5 วินาที
setInterval(createHeart, 500);
