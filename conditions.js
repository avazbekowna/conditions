
// conditions
// >=
// <=
// !==

// let n =10
// console.log(n)
// // console.log("qwerty")
// // console.log("10")
//
//
// //string()
// console.log(String(n))
//
// //toString()
// console.log(n.toString())
//
// // + ""  -пустая строка
// console.log(n + "")
// // console.log("" .length)
// // console.log(n +"qwerty")
// // console.log(5 + "5")
//
//
//
// let a ="5"
// // Number()
//
// console.log(Number(a))
//
// //parseInt()
// console.log(parseInt(a))
//
// // + - unary operator
//
// console.log(+a)
// console.log(Number("100"))
// console.log(Number("qwerty"))
//
// //NaN  -not a number
// console.log(typeof NaN)
// // console.log("b" +"a" + +"a" +"a")
//
//
// let b = "10"
//
// console.log("10"+ 5)
// console.log("10"-"5")
// console.log("10" * "5")
// console.log("10" / "5")
// console.log("10" % "5")
// console.log("10"-"qwerty")
// console.log(`10`-`${b}`)


//
// let a ="10"

// let b = 10
//
// // ==
// // ===
//
// console.log(a==b)
// console.log(parseInt(a) ===b)

// if else


// let seasons=6
//
// if (seasons >=9 && seasons <=11){
//     console.log("autumn")
// } else if(seasons >0 && seasons <=2 ) {
//     console.log("winter")
// } else if(seasons >=3 && seasons <=5){
//     console.log("spring")
// } else if(seasons >=6 &&  seasons <=8){
//     console.log("summer")
// }













// HW

//

//  1. Вам дана переменная a. Если переменная a равна 10,
//  то выведите 'Верно', иначе выведите 'Неверно'.

//
// let a=5
// if (a >=1 && a<=10) {
//     console.log("true")
// }else{
//     console.log("false")}




// 2. Вам даны две переменные a=50, b=100. Составьте условие,
// по которому в консоль будет выводиться
// 'a больше b', 'a меньше b'.


// let a=50
// let b=100
// if (a >=b && b<=a){
//     console.log("big")
// }else{
//     console.log("small")
// }



// 3. Вам дана переменная a=-2. Составьте условие,
// по которому в консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.

//
// let a = -2
// if (a >= 0 && 0 <= a) {
//     console.log("positive")
// } else if (0 >= a && 0 >= a) {
//     console.log("negative")
// }


// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".

//
// let number = 45
// if (number % 2 === 0) {
//     console.log("Четное число")
// }else {
//     console.log("Нечетное число")
// }

// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток деления a на b, будет выводиться консоль "Четное число",
// "Нечетное число".

//
// let a=10
// let b=2
// if ((a/b) %2 ===0){
//     console.log("Четное число")
// }else{
//     console.log("Нечетное число")
// }




// 6. Вам дана переменная s. Составьте условие,
// по которому в консоль будет выводится тип этой переменной - "boolean", "number", "string".
//
// let s =true
// console.log(typeof s)


// 7. Вам дана переменная а. Если переменная a больше одного и меньше 9-ти,
// то выведите 'Верно', иначе выведите 'Неверно'.
//
// let a =15
// if ( a >= 1 && a <= 10){
//     console.log('Верно')
// } else{
//     console.log('Неверно')
// }


// 8. Вам дана переменная а. Если переменная a равна трем или равна семи,
// то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной в консоль.

//
// let a = 7;
//
// if (a === 3 || a ===7) {
//     console.log(a + 7)
// }else {
//     console.log(a / 10)
// }

//
// 9. Вам даны переменные а , b. Если переменная a равна или меньше 0,
// а переменная b больше или равна 5, то выведите сумму этих переменных,
// иначе выведите их разность (результат вычитания).
//
// let a=134
// let b=356
// if (a<= 0 && b>=5){
//     console.log(a+b)
// }else{
//     console.log(a-b)
// }



// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти,
// или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно',
// в противном случае выведите 'Неверно'.

// let a=3
// let b=3
// if (a <4 && a<10 || b>7 && b<17 ){
//     console.log("Верно")
// }else {
//     console.log("Неверно")
// }



// 11. Вам дана переменная month. В ней лежит какое-то число из интервала от 1 до 12.
// Определите в какую пору года попадает
// этот месяц (зима, лето, весна, осень).

//
// let seasons=3
//
// if (seasons >=9 && seasons <=11){
//     console.log("autumn")
// } else if(seasons >0 && seasons <=2 ) {
//     console.log("winter")
// } else if(seasons >=3 && seasons <=5){
//     console.log("spring")
// } else if(seasons >=6 &&  seasons <=8){
//     console.log("summer")



// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// let day=12
// if (day >=1 && day <=10){
//     console.log("первую")
// }else if (day >=11 && day <=20){
//     console.log("вторую ")
// }else if (day >=21 && day <=31){
//     console.log("третью")
// }



// 13. Вам дана переменная a='12345'. Проверьте, что первым символом этой переменной
// является цифра 1, 2 или 3. Если это так – выведите ‘да’, в противном случае выведите ‘нет’.


// let a=`12345`
// if (+a[0] === 1  || +a[0] === 2  || +a[0] === 3){
//     console.log(true)
// } else{
//     console.log(false)
// }




// 14. Вам дана переменная age=*любое двузначное число*. Составьте условие, по которому,
// в консоль будет выводиться "Мне  год", "Мне  лет", в зависимости от возраста.
// Наример мне 21 год, мне 20 лет.

//
// let age=1111
// let a =age % 10
// let b =age % 100
//
// if (a === 1 && b !== 11){
//     console.log(" мне " + age + " год ")
// }




// 15. Вам дана переменная time= *любое чило от 1 до 59*. Составьте условие,
// по которому время будет делиться на четверти. Пример: time = 12 - Первая четверть.
// Если число больше 60, то в консоли будет выдаваться "Неверное число".

//
let time = 56
if (time >= 0 && time <= 30) {
    console.log("Первая четверть")
} else if (time >= 31 && time <= 59) {
    console.log("Неверное число")
} else {
    console.log("Error")
}




// 234565342 = 8
// 9978678765 = 9
// 87656443545 = 3
// 11111122222= 7
// 22222 = 1
// 33333 = 6
// 2225 = 2
// 33 = 6
// 11111 = 7









let string = "Hello, World!"
console.log(string)
console.log(string.length)

//''
//${}
let word = "Hello,"
let massage = " World"

// let result = '${massage}, ${word}'
// console.log(result)
console.log(word + massage)

let name = 'Erkeaiym'
console.log(word + name + '!')

let age = '19'
console.log('I am ' + age + ' years old')

let year = '365'
let call = 'Kyrgyzstan'
let people = '7 million'
let called = 'Sun'

console.log('There are ' + year + ' days in a year.')
console.log( 'The ' + called + ' is shining and the car is fixed ')
console.log( 'The ' + call + ' population is approximately ' + people + ' people.')

let a = "10"
let b = "35"
let result = `${a}${b}`
console.log(result)






























