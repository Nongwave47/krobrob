const board = document.getElementById('game-board');

// ตัวอย่างไอคอนน่ารักแทนรูปคู่รัก
const icons = ['💖','🌸','💌','🌹','💓','💗','💘','💞'];
let cardsArray = [...icons, ...icons]; // 2 ชุด

// สุ่มตำแหน่ง
cardsArray.sort(() => 0.5 - Math.random());

// สร้างการ์ด
cardsArray.forEach(icon => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.icon = icon;
  card.textContent = '';
  board.appendChild(card);

  card.addEventListener('click', flipCard);
});

let flippedCards = [];
let matched = [];

function flipCard() {
  if(flippedCards.length < 2 && !this.classList.contains('flipped')){
    this.classList.add('flipped');
    this.textContent = this.dataset.icon;
    flippedCards.push(this);

    if(flippedCards.length === 2){
      setTimeout(checkMatch, 500);
    }
  }
}

function checkMatch(){
  const [card1, card2] = flippedCards;
  if(card1.dataset.icon === card2.dataset.icon){
    matched.push(card1, card2);
    card1.style.backgroundColor = '#ff3366';
    card2.style.backgroundColor = '#ff3366';
    card1.style.color = '#fff';
    card2.style.color = '#fff';
    triggerEffect();
  } else {
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
    card1.textContent = '';
    card2.textContent = '';
  }
  flippedCards = [];

  if(matched.length === cardsArray.length){
    alert("จับคู่ครบแล้ว! 🎉💖");
    // เล่นเอฟเฟกต์หัวใจลอยเต็มจอ
    triggerEffect(50);
  }
}

// เอฟเฟกต์หัวใจลอย
function triggerEffect(count=10){
  const effects = document.createElement('div');
  effects.classList.add('effects');
  document.body.appendChild(effects);

  for(let i=0;i<count;i++){
    const heart = document.createElement('div');
    heart.className = 'effect';
    heart.style.left = Math.random()*100 + 'vw';
    heart.style.animationDuration = 3 + Math.random()*2 + 's';
    heart.style.backgroundImage = 'url("heart.png")'; 
    effects.appendChild(heart);

    heart.addEventListener('animationend', ()=>heart.remove());
  }

  setTimeout(()=>effects.remove(), 4000);
}
