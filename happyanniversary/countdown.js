const startDate = new Date("2025-09-12T00:00:00");

// กำหนดวันครบรอบแต่ละช่วง
const countdowns = [
  {element: 'count-3m', progressId: 'progress-3m', date: new Date(startDate.getTime() + 3*30*24*60*60*1000)},
  {element: 'count-6m', progressId: 'progress-6m', date: new Date(startDate.getTime() + 6*30*24*60*60*1000)},
  {element: 'count-1y', progressId: 'progress-1y', date: new Date(startDate.getTime() + 365*24*60*60*1000)},
];

function updateCountdown(targetDate, elementId, progressId) {
  const now = new Date();
  const diff = targetDate - now;

  const total = targetDate - startDate;
  const elapsed = now - startDate;
  const progress = Math.min(100, Math.max(0, (elapsed/total)*100));

  document.getElementById(progressId).style.width = progress + "%";

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
  countdowns.forEach(c => updateCountdown(c.date, c.element, c.progressId));
}, 1000);

// เอฟเฟกต์หัวใจ/ดอกไม้
function triggerEffects(){
  for(let i=0;i<50;i++){
    const effect = document.createElement('div');
    effect.className = 'effect';
    effect.style.left = Math.random()*100 + 'vw';
    effect.style.animationDuration = 3 + Math.random()*2 + 's';
    effect.style.backgroundImage = 'url("heart.png")'; // เปลี่ยนเป็นดอกไม้ถ้าต้องการ
    document.querySelector('.effects').appendChild(effect);

    effect.addEventListener('animationend', ()=>effect.remove());
  }
}
