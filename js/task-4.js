/*відправлення форми form.login-form повинна відбуватися за подією submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.

Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те,
що 'All form fields must be filled in'. Не додавай на інпути атрибут required,
валідація має відбуватися саме через JS.

Якщо користувач заповнив усі поля і відправив форму, збери значення полів 
в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — 
відповідні значення цих інпутів, очищені від пробілів по краях. 

Для доступу до елементів форми використовуй властивість elements.
При сабміті форми виведи об'єкт із введеними даними в консоль і 
очисти значення полів форми методом reset. */

const form = document.querySelector('form.login-form');

const alert = document.createElement("p");
form.insertAdjacentElement("afterend", alert);

form.addEventListener("submit", sendForm);

function sendForm(event) {
  event.preventDefault();
  const login = event.target;
  const username = login.elements.email.value;
  const password = login.elements.password.value;
  const block = { Email: username.trim(), Password: password.trim() };

  if (username.trim() === "" || password.trim() === "") {
    alert.textContent = "All form fields must be filled in";
  }
  else {
    alert.textContent = "";
    console.log(block);
  }

  form.reset();
};
