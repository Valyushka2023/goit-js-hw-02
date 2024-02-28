
//Форматування повідомлення

//Оголошуємо функцію
function formatMessage(message, maxLength) {
    /*Приміняємо умовний оператор if - якщо довжина рядка менша або дорівнює максимальній довжині,
    то функція повертає (виводить) початковий рядок без змін*/
    if (message.length <= maxLength) {
        return message;
         /*Якщо перша умова не виконується, то далі вступає в силу оператор else,
     що означає інше, і функція обрізає рядок до maxLength символів, додає трикрапку в кінці "..." 
     та повертає обрізану версію рядка */
    } else {
        return message.slice(0, maxLength) + '...';
    }
}

// Виклик функції (перевірка виконання коду функції із заданими аргументами)
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
