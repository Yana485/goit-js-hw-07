/*Напиши скрипт, який під час набору тексту в інпуті input#name-input 
(подія input) підставляє його поточне значення в span#name-output 
як ім’я для привітання. Обов’язково очищай значення в інпуті по краях 
від пробілів . Якщо інпут порожній або містить лише пробіли, то замість 
імені у спан має підставлятися рядок "Anonymous".*/

const field = document.querySelector('input#name-input');
const nameHolder = document.querySelector('span#name-output');
field.addEventListener("input", (event) => {
    const input = event.currentTarget.value;
    if (input.trim() === "") {
        nameHolder.textContent = "Anonymous";
    }
    else {
        nameHolder.textContent = event.currentTarget.value;
    }
});
