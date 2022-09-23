/* Задание на урок:

1) При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

2) При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...).
Когда цикл дойдет до числа 13 - остановить весь цикл

3) При помощи цикла for выведите чётные числа от 2 до 10 включительно

4) Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. 
Не создайте бесконечный цикл! Иначе браузер может зависнуть.
    for (let i = 2; i <= 16; i++) {
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }

5) Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, 
как и обращаться к ним: arr[0]

*/

'use strict';

function firstTask() {
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}

function secondTask() {
    for (let i = 20; i >= 10; i--) {
        console.log(i);
        if (i === 13) {
            break;
        }
    }
}

function thirdTask() {
    for (let i = 2; i <= 10; i+=2) {
        console.log(i);
    }
}

function fourthTask() {
    let i = 2;
    while (i <= 16) {
        if (i % 2 !== 0) {
            console.log(i);
        }
        i++;
    }
    for (let i = 2; i <= 16; i++) {
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }
}

function fifthTask() {
    const arrayOfNumbers = [];

    let k = 5;
    for (let i = 0; ; i++, k++) {
        arrayOfNumbers [i] = k;
        if (k === 10) {
            break;
        }
    }
    console.log(arrayOfNumbers);
    
    // Не трогаем
    return arrayOfNumbers;
}

firstTask();
secondTask();
thirdTask();
fourthTask();
fifthTask();