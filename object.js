
// reference type
// object -> ссылочный тип - {}

//
//  let person = {
//     id: 1,
//      age: 20,
//      name:"Baiel",
//      hobbies: ["volleyball" , "football" , "video-game"],
//      address: {
//         street: "Turusbekova",
//          city: "Bishkek",
//          house: 109
//      },
//      books: ["romance" , "fantastic"],
//      films: ["comedy" , "action" , "sci-fi"],
//      married: false
//  }
//
// // console.log(person)
// // console.log(person.name)
//
// console.log(person.address.city)
// person.films = person.films.map(el => el.toUpperCase())
// // console.log(person.films.map(el => el.toUpperCase()))
// console.log(person)




// Мутация /^^\^^/

// let arr1 = [12,23,3,42,234,45,1]
// let arr2 = arr1
//
// let arr3 = [...arr1]
// arr1.sort((a,b) => a - b)
//
// console.log("arr1 - ",arr1 )
// console.log("arr2 - ",arr2 )
// console.log("arr3 - ",arr3 )



















// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.

// let task1 = {
//  a: 1,
//  b: 2,
//  c: 3
// }
// console.log(Object.keys(task1) .map(function(el){
//  return el.length
// }))


// 2. Создайте объект obj = {a: 1, b: 2, c: 3}.
// Выведите на экран элемент с ключом 'c' двумя способами:
// через квадратные скобки и как свойство объекта.

// let task2 = {
//  a: 1,
//  b: 2,
//  c: 3,
// }
// console.log(task2.c)
// let sum = "c"
// console.log(task2[sum])



// 3. Создайте объект заработных плат
// obj = {Ширин: '1000', Айжан:'500', Атай: '200'};
// Выведите на экран зарплату Атая и Ширин.

// let task3 = {
//  Shirin: '1000',
//  Aizhan:'500',
//  Atay: '200'
// }
//
// console.log(task3.Shirin,task3.Atay)




// 4. Создайте объект заработных плат
// obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
// Измените зарплату Атая на 500.

// let task4 = {
//  Shirin: '1000',
//  Aizhan:'500',
//  Atay: '200',
//
// }
// task4.Atay = '500'
// console.log(task4)



// 5. Создайте объект заработных плат
// obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
// Добавьте к объекту ключ Медет со значением 1500.
//
// let task5 = {
//  Shirin: '1000',
//  Aizhan:'500',
//  Atay: '200',
//
// }
// task5.Medet = 1500
// console.log(task5)


// 6. Создайте объект заработных плат
// obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Выведите значение ключа salary в консоль.

// let task6 = {
//  Shirin: '1000',
//  Aizhan:'500',
//  Atay: {
//   salary: '500'
//  }
//
// }
// console.log(task6.Atay.salary)



// 7. Создайте объект с днями недели.
// Ключами в нем должны служить номера дней от начала недели
// (понедельник - первый и т.д.). Выведите на экран текущий день недели.

// let task7 = {
//  1:"Monday",
//  2:"Tuesday",
//  3:"Wednesday",
//  4:"Thursday",
//  5:"Friday",
//  6:"Saturday",
//  7:"Sunday"
// }
// console.log(task7.Saturday)



// 8. Пусть теперь номер дня недели хранится в переменной day,
// например там лежит число 3. Выведите день недели,
// соответствующий значению переменной day.

// let task8 = {
//  Monday: 1,
//  Tuesday: 2,
//  Wednesday: 3,
//  Thursday: 4,
//  Friday: 5,
//  day:{
//   Saturday: 6,
//  },
//  Sunday: 7,
//
// }
// console.log(task8.day)



// 9. Создайте объект заработных плат
// obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Получите все ключи объекта.

// let task9 = {
//  Shirin: '1000',
//  Aizhan:'500',
//  Atay: {
//   salary: '500'
//  }
// }
//  let arr  = Object.keys(task9)
// let array = Object.keys(task9.Atay)
// console.log([...arr,...array])



