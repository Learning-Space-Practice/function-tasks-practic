// Task 1
// Создайте функцию getRandomInt, которая выводит в блок .out-1 случайное
// целое число от 117 до 132. 
// Все переменные должны быть внутри функции. Запустите эту функцию

const box = document.querySelector('.out-1')

function getRandomInt() {
    const min = 117
    const max = 132
    let random = Math.floor(min + Math.random() * (max + 1 - min))
    box.innerHTML = random
    console.log(random)
}
getRandomInt()


// Task 2
// Чуть усложним. Сейчас первая задача жестко завязана
//  на значения 117 и 132. Напишите функцию getRandomInt2,
//   которая на основе min, max генерирует случайное целое число в этом 
//   диапазоне и выводит в out-2. Запустите эту функцию.

const box2 = document.querySelector('.out-2')
let min = 117
let max = 132

function getRandomInt2() {
    let random = Math.floor(min + Math.random() * (max + 1 - min))
    box2.innerHTML = random
    console.log(random)
}
getRandomInt2()

// Task 3
// Не забываем, что функции можно вызывать внутри другой функции.
//  Напишите функцию t3, которая срабатывает при клике по кнопке .b-3,
//   и запускает фукнции hello,
//  и f2021. Если все сделано верно, то внутри .out-3 вы увидите текст hello 2021

const btn = document.querySelector('.btn')
const box3 = document.querySelector('.out-3')

btn.addEventListener('click', t3)

function t3() {
    function hello() {
        box3.innerHTML = 'you push me'
    }
    hello()
}
