const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.width = 15 + Math.random() * 20 + "px";
  heart.style.height = heart.style.width;
  heart.style.animationDuration = (2 + Math.random() * 3) + "s";
  heart.style.filter = `hue-rotate(${Math.random()*360}deg)`; // สุ่มสี
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);
