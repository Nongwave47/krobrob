function createHeart() {
  const heartsNow = heartsContainer.querySelectorAll('.heart').length;
  if (heartsNow >= 40) return;   // กำหนดสูงสุด เช่น 40 ดวง

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
