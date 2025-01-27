// 1
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log("Температура в Фаренгейтах: ", {fahrenheit});

// 2
let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log("Годин у місяці: ",{hoursInMonth}, "Хвилин у місяці: ", {minutesInMonth});

// 3
let health = 100;
let energy = 80;
health -= 20;
energy -= 30;
console.log("Рівень здоров'я: ", {health}, "Рівень енергії: ", {energy});

// 4
let purchaseAmount = 500;
let discount = purchaseAmount * 0.10;
let discountedAmount = purchaseAmount - discount;
console.log("Сума після знижки: ",{discountedAmount});

// 5
let floatNumber = 7.8;
let roundedDown = Math.floor(floatNumber);
console.log("Округлене число: ",{roundedDown});

// 6
let floatString = "12.34";
let parsedFloat = parseFloat(floatString);
console.log("Десяткове число: ", {parsedFloat});

// 7
let intString = "42";
let parsedInt = parseInt(intString);
console.log("Ціле число: ", {parsedInt});

// 8
let number = 64;
let sqrtNumber = Math.sqrt(number);
console.log("Квадратний корінь: ", {sqrtNumber});

// 9. Перетворення рядка у ціле число та назад у рядок
let integerNumber = 123;
let stringNumber = "456";
let convertedToInt = parseInt(stringNumber);
let convertedToString = integerNumber.toString();
console.log("Перетворене у число: ", {convertedToInt}, "Перетворене у рядок: ", {convertedToString});