// 10. Создайте объект заработных плат
// obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Получите все значения объекта.

// let task10 = {
//  Shirin: '1000',
//  Aizhan:'500',
//  Atay: {
//   salary: '500'
//  }
// }
// console.log(Object.values(task10))
// console.log(Object.keys(task10))



// 11. Создайте объект заработных плат
// obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Выведите все entries объекта.

// let task11 = {
//  Shirin: '1000',
//  Aizhan:'500',
//  Atay: {
//   salary: '500'
//  }
// }
//
// console.log(Object.entries(task11))



// 12. Создайте функцию, передайте в нее объект {name: 'Igor'}.
// Выведите 1, если длина ключа name нечетная, 0 если четная.


// function me (name){
//  if (name.length % 2 ===0 ){
//   return 0
//  }else{
//   return 1
//  }
// }
//
// console.log(me('Igor'))



// 13. Создайте функцию, передайте в нее массив с объектами
// [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] .
// Выведите все id в консоль через map.

//
// function id (obj){
//  return obj.map((el) =>{
//   return el
//  })
// }
//
// console.log(id([ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]))

// function obj (arr){
//  return arr.map(el =>{
//   return el.id
//  })
// }
//
// console.log(obj([ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]))




// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}.
// Добавьте новый ключ age со значением 25.
// Поменяйте значение name на Azat.

// function obj14(obj){
//  obj.age = 25
//  obj.name = "Azat"
//  return obj
// }
//
// console.log(obj({name:'Igor'}))



// 15. Вам дан объект product = {
//     name: "headphones",
//     price: 100,
//     discount: 0
// }. Найдите стоимость объекта с ценой, и если она больше 100,
// снизьте ее на 10%. Если это не так, сделайте скидку на 7%.
// Обновите объект.

//
// let product = {
//     name: "headphones",
//     price: 100,
//     discount: 0
// }
// function obj15(obj){
//  if(product.price > 100){
//   product.price =  product.price - ((product.price / 100 ) *10)
//  }else{
//   product.price =  product.price - ((product.price / 100 ) *7)
//  }
//  return obj
// }
//
// console.log(obj15(product))


// function obj15 (obj){
//  if (obj.price > 100){
//
//   obj.discount = obj.price / 100 *10
//   obj.price = obj.price - obj.discount
//
//  }else{
//
//   obj.discount = obj.price / 100 *7
//   obj.price = obj.price - obj.discount
//
//  }
//  return obj
// }
//
// console.log(obj15(product))




// function giveKeys(arr){
//  return arr.reduce((acc,el, idx) =>{
//   return {...acc, [`field${idx + 1}`]:el}
//  }, {})
//
// }
//
// console.log(giveKeys(true,1,'wow','you are smart,bro'))
//





//-----------------------codeWars------------------------------------------

//
// function func(a,b){
//  let arr_en = "abcdefghijklmnopqrstuvwxyz"
//
//  if(arr_en.includes(a.toLowerCase()) || arr_en.includes(b.toLowerCase())){
//   return -1
//  }else if ( a === a.toUpperCase() &&  b === b.toUpperCase()  || a === a.toLowerCase() && b === b.toLowerCase()){
//   return 1
//  }else{
//   return 0
//  }
//
//
// }
//
// console.log(func("K","l"))


// 'a' and  'g' return 1
// 'A' and  'C' return 1
// 'b' and  'G' return 0
// 'B' and  'g' return 0





function getScore(allScore,myScore){
 let a = allScore.reduce((acc,el) =>{
  return(acc + el )
 },0) / allScore.length
 return a< myScore

 }

console.log(getScore([34,25,30,23,28,39,43] ,34))




function getNum(arr){
 if (arr.length === 0 ){
  return "even"
 }
 return arr.reduce((acc,el) => acc + el) % 2 === 0 ? "even" : "odd"
}

console.log([0,1,4,3])





function maxNumbers(arr){
 return arr.sort((a,b) => a-b).slice(-2)
}
console.log(maxNumbers([1,2,10,8]))















































