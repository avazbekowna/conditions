// let sum = [1,2,3,4,5,6,7,8,9,10]
//
// console.log(sum.some((el,idx,arr) =>{
//     return el % 2 === 0
// }))
//
//
//
// //
// console.log(sum.every((el,idx,arr) =>{
//     return el % 2 === 0
// }))
//
// //
// console.log([].some((el,idx,arr) =>{
//     return el % 2 === 0
// }))
//
// //
// console.log([].every((el,idx,arr) =>{
//     return el % 2 === 0
// }))
//
// function getSum(array){
//     return array.reduce(function(acc,el,idx,arr){
//         console.log("acc", acc , "el" , el)
//         return acc + el
//     },0)
// }
//
// console.log(sum.map((el) =>{
//     return el % 2 ===0
// }))



// // [1,2,3,4,5,6,7,8,9,10]
// console.log(sum.reduce((acc,el) =>)


// let summation = function (num) {
//     // Code here
//     let arr = new Array(num).fill(0)
//     return arr.fill(5).map((el,idx,acc) =>{
//         return idx + 1
//     }).reduce((acc,el) =>{
//         return acc + el
//     })
// }
// console.log(summation(10))









// Во всех задачах используйте только методы map, reduce.


// 1. Вам дан массив с числами [5,15,315,2,13,20,9].
// Найдите сумму этих чисел.

// let mass = [5,15,315,2,13,20,9]
// let sum = 0
// mass.map(function(el,idx,arr){
//     return sum +=el
// })
// console.log(sum)









//HOMEWORK

//Во всех задачах используйте только методы map, reduce.
// 1. Вам дан массив с числами [5,15,315,2,13,20,9].
// Найдите сумму этих чисел.


// let num = [5,15,315,2,13,20,9]
// console.log(num.reduce((acc,el)=>{
//     return acc + el
// },0))


// 2. Вам дан массив с числами [5,12,314,2,13,20,9].
// Найдите сумму всех четных чисел.

//
// let num2 = [5,12,314,2,13,20,9]
// console.log(num2.filter((el,idx)=>{
//     return el % 2 === 0
// }).reduce((acc,el)=>{
//     return el + acc
// },0))


// 3. Вам дан массив с числами [5,15,315,2,13,20,9].
// Найдите сумму чисел, которые больше 10.


// let num3 = [5,15,315,2,13,20,9]
// console.log(num3.filter((el)=>{
//     return el > 10
// }).reduce((acc,el)=>{
//     return acc + el
// },0))


// 4. Вам дан массив с числами [3,13,54,15,335, 39].
// Найдите разность чисел, которые больше 10.

//
// let num4 = [3,13,54,15,335, 39]
// console.log(num4.filter((el)=>{
//     return el > 10
// }).reduce((acc,el)=>{
//     return acc - el
// },0))





// function task4 (num){
//     return num.filter((el)=>{
//         return el > 10
//     }).reduce((acc,el)=>{
//         return acc - el
//     })
//
// }
//
// console.log()

// 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат'].
// Сложите все строки и выведите длину результата.


// let str5 = ['Аскар', 'Баяман', 'Калмамат']
// let sumStr = str5.reduce((acc,el)=>{
//     return acc + el
// },[])
// console.log(sumStr)
// console.log(sumStr.length)



// 6. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат'].
// Выведите все строки в верхнем регистре, используя map.

//
// let str6 = ['Аскар', 'Баяман', 'Калмамат']
// console.log(str6.map((el)=>{
//     return el.toUpperCase()
// }))


// 7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат'].
// Выведите все вторые строки в верхнем регистре.


// let str7 = ['Аскар', 'Баяман', 'Калмамат']
// console.log(str7.map((el,idx)=>{
//     return el[0].toLowerCase() + el[1].toUpperCase() + el.slice(2)
// }))

//
// function task7 (arr){
//     return arr.map((el) =>{
//         return el.split("").map((el) =>{
//             if (idx % 2 !== 0 ){
//                 return el.toUpperCase()
//             }else{
//                 return el.toLowerCase()
//             }
//         }).join("")
//     })
// }



// 8. Напишите функцию, которая принимает str, target.
// И возвращает true или false, если targer присутствует в str.
// Использовать .reduce для этого.
// Пример: isPresent ('abcd', 'b') => true
// isPresent ('efghi', 'a') // => false


// function into (str,target){
//     if(str.includes(target)){
//         return true
//     }else {
//         return false
//     }
// }
// console.log(into)


// function task8 (str,target){
//     return str.split('').reduce((acc,el) =>{
//         if()
//     })
// }


// 9. Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат'].
// Используйте заглавные буквы в каждом массиве имен.
// Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])),
// => ["John", "Jacob", "Jingleheimer", "Schmidt"]

//
// let str9 = ['асКар', 'бЯяман', 'калМмамат']
// console.log(str9.map((el,idx)=>{
//     return el[0].toUpperCase() + el.slice(1).toLowerCase()
// }))


// 10. Вам дан массив со строками ['Баяман', 'Калмамат'].
// Поменяйте местами первые буквы строк.


// let arr10 = ['Баяман', 'Калмамат']
// console.log(arr10.map((el,idx)=>{
//     return el.replace(el[0], el[1]) && el.replace(el[1], el[0])
// }))

// function task10(arr){
//     return arr.map((el,idx) =>{
//         if(idx === 0){
//             return el[0] + arr[idx + 1].slice(1)
//         }else{
//             return el[0] + arr[idx - 1].slice(1)
//         }
//     })
// }
//
// console.log()


// 11. Вам дан массив [true, '1234', 325]. Напишите функцию,
// которая проверяет, все ли элементы массива относятся к одному типу данных.

// let task11 = [true, '1234', 325]
// console.log(task11.map((el)=>{
//     return typeof(el)
// }))


