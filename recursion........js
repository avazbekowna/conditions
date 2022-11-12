
// "RECURSION" - рекурся [] - это когда функция вызывает сама себя,
// и чтобы остановить на своим условие (кайталанган , бесконечный)

// "CLOSURE" - доступ

// "CARRYING" - коррирование  это когда функция принимает множество аргумпентов
// и если  мы хотим  чтобы  она принимала по одному то используем коррироваание
// ( каррирование - трансформация - озгорулмолор




// recursion---------------------------------------------------------------------

// 1.
// let c = 0
// function func (){
//     c++
//     return c < 10 ? func() : c
// }
//
// console.log(func())


// 2.
// let s = 0
// function getNum (n){
//     let sum = n.toString().split('').reduce((acc,el) =>{
//         return acc + +el
//     },0)
//     s++
//     console.log(n)
//     return sum >= 10 ? getNum(sum) : sum
//
// }
//
// console.log(getNum(3578457))
// console.log(getNum(3578457345))


// 3.
// let result = 1
// for (let i = 1; i <= 10; i++){
//     result *= i
// }
// console.log(result)




// 10! = 1 * 2 * 3 ... 9 * 10---------------- factorial  ------------------------------


// function factorial (n){
//     if (n < 0) return;
//     if (n === 0  ||  n === 1){
//         return 1
//     }
//     return n * factorial(n -1)
//  }
//
// console.log(factorial(10))


// closure ---------------------------------------------------------------------------------

// 1.
// function  func (n){
//     return function (){
//         return n + 100
//     }
// }
//
// console.log(func(5))



// 2.
//  let n = 10
// function getNum (n){
//
// }


// carrying ------------------------------------------------------------------------------

// 1.
// function func (a,b,c,d,e){
//     return a + b + c + d + e
// }
//
// console.log(func(2,3,4,5,6))


// 2.
// const carryingFn = (a) => {
//     return (b) => {
//       return (c) => {
//         return (d) => {
//           return (e) => {
//             return a + b + c + d + e
//     }
//     }
//     }
//     }
// }

// const carryingFn = a => b => c => d => e=> a + b + c + d + e
// console.log(carryingFn(10)(20)(30)(40)(50))


// 2.
// const web = (domain) => {
//     return function (name){
//         return `https://${name}.${domain}`
//     }
// }
//
// let comUrl = web ('com')
// let kgUrl = web ('kg')
//
//
//
// console.log(comUrl('google'))
// console.log(comUrl('apple'))
// console.log(comUrl('netflix'))
//
// console.log(kgUrl('lalafo'))
// console.log(kgUrl('amin'))
// console.log(kgUrl('shoro'))


// "fdvd" -> "(((("
// "frbf" -> ")(()"
//  "aa"  -> "))"
// "aabs" -> "))(("


// 3.
function func (str){
    let arr = str.split('')
    return arr.map (el => {
        if(arr.indexOf(el) === arr.lastIndexOf(el)){
            return ")"
        }else{
            return "("
        }
    }).join("")
}

console.log(func("aabs"))
console.log(func("fdvd"))
console.log(func("frbf"))
console.log(func("aa"))


// 4.
function getN(str){
    return str.split('').filter(el =>{
        return str.split ('').indexOf(el) !== str.split(''.lastIndexOf(el))
    }).length / 2
}

console.log(getN("abcd"))
console.log(getN("abcdd11"))


// 5.



















