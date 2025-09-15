const adminForm = document.getElementById('admin-login-form');
const adminMessage = document.getElementById('admin-message');
const dashboard = document.getElementById('admin-dashboard');
const messageList = document.getElementById('message-list');

const indexTextArea = document.getElementById('index-text');
const aboutTextArea = document.getElementById('about-text');
const newImageInput = document.getElementById('new-image-url');

// ตัวอย่าง admin login
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

// ข้อมูลตัวอย่าง
let indexText = localStorage.getItem('indexText') || "ยินดีต้อนรับสู่เว็บครบรอบแฟน 💖";
let aboutText = localStorage.getItem('aboutText') || "เรื่องราวของเรา...";
let galleryImages = JSON.parse(localStorage.getItem('galleryImages')) || [
  "images/photo1.jpg", "images/photo2.jpg"
];
let messages = JSON.parse(localStorage.getItem('messages')) || [
  "พี่รักเธอที่สุด 💖", "คิดถึงทุกวัน 🌙"
];

// แสดงข้อความ/รูปใน admin
function renderAdmin() {
  indexTextArea.value = indexText;
  aboutTextArea.value = aboutText;

  messageList.innerHTML = '';
  if(messages.length === 0){
    messageList.innerHTML = '<p>ยังไม่มีข้อความ 💌</p>';
  } else {
    messages.forEach(msg => {
      const div = document.createElement('div');
      div.classList.add('message-item');
      div.textContent = msg;
      messageList.appendChild(div);
    });
  }
}

// Login admin
adminForm.addEventListener('submit', e => {
  e.preventDefault();
  const username = document.getElementById('admin-username').value.trim();
  const password = document.getElementById('admin-password').value.trim();

  if(username === ADMIN_USER && password === ADMIN_PASS){
    adminMessage.textContent = "เข้าสู่ระบบ Admin สำเร็จ 💻";
    adminMessage.style.color = "#00cc66";
    adminForm.style.display = "none";
    dashboard.style.display = "block";
    renderAdmin();
  } else {
    adminMessage.textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง ❌";
    adminMessage.style.color = "#ff3366";
  }
});

// บันทึก Index
document.getElementById('save-index').addEventListener('click', () => {
  indexText = indexTextArea.value;
  localStorage.setItem('indexText', indexText);
  alert("บันทึกข้อความหน้า Index เรียบร้อย!");
});

// บันทึก About
document.getElementById('save-about').addEventListener('click', () => {
  aboutText = aboutTextArea.value;
  localStorage.setItem('aboutText', aboutText);
  alert("บันทึกข้อความหน้า About เรียบร้อย!");
});

// จัดการ Gallery
document.getElementById('add-image').addEventListener('click', () => {
  const url = newImageInput.value.trim();
  if(url){
    galleryImages.push(url);
    localStorage.setItem('galleryImages', JSON.stringify(galleryImages));
    newImageInput.value = '';
    alert("เพิ่มรูปเรียบร้อย!");
  }
});

document.getElementById('clear-gallery').addEventListener('click', () => {
  galleryImages = [];
  localStorage.setItem('galleryImages', JSON.stringify(galleryImages));
  alert("ลบรูปทั้งหมดเรียบร้อย!");
});

// จัดการ Messages
document.getElementById('clear-messages').addEventListener('click', () => {
  messages = [];
  localStorage.setItem('messages', JSON.stringify(messages));
  renderAdmin();
});
