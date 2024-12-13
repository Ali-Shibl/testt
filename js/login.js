import {  initializePhoneInput } from '../js/share.js';
initializePhoneInput();



// const loginForm = document.getElementById('loginForm');

// loginForm.addEventListener('submit', function (e) {
//   e.preventDefault(); // منع الإرسال الافتراضي
//     let country=document.querySelector('.iti__selected-flag').title
//      let countrycode=country.split(' ') 
//      const lastElement = countrycode[countrycode.length - 1];
//      console.log(lastElement)
//   // تعريف الحقول ورسائل الخطأ
//   const phone = document.getElementById('phone');
//   const phoneError = document.getElementById('phoneError');
//   const password = document.getElementById('password');
//   const passwordError = document.getElementById('passwordError');

//   let isValid = true;

//   // تحقق من رقم الهاتف
//   if (!phone.value || !/^\d{10,15}$/.test(phone.value)) {
//     phoneError.classList.remove('d-none');
//     isValid = false;
//   } else {
//     phoneError.classList.add('d-none');
//   }

//   // تحقق من كلمة المرور
//   if (!password.value || password.value.length < 6) {
//     passwordError.classList.remove('d-none');
//     isValid = false;
//   } else {
//     passwordError.classList.add('d-none');
//   }

//   // إذا كان كل شيء صحيحًا، قم بالإرسال
//   if (isValid) {
//     alert('Login successful!');
//     // يمكنك استدعاء API هنا
//   }
// });

// document.getElementById('phone').addEventListener('input',changeInput)


// function changeInput(e) {
//     console.log(e.target.value);
    
// }