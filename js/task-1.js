/*З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка 
елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).*/

const allCategories = document.querySelectorAll('#categories li.item');
const amount = allCategories.length;
console.log('Number of categories: ' + amount);

allCategories.forEach(option => {
    console.log('Category: ' + option.firstElementChild.textContent);

    const choiceAmount = option.childNodes[3].children.length;
    console.log('Elements: ' + choiceAmount);
});