const questions = [
  {q:"ข้อที่ 1: เราเจอกันครั้งแรกเมื่อวันที่เท่าไหร่?", options:["12 สิงหาคม 2025","12 กันยายน 2025","1 มกราคม 2025","14 กุมภาพันธ์ 2025"], answer:0},
  {q:"ข้อที่ 2: ช่วงเวลาที่ประทับใจที่สุดคือ?", options:["โทรคุยกันดึก","เล่นเกมด้วยกัน","ไปเที่ยวด้วยกัน","ทุกช่วงเวลาประทับใจ"], answer:3},
  {q:"ข้อที่ 3: สิ่งที่ทำให้รักเรามากขึ้นคือ?", options:["ความเอาใจใส่","ข้อความน่ารัก","เซอร์ไพรส์เล็กๆ","ทั้งหมด"], answer:3},
  {q:"ข้อที่ 4: สิ่งที่คุณจำเราได้ดีที่สุด?", options:["รอยยิ้ม","เสียงหัวเราะ","สายตา","ทุกอย่าง"], answer:3},
  {q:"ข้อที่ 5: แพลตฟอร์มแรกที่เราเริ่มคุยกันคืออะไร?", options:["แอพหาเพื่อน","Facebook","Instagram","LINE"], answer:0},
  {q:"ข้อที่ 6: สิ่งที่คุณชอบเวลาที่เราอยู่ด้วยกันคือ?", options:["กอด","เล่นเกม","คุยกัน","ทุกอย่าง"], answer:3},
  {q:"ข้อที่ 7: ผลไม้หรือของหวานที่คุณอยากแบ่งกับเรา?", options:["เค้ก","ไอศกรีม","ช็อกโกแลต","ไม่แบ่งเลย...กินคนเดียว"], answer:0},
  {q:"ข้อที่ 8: กิจกรรมที่อยากทำด้วยกันมากที่สุด?", options:["ไปเที่ยว","พาไปรู้จักกับคนที่บ้าน","ทำอาหาร","นอนดูซีรีส์"], answer:2},
  {q:"ข้อที่ 9: เวลาว่างคุณอยากทำอะไรกับเรา?", options:["อ่านหนังสือ","เล่นเกมด้วยกัน","ดูซีรีส์ด้วยกัน","นอน"], answer:2},
  {q:"ข้อที่ 10: แฟนของคุณเกิดวันที่เท่าไหร่?", options:["10 ธันวาคม 2447","10 ธันวาคม 2014","10 ธันวาคม 2547","10 ธันวาคม 2548"], answer:2}
];

let currentQuestion = 0;
let answers = [];

const startBtn      = document.querySelector('.btn-start');
const backHomeBtn   = document.getElementById('btn-back-home');
const startScreen   = document.getElementById('start-screen');
const questionScreen= document.getElementById('question-screen');
const resultScreen  = document.getElementById('result-screen');
const questionText  = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn   = document.getElementById('prev-btn');
const nextBtn   = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const scoreText = document.getElementById('score-text');
const rateText  = document.getElementById('rate-text');
const restartBtn= document.getElementById('restart-btn');

startBtn.addEventListener('click', () => {
  startScreen.style.display = 'none';
  questionScreen.style.display = 'flex';
  currentQuestion = 0;
  showQuestion();
});

// ปุ่มย้อนกลับ (หน้าแรก) – ถ้าเว็บมีหน้าหลักจริงๆ ให้เปลี่ยนเป็น window.location.href
backHomeBtn.addEventListener('click', () => {
  window.history.back();
});

function showQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = q.q;
  optionsContainer.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(idx);
    if (answers[currentQuestion] === idx) btn.classList.add('selected');
    optionsContainer.appendChild(btn);
  });

  prevBtn.style.display   = currentQuestion === 0 ? 'none' : 'inline-block';
  nextBtn.style.display   = currentQuestion === questions.length - 1 ? 'none' : 'inline-block';
  submitBtn.style.display = currentQuestion === questions.length - 1 ? 'inline-block' : 'none';
}

function selectAnswer(idx) {
  answers[currentQuestion] = idx;
  Array.from(optionsContainer.children).forEach(btn => btn.classList.remove('selected'));
  optionsContainer.children[idx].classList.add('selected');
}

nextBtn.addEventListener('click', () => { currentQuestion++; showQuestion(); });
prevBtn.addEventListener('click', () => { currentQuestion--; showQuestion(); });

submitBtn.addEventListener('click', () => {
  let score = answers.reduce((acc, ans, idx) => acc + (ans === questions[idx].answer ? 1 : 0), 0);
  questionScreen.style.display = 'none';
  resultScreen.style.display   = 'flex';
  scoreText.textContent = `คุณได้คะแนน ${score} / ${questions.length}`;
  if (score === 10)      rateText.textContent = 'เก่งมากกก 💖';
  else if (score >= 8)   rateText.textContent = 'เก่งมาก! 🌟';
  else if (score >= 5)   rateText.textContent = 'ดีมาก 🙂';
  else                   rateText.textContent = 'ลองใหม่ได้นะ 😅';
});

restartBtn.addEventListener('click', () => {
  answers = [];
  currentQuestion = 0;
  resultScreen.style.display = 'none';
  startScreen.style.display  = 'flex';
});
