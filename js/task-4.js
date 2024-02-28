//Доставка товару

/*Оголошуємо функцію яка має перевіряти можливість  доставки товару в країну покупця 
і повертати повідомлення про результат. Параметр функції -це змінна country */
function getShippingCost(country) {

   //оголошуємо змінну з  ім"ям price, що означає вартість доставки. 
    let price;
   // оголошуємо змінну з ім"ям message, що включає в себе рядок повідомлення про вартість доставки до заданої країни.
    let message;

   // Використовуємо конструкцію switch, де будемо перевіряти змінну  country в різних випадках (блоках).
    switch (country) {
        case "China": //Випадок, коли country China
            price = 100; //Вартість доставки, коли country China = 100
            message = `Shipping to ${country} will cost ${price} credits`;//Рядок повідомлення, що повертається 
            break; //Завершення обробки поточного випадку
        case "Chile":
            price = 250;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Australia":
            price = 170;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Jamaica":
            price = 120;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        default: //Опрацьовується після того, коли всі попередні  випадки не спрацювали
            message = "Sorry, there is no delivery to your country";//Рядок повідомлення, що повертається у випадку default  
    }
    return message;//Після завершення виконання блоку switch, функція повертає (виводить) значення змінної message.
  
}

// Виклик функції (перевірка виконання коду функції із заданими аргументами)
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
