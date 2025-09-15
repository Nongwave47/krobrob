const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

// กำหนด username/password ตัวอย่าง
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

const USER_USER = "แฟน";   // ผู้ใช้ทั่วไป
const USER_PASS = "1234";

loginForm.addEventListener('submit', function(e){
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // ตรวจสอบ admin
  if(username === ADMIN_USER && password === ADMIN_PASS){
    loginMessage.textContent = "เข้าสู่ระบบ Admin สำเร็จ 💻 กำลังพาไปหน้าหลังบ้าน...";
    loginMessage.style.color = "#00cc66";

    setTimeout(() => {
      window.location.href = "admin.html"; // ไปหน้า admin
    }, 1200);

  // ตรวจสอบผู้ใช้ทั่วไป
  } else if(username === USER_USER && password === USER_PASS){
    loginMessage.textContent = "เข้าสู่ระบบสำเร็จ 💖 กำลังพาไปหน้า index...";
    loginMessage.style.color = "#00cc66";

    setTimeout(() => {
      window.location.href = "index.html"; // ไปหน้า index
    }, 1200);

  } else {
    loginMessage.textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง ❌";
    loginMessage.style.color = "#ff3366";
  }
});
