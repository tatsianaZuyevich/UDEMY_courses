/* Задание на урок:

1) Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

     *
    ***
   *****
  *******
 *********
***********

*/

'use strict';

const lines = 5;
let result = '';
let res = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i < lines; i++) {
    let countK = 2*i + 1;
    let countP = lines - i - 1;

    if (countP > 0) {
        for (let j = 0; j < countP; j++) {
            res += ' ';
        }
    }
    for (let j = 0; countK > 0; j++, countK--) {
        res += '*';
    }
    result += res + '\n';
    res = '';
}
console.log(result);