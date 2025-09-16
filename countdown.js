const startDate = new Date("2025-09-12T00:00:00");

// กำหนดวันครบรอบแต่ละช่วง
const countdowns = [
  {element: 'count-3m', circle: 'circle-3m', date: new Date(startDate.getTime() + 3*30*24*60*60*1000)},
  {element: 'count-6m', circle: 'circle-6m', date: new Date(startDate.getTime() + 6*30*24*60*60*1000)},
  {element: 'count-1y', circle: 'circle-1y', date: new Date(startDate.getTime() + 365*24*60*60*1000)},
];

// คำนวณระยะทางวงกลม
const circumference = 2 * Math.PI * 54; // r=54

function updateCountdown(targetDate, elementId, circleId) {
  const now = new Date();
  const diff = targetDate - now;

  const total = targetDate - startDate;
  const elapsed = now - startDate;
  const progress = Math.min(100, Math.max(0, (elapsed/total)*100));
  const offset = circumference - (circumference * progress / 100);

  document.querySelector(`#${circleId} svg circle:last-child`).style.strokeDashoffset = offset;

  if(diff <= 0){
    document.getElementById(elementId).textContent = "ถึงแล้ว 🎉";
    triggerEffects();
    return;
  }

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff/(1000*60*60)) % 24);
  const minutes = Math.floor((diff/(1000*60)) % 60);
  const seconds = Math.floor((diff/1000) % 60);

  document.getElementById(elementId).textContent =
    `${days} วัน ${hours} ชม ${minutes} นาที ${seconds} วินาที`;
}

// อัปเดตทุกวินาที
setInterval(() => {
  countdowns.forEach(c => updateCountdown(c.date, c.element, c.circle));
}, 1000);

// เอฟเฟกต์หัวใจ/ดอกไม้
function triggerEffects(){
  for(let i=0;i<50;i++){
    const effect = document.createElement('div');
    effect.className = 'effect';
    effect.style.left = Math.random()*100 + 'vw';
    effect.style.animationDuration = 3 + Math.random()*2 + 's';
    effect.style.backgroundImage = 'url("heart.png")'; // เปลี่ยนเป็นดอกไม้ก็ได้
    document.querySelector('.effects').appendChild(effect);

    effect.addEventListener('animationend', ()=>effect.remove());
  }
}
