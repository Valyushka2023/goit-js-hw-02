//Перевірка спаму

//Оголошуємо функцію
function checkForSpam(message) {
    /*Виконаємо  «нормалізацію» рядка, який буде вводитись користувачем.
    Переведемо рядок в нижній регістр для порівняння.*/
    const lowerCaseMessage = message.toLowerCase();
    
    /* Перевіряємо  наявність  заборонених слів через умовний оператор if. 
    Якщо заборонені слова spam та sale будуть виявлені, то функція повертає (виводить)
    результат перевірки, а саме   значення - true */
    if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
        return true;
        /*Якщо перша умова не виконується, то вступає в силу наступний оператор-else, 
        і тоді функція повертає (виводить) результат-false */
    } else {
        return false;
    }
}

// Виклик функції (перевірка виконання коду функції із заданими аргументами)
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
