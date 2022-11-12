// Array -массивы

// index - []
// length

// []
// new

// let numbersArr = [1,2,3,4,5,6,7,8,9,10]
// let secondNumbers = ["a", "b", "c", "d"]
// // numbersArr [10] = 11
// // numbersArr[0] = 0
// console.log(numbersArr + secondNumbers)
// console.log(typeof numbersArr)
// console.log(numbersArr)
//
//
// console.log(numbersArr .concat(secondNumbers))
//
//
// // console.log(numbersArr)
// // console.log(numbersArr.length)
//
// let dataArr =[ 1, true ,[1,2,3,4]]
//
//
//
//
//
//
//




// split () -string-только на строке работает
// join ()


// let a = "frontend"
// let b = "baiel elbek"
// let c = "2022/12/12"
// let d = "2022*12*12"
//
// let e = [ "1", "2", "3", "4"]
//
// console.log(a.split (""))
// console.log(b.split (" "))
// console.log(c.split ("/") .join)
// console.log(d.split ("*"))
//
// console.log(e.join(""))
// console.log(e.join(" "))
// console.log(e.join("&"))
//
// let numbersArr =[1,2,3,4,5,6,7,8,9,10]
// console.log(numbersArr.reverse)

// pop
// push
// shift
// unshift


// numbersArr.unshift(0)
// numbersArr.push(0)
// console.log(numbersArr)
// numbersArr.shift()
// numbersArr.pop()
// console.log("*************")
// console.log(numbersArr)
//


// new
// unary operator
// global object - Array
// .fill()

// let array = new Array (5).fill("x")
// console.log(array)



//ternary operator ?:
// function op (n,x,y){
//     // return (n%x ===0) && ( n%y ===0 ) ? true :false
//     // //return  (n%x ===0) && ( n%y ===0 )
// }




//homework-array-массивы-№1
//-------------------------------------------------------------------------------------

//
// // 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
//
// let task1 =['a', 'b', 'c']
//  task1.push(1,2,3)
// console.log(task1)
//
//
// // 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

let task2 = [1, 2, 3]
let do2 = [4, 5, 6]
console.log(typeof task2)
console.log(task2.concat(do2))

// // 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

let task3 = [1, 2, 3]
task3.push(4,5,6)
console.log(task3)

//
//
// // 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

let task4 = [1, 2, 3]
task4.unshift(4,5,6)
console.log(task4)

// // 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
//
// let task5 =['js', 'css', 'jq']
// console.log(task5[0])
//
//
// // 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
//
// let task6 = ['js', 'css', 'jq']
// console.log(task6[2])
//
//
// // 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый
// // элементы [1, 2, 3].
//
// let task7 = [1, 2, 3, 4, 5]
// console.log(task7.slice(0,3))
//
//
// // 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый
// // элементы [4, 5].
//
// let task8 = [1, 2, 3, 4, 5]
// console.log(task8.slice (3,5))
//
//
// // 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте
// // массив в [1, 4, 5].
//
// let task9 =[1, 2, 3, 4, 5]
// let addedNumber = task9.splice(1,2)
// console.log(addedNumber)
// console.log(task9)
//
//
//
// // 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый
// // массив элементы [2, 3, 4].
//
// let task10 = [1, 2, 3, 4, 5]
// let to10 = task10.splice(4,2,)
// console.log(to10)
// console.log(task10)
//
//
// // 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
// // массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//
// let task11 = [1, 2, 3, 4, 5]
// task11.splice (3,0,"a","b","c")
// console.log(task11)
//
//
// // 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
// // массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//
// let task12 =  [1, 2, 3, 4, 5]
// task12.splice(1,4,'a', 'b', 2,3,4, 'c', 5,'e',)
// console.log(task12)
//
// // 13  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
//
// // let task13 = [3, 4, 1, 2, 7]
//
//
// // 14 биринчи элемент кайтарып берет
// // var array = [1,2,3,4,5,6,7,8,9];
//
// // function getFirst(array) {
// //     ваш код
// //
// // };
//
// let task14 = [1,2,3,4,5,6,7,8,9]
// console.log(task14[0])
//
//
// // 15 акыркы элемент кайтарып берет
// // var array = [1,2,3,4,5,6,7,8,9];
//
// // function getLast(array, n) {
// //     ваш код
// // };
//
// let task15 = [1,2,3,4,5,6,7,8,9]
// console.log(task15.slice(-1))

