// function task11 (too){
//     return too.map((el) =>{
//         return typeof (el)
//     })
// }
// console.log(task11( [true, '1234', 325]))


// function task11(types){
//     return types.reduce((acc,el,idx) =>{
//         if (idx === types.length - 1 ){
//             return typeof el === typeof types [idx + 1]
//         }
//         return acc
//     },true)
// }
//
// console.log(task11([true, '1234', 325]))
// console.log(task11([345,234, 325]))
// console.log(task11(['1234', '1234','1234']))
// console.log(task11([true, '1234', 325]))



// 12. Вам дана строка 'тестинг'. Ваша задача - вернуть средний символ слова.
// Если длина слова нечетная, верните средний символ.
// Если длина слова четная, вернуть 2 средних символа.

// let task12 = "testing"
// let task13 = "swimming"
//
// function extractMiddle(str) {
//
//     let position;
//     let length;
//
//     if(str.length % 2 === 1) {
//         position = str.length / 2;
//         length = 1;
//     } else {
//         position = str.length / 2 - 1;
//         length = 2;
//     }
//
//     return str.substring(position, position + length)
// }
//
// console.log(extractMiddle(task12))
// console.log(extractMiddle(task13))
//
//

//
// function task12 (pop){
//     if(pop.length % 2 ===0){
//         return pop[pop.length / 2 - 1] + pop [length / 2]
//     }else{
//         return pop [Math.floor(pop.length  / 2 )]
//     }
// }
//
// console.log(task12("testing"))



// 13. Вам дан массив с числами [5, -3, 13, -7, 45].
// Верните сумму всех положительных чисел.

// let positives = [5, -3, 13, -7, 45]
// console.log(positives.filter((el)=>{
//     return el>0
// }).reduce((acc,el)=>{
//     return acc + el
// },0))


// 14. Вам дан массив с числами [5, -54, 13, -7, 45, -15, -34].
// Верните сумму всех отрицательных чисел, которые больше 10.

// let negatives = [5, -54, 13, -7, 45, -15, -34]
// console.log(negatives.filter((el)=>{
//     return el < 0
// }).reduce((acc,el)=>{
//     return acc + el
// }))

//
// function task14 (arr){
//     return arr.reduce ((acc,el) =>{
//         if (el < -10){
//             return acc + el
//         }
//         return acc
//     }, 0)
// }
//
// console.log(task14([5, -54, 13, -7, 45, -15, -34]))


// 15. Вам дан массив с числами [1, 65, 13 , 30, 100] - все числа - доллары.
// Вам нужно обменять эти доллары по курсу сома и вывести все числа в сомах.

// let dollar = [1, 65, 13 , 30, 100]
// let som = 80.27
// console.log(dollar.map((d)=>{
//     return d * som
// }))


// console.log([1, 65, 13 , 30, 100].map(el => Math.round(el *83.5)))



// 16. Вам дан массив со строками ['Lorem ipsum dor sit amet devour il ela sit'].
// Выведите каждый нечетный индекс в строке в верхнем регистре.

// let high = ['Lorem ipsum dor sit amet devour il ela sit']
// console.log(high.map((el,idx,arr)=>{
//     return idx.length
//     // if(arr.length % 2 !== 0){
//     //     return el.toUpperCase()
//     // }else{
//     //     return el.toLowerCase
//     // }
// }))

//
// function task16 (text){
//     return text
// }


// 17. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат'].
// Добавьте к каждой строке нумерацию.

// function task17 (names){
//     return names.map((el,idx) => )
//
// }
//
// console.log(task17 (['Аскар', 'Баяман', 'Калмамат']))



// 18. Вам дан массив с числами [2,456,6,8]. Напишите функцию ,
// которая вставляет дефис (-) между каждыми двумя четными числами.
// Например, если вы принимаете 025468, на выходе должно быть 0-254-6-8.

// function task18 (arr){
//     let result = []
//     let array = arr.join("").split("")
//     array.reduce((acc,el,idx) =>{
//         if ( el % 2 === 0 && array[idx+1] % 2 ===0){
//             return result.push(el,"-")
//         }else{
//             return result.push(el)
//         }
//     },'')
//     return result.join('')
// }
//
// console.log(task18([2,456,6,8]))

// 20. Вам дан массив с числами [5,15,315,2,13,20,9]. Посчитайте среднее
// арифметическое чисел в массиве.

let arif = [5,15,315,2,13,20,9]
console.log(arif.reduce((acc,el)=>{
    return (acc + el) / arif.length
}))


function task20 (numbers){
    return numbers.reduce ((acc,el) =>{
        return (acc + el)
    }) / numbers.length
}

console.log(task20([5,15,315,2,13,20,9]))





// && жана ,и
// || же ,или

// console.log( true && false)
// console.log( true && true)
// console.log( false && false)


   //task1
//напишите метод который будет поучать массив в качестве параметров
// и будет обрабатывать каждое число из этого массива вернуть новый  массив с обработкой каждого числа входного


// function task23(arr){
//     return arr.map(el =>{
//         if(Math.sqrt(el) % 1 === 0){
//             return Math.sqrt(el)
//         }
//         return el ** 2
//     })
// }
//
// console.log(task23([]))



  //task2

//  function camelCase(str){
//     return str.split("-").map((el))
//  }
//
//
// console.log(camelCase("the-stealth-warrior"))



// task3

function sqrt (nums){
    return String(nums).split("").map(el =>{
        return el ** 2
    }).join("")
}

console.log(sqrt(9119))




// task4

function getVowels( text, vowels){
    return text.split("").filter(el =>{
        return vowels.includes(el)
    }).length

}
console.log(getVowels("asdfghjwertyjgcvbmvc" , "auieo" ))


