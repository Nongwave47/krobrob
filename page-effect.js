// เมื่อโหลดหน้าเว็บ
window.addEventListener('load', () => {
  // ====== แสดง countdown-item ทีละอัน ======
  const countdownItems = document.querySelectorAll('.countdown-item');
  countdownItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * 300); // delay ทีละ 300ms
  });

  // ====== สร้างหัวใจ/ดอกไม้ลอย ======
  const effectsContainer = document.querySelector('.effects');
  const symbols = ['heart.png', 'flower.png']; // วางไฟล์ภาพในโฟลเดอร์เดียวกับ HTML

  setInterval(() => {
    const effect = document.createElement('div');
    effect.classList.add('effect');

    // random เลือกสัญลักษณ์
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    effect.style.backgroundImage = `url(${symbol})`;

    // random ตำแหน่งซ้าย
    effect.style.left = Math.random() * 100 + 'vw';

    // random ขนาด
    const size = 15 + Math.random() * 15;
    effect.style.width = `${size}px`;
    effect.style.height = `${size}px`;

    // random ความเร็ว
    effect.style.animationDuration = 3 + Math.random() * 2 + 's';

    effectsContainer.appendChild(effect);

    // ลบ element หลัง animation จบ
    effect.addEventListener('animationend', () => {
      effect.remove();
    });
  }, 300); // สร้างทุก 0.3 วินาที
});
