// loop

// for ()
// while ()
// do while ()


// const greeting = () => {
//     return "Hello"
// }

// let n = 0
// n++
// console.log(++n)
// increment ++
// preincrement ++n , postincrement n++

// decrement --


// initialization
// condition
// postExpression




// for -------------------------------------------------------
// for (let i = 0; i < 100; i++){
//     console.log(i)
// }


// let result = 0
// for (let i = 0; i <= 100; i++){
//     // result = result + i
//     result +=i
// }
//
// console.log(result)



//
// for (let i = 0; 1 <= 20; i++){
//     if (i % 2 === 0){
//         console.log(1)
//     }
// }



// let arr =[10,20,30,40,50,60,70]
// let result1 = 0
// for (let i = 0; arr.length; i++) {
//     // console.log(arr[i])
//     result1 += arr[1]
// }
// console.log(result1)
//
//
// let str = 'motionweb'
// let result2 = ""





// while ---------------------------------------------------


//  let n = 0
//
// while (n < 20){
//     console.log(n)
//     n++
// }



// do while ------------------------------------------------


// let n = 0
//
// do{
//     n++
//     console.log(n)
// }while (n < 10)




// function sort (arr){
//     for (let i = 0; i < arr.length; i++){
//         if (Math.sqrt(arr[i]) % 1 === 0 ){
//             result.push(Math.sqrt (arr))
//         }
//     }
//
// }
//
// console.log(sort([4,3,9,7,2,1]))
//
// // [4,3,9,7,2,1]  -> [2,9,3,49,4,1] --- не до конца


//-------------------------CodeWars-------------------

// 1

// function getNum(integer, limit){
//     let result = []
//     for (let i = integer; i < limit; i++){
//         if ( i % integer === 0){
//             result.push(i)
//         }
//
//     }
//     return result
// }
//
// console.log(getNum(2,6))


// 2





//---------------------------task---------------------

// for (let i = 1; i < 10; i++){
//     for (let j = 1; j < 10; j++){
//         console.log(`${i} x ${j} = ${i *j}`)
//
//     }
// }

// таблица умножение

// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 1 x 4 = 4







// -----------------------homeWork--------loop--------------------------------


// 1. Выведите столбец
// чисел от 1 до 50.

// for (let i = 1; i < 51; i++){
//    alert (i)
// }

// 2. Создайте переменную с пустым массивом,
// заполните массив 10-ю элементами X с помощью цикла.

// let arr = Array();
// for (let i = 0; i < 10; i++) {
//     arr.push('x');
// }
// console.log(arr);

// 3. Вам дан массив с элементами [5, 3, 1, 2, 7].
// С помощью цикла for выведите все эти элементы в консоль.

// let task3 = [5, 3, 1, 2, 7];
// for (let i = 0; i < task3.length; i++) {
// }
// console.log(task3)


// 4. Вам дан массив с элементами [5, 2, 1, 2].
// С помощью цикла for найдите произведение элементов этого массива.


// let task4 = [5, 2, 1, 2]
// let result = 1
// for (let i = 0;  i < task4.length; i++) {
//     result *= task4[i]
// }
// console.log(task4)


// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.


// for (let  i = 1; i <= 100; i++) {
//     if( i % 2 === 0) {
//         console.log(i)
//     }
// }
// console.log()


// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum)

// 7. Вам дан массив с элементами [2, 4, 5, 6, 8].
// С помощью цикла for найдите сумму элементов этого массива.
// Запишите ее в переменную result.

// let task7 = [2,4,5,6,8]
// let result = 0;
// for (let i = 0; i < task7.length; i++){
//     result += task7[i];
// }
// console.log(result)


// 8. Вам дан массив [3, 4, 6, 12, 3, 5].
// С помощью цикла for и оператора if выведите
// на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// let task8 = [3, 4, 6, 12, 3, 5]
// for (let i = 0; i < task8.length; i++){
//     if (task8 [i] > 3 && task8[i] < 10){
//         console.log( task8 [i])
//     }
// }

// 9. Вам дан массив с числами.
// Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.

// let task9 = [2,4,5,0,15,4,-19,-4]
// let me = 0;
// for (let i = 0; i < task9.length; i++){
//     if (task9 [i] > 0){
//         me += task9[i]
//     }
// }
// console.log(me)

// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20].
// С помощью цикла for и оператора if проверьте есть ли в массиве
// элемент со значением, равным 4. Если есть - выведите на экран 'Есть!'
// и выйдите из цикла. Если нет - ничего делать не надо.


// let arr10 = [5, 1, 3, 7, 6, 15, 3, 20]
// for(let i = 0; i < arr10.length; i++){
//
// }



// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000].
// Выведите на экран только те числа из массива, которые начинаются
// на цифру 1, 2 или 5.

