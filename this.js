
// this - родительский элемент

// console.log(this)



//1.

function greeting(){
    return this
}
console.log(greeting())



let user = {
    name:"Alex",
    birthYear:20,
    hello: greeting,
    getInfo:function (){
        return `This person is ${this.name}`
    },
    age:function (){
    return new Date().getFullYear() - this.birthYear
    },
    myHobby: function (hobby){
        return `My hobby is ${hobby}`
    },
    Info:function(name,age,car){
        return `My name is ${name}, i am ${age} years old And my car ${car}`
    }
}

console.log(user.hello())
console.log(user.getInfo())
console.log(user.age())




// 2.

function MakeOb (name,age,id){
    this.name = name
    this.age = age
    this.id = id
  return {name,age,id}
}

console.log(MakeOb("Asan",25,1))


//bind
//call
//apply

const person = {
    id:1,
    name:"Uson",
    birthYear:1977,
}

person.age = user.age.bind(person)()

console.log(person)

const name = user.getInfo().bind(person)

console.log("name - ", name)

console.log(user.age.bind(person)())
console.log(user.age.call(person)())
console.log(user.age.apply(person)())


console.log(user.myHobby.bind(person,"chess")())
console.log(user.myHobby.apply(person,["chess"]))
console.log(user.myHobby.call(person,"chess"))

console.log(user.getInfo.bind(person)())

const mYInfo = user.Info
//
// console.log(mYInfo.bind({},"Baiel",19,"BMW")())
// console.log(mYInfo.apply({},"Baiel",19,"BMW")())
// console.log(mYInfo.bind({},"Baiel",19,"BMW")())





function task (str){
    let me = str.split('')
    return me.map (el =>{
        if(me.indexOf(el) === me.lastIndexOf(el)){
            return "("
        }else{
            return ")"
        }
    }).join("")
}

console.log(task("kjhgfdfghj"))
console.log(task("aba"))
console.log(task("fgh"))


// "dfghjkjhgfc"
// )(
// aba
// )()
// fgh
// (((






