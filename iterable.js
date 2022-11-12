// iterable -интерируемый - перебираемый
// non-iterable - не интерируемый


// map()
// filter()
// sort()


// let numbers1 = [1,2,3,4,5,6,7,8,9,10]
//
// console.log(numbers1.map(function(el ,idx,arr ){
//     return el % 2 === 0
// }))
//
// console.log(numbers1.map(function(el ,idx,arr ){
//     return el % 2 !== 0
// }))




// let names = ["baiel","elbek","tatyna","erkeaiym","sherali","kambar"]
// console.log(names.filter(function(el){
//     return el.includes("t")
// }))
//
// console.log(names.filter(function(el){
//     return el.includes("e")
// }))
//
// // names [0] [0].toUpperCase()
//
//
// let num = new Array(100).fill(0)
//
// console.log(num.fill(0).map(function( el , idx,arr ){
//     return  idx + 1
// }))














// sort()
// bubble sort()


// let numbers = [2,3,9,6,1,4,8]
//
// console.log(numbers.sort(function (a,b){
//     return a - b
// }))
//
// console.log(numbers.sort(function (a,b){
//     return b - a
// }))







 // Home work --------------------------MAP--------------------------------------
// Во всех задачах используйте только методы map, filter.



// 1. Вам дан массив: [315, 64, 75, 43, 65, 63].Найдите сумму каждого числа.

let task1 = [315, 64, 75, 43, 65, 63]
let sum = 0
task1.filter(function(el,idx,adx){
    return sum +=el
})
console.log(sum)



// 2. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию,
// изменяющую букву а в каждом имени на я и выведите в консоль.


let task2 = ['Аскар', 'Баяман', 'Калмамат']
console.log(task2.map(function(name){
    return name.split("").map(el =>{
        console.log(el)
        if (el === "а" || el === "А"){
            return "я"
        }else{
            return el
        }
    }).join("")
}))



// 3. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат'].
// Создайте функцию, которая выводит только те имена,
// где есть буква к и выведите в консоль.

let task3 = ['Аскар', 'Баяман', 'Калмамат']
console.log(task3.filter(function(el){
    return el.includes("К") || el.includes("К")
}))



// 4. Вам дан массив: [4, 54, 49]. Сделайте из него массив,
// состоящий из квадратов этих чисел.

let nums = [4, 54, 49]
console.log(nums.map(function (el){
    return el ** 2
}))



// 5. Вам дан массив [3134, 4, -143, -245, -214].
// Оставьте в нем только отрицательные числа.

let negatives = [3134, 4, -143, -245, -214]
console.log(negatives.filter(function (el, idx, arr){
    return el < 0
}))


// 6. Вам дан массив [3, 51, 30, 54, 60].
// Оставьте в нем только четные числа.

let task6 = [3, 51, 30, 54, 60]
console.log(task6.filter(function(el,idx,arr){
    return el % 2 === 0
}))

// console.log( task6.map(function(n){
//     if ( n % 2 === 0){
//         return "четное числа"
//     }else{
//         return "нечетное числа"
//     }
// }))

// 7. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат'].
// Оставьте в нем только те строки, длина которых больше 5-ти символов.

 let task7 = ['Бегимай', 'Баяман', 'Калмамат']
console.log( task7.filter(function(el){
    return el.length > 5
}))


// 8. Вам дан массив [-13, 96, -41, -28, 40].
// Посчитайте количество отрицательных чисел в этом массиве.

let task8 = [-13, 96, -41, -28, 40]
function elem (el){
    return el < 0
}
let newArr = task8.filter(elem)
console.log(newArr.length)


// 9. Вам дан массив [3, 51, -30, -54, 60].
// Оставьте в нем только положительные числа.
// Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.

let pos = [3, 51, -30, -54, 60]
console.log(pos.filter(function (el,idx,arr){
    return el > 0
}))

// 10. Вам дан массив [55, 44, 55, 44, 15, 49].
// Оставьте в нем только неповторяющиеся числа.

let task10 = [55, 44, 55, 44, 15, 49]
console.log(task10.filter(function(el,idx,arr){
    return task10.indexOf(el) === (task10.lastIndexOf(el))
}))


// 11. Вам дан массив [NaN, 0, 77, false, -17, '',undefined, 99, null].
// Создайте функцию, которая очищает массив от ложных (false)
// значений: false, null, undefined, 0, –0, NaN и "" (пустая строка).

let task11 = [NaN, 0, 77, false, -17, '',undefined, 99, null]
console.log(task11.filter(function(el,idx,arr){
return el
}))

// 12. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.

let task12 =['Бегимай', 'Баяман', 'Калмамат']
console.log(task12.map(function(el){
    return el.length
}))