// let task11 = [10, 20, 30, 40, 135, 2000]
// console.log(task11.filter(num => ['1','2','5',].includes(num.toString() [0])))


// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9].
// С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.


// let task12 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result = "-"
// for (let i = 0; i <= task12.length; i++){
//    result += task12 [1] + "-"
// }
// console.log(result)


// 13. Вам дано число n=1000. Делите его на 2 столько раз,
// пока результат деления не станет меньше 50. Какое число получится?
// Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла),
// и запишите его в переменную num.


// let num = 0
// for (let i = 1000; i > 50;  i = i /2){
//     console.log(i)
//     num++
// }
// console.log("ertyuiop - ",num)



// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9].
// Найдите среднее арифметическое его элементов
// (сумма элементов, делить на количество).

// let task14 = [1, 2, 3, 7, 6, 9]
// let  ass = 0
// for (let i = 0; i < task14.length; i++){
//     ass += task14 [i]
//
// }
// let arif = ass / task14.length;
// console.log(arif)


// 15. Вам дан массив с числами [1, 2, 3, 4, 5].
// С помощью цикла найдите сумму квадратов элементов этого массива.

// let arr = [1,2,3,4,5]
// let result = 0
// for (let i = 0; i < arr.length; i++){
//     result += arr [i] ** 2
// }
// console.log(result)

// let arr = [1, 2, 3, 4, 5]
// let result = 0
// for (let i = 0; i < arr.length; i++){
//     result += arr[i] ** 2
// }
// console.log(result)


// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12].
// С помощью цикла выведите только те элементы массива,
// которые больше нуля и меньше 10-ти.

// let task16 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
// for (let i = 0; i < task16.length; i++){
//     if (task16 [i] > 0 && task16 [i] < 10){
//         console.log(task16[i])
//     }
// }



// 17. Создайте переменную с пустым массивом,
// заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.

// let task17 = []
// for (let i = 0; i < 10; i++){
//     task17.push(Math.ceil(Math.random() * 10 ) );
// }
// console.log(task17)

// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.

// let task18 = 0
//
// for (let i = 0; i < 1000; i++){
//     if ( i % 3 === 0 && i % 5 === 0 ){
//         task18 += i;
//     }
// }
// console.log(task18)

// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].
// Создайте цикл, который выводит нечетные числа, которые больше 10.

// let task19 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// for (let i = 0; i < task19.length; i++){
//     if (task19[i] % 2 !== 0 && task19 [i] > 10){
//         console.log(task19 [i])
//     }
// }


// 20. Вам дана строка 'jzvzszrzpz'.
// Измените каждую вторую букву на верхний регистр.


// let str ='jzvzszrzpz'
// let result = ""
// for (let i = 0; i < str.length; i++){
//     if ( i % 2 !== 0){
//         result += str[i].toUpperCase()
//     }
//     else{
//         result += str[i]
//     }
// }
// console.log(result)




//-------------------practice--------------------


// continue
// break

//-----------------------------------------

// let n =0
// for (let i = 1; i < 15; i++){
//     if(i === 4){
//         continue;
//     }
//     if (i === 11){
//         break;
//     }
//     console.log(i)
//     n++
// }
// console.log("n - ", n)

//-----------------------------------------


// for in
// for of


//-----------------------------------------

// let countries = ["Russia","USA","China","Kyrgyzstan", "France"]

// for (let idx in  countries){
//     console.log(countries[i])
// }

// for (const el of countries){
//     console.log(el)
// }

//  const obj = {
//     name: "Baiel",
//      country:"Kyrgyzstan",
//      car:"Tesla",
//  }
//
//  for (const key of Object.values(obj)){
//      console.log(key)
//  }

//
// console.log(countries.find(el =>{
//     return el = "USA"
// }))
//
// console.log(countries.filter(el =>{
//     return el === "USA"
// }))



//-----------------Foreach------------------


//
// let countries = ["Russia","USA","China","Kyrgyzstan", "France"]
// console.log(countries.find)



// let a = 1
// if ( a > 0) {
//     let ggg = function() {
//         console.log ("!");
//     }
// } else {
//     let ggg = function() {
//         console.log ("!!");
//     }
// }




function task1 (a){
    if ( a > 0 ){
        return "!"
    }else{
        return "!!"
    }
}

console.log(task1(-3))



// let arr = [];
// for (let i = 0  ; i <= 10; i++) {
//     arr[i] = 'x';
// }
// console.log (arr);


// function task3() {
//     let i = 1;
//     return function() {return i++};
// }
//
// let func = task3();
//
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());


// function call () {
//     let b = 1;
//     return function () {return b++};
// }
// let func = call();
//
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());

