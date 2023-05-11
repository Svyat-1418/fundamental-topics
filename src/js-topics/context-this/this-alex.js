//this


//!use-strict ----> this = some object
//use-strict -----> this = any data type


//1. global scope -----> this = global object

//2. function (not arrow!!!!) ---> смотрим как вызывается функция!!!
    // - вызвана с помощью ключевого слова new ----> this = {} (новый объект)
    // - вызвана с помощью методов функции ( call, bind, apply )
    // - вызвана от имени какого-то объекта ----> this то что слева от точки
    // - обычный вызов функции ----> undefined (!use-strict ---> window)

//3 arrow functions ---> this берется из внешнего скоупа


//============== GLOBAL SCOPE ==================

// console.log(this)
//
// console.log(this === window)
//
// this.hello = 'hello'
//
// console.log(window.hello)



//============= FUNCTIONS (NOT ARROW) ===================

// --- от имени объекта

// const user = {
//     name: 'Alex',
//     showName() {
//         console.log(this.name)
//     }
// }
//
// user.showName()
//
// const user2 = {
//     name: 'Hanna',
//     showName: user.showName
// }
//
// user2.showName()
//
//
// function foo() {
//     console.log(this.name)
// }
//
// const fooObj = {
//     foo: foo
// }
//
//
// fooObj.foo()


// -- методы функций call, bind, apply

// function foo(a, b, c, d) {
//     console.log(a, b, c, d)
//     console.log(this)
// }

// foo.call({ name: 'Alex' })
//
// foo.apply({ name: 'Hanna' })

// const fooWrapper = foo.bind({ name: 'John' })
// fooWrapper()


// ================= вызваны через ключевое слово new


// function User(name, age) {
//     this.name = name
//     this.age = age
// }
//
//
// const alex = new User("Alex", 23) //функция foo вызвана как конструктор
// const hanna = new User("Hanna", 23) //функция foo вызвана как конструктор
//
// console.log(alex)
// console.log(hanna)


// const user = {
//     name: 'Alex',
//     showName() {
//         console.log(this.name)
//     }
// }
//
// const user2 = {
//     name: 'Hanna',
//     showName: user.showName
// }
//
// user.showName()
//
// user2.showName.call(user)
//
//
//
// function User() {
//     console.log(this)
// }


// function foo() {
//    console.log(this)
// }
//
//
// foo.call()


// ===================== ARROW FUNCTIONS ==================




// const foo = () => {
//    console.log(this)
// }
//
// foo()
//
//
// const user = {
//    hi: () => {
//       console.log(this)
//    }
// }
//
// user.hi()



// const user = {
//    hi() {
//
//       const foo = () => {
//          console.log(this)
//       }
//
//       foo.call({ hello: 'HELLO' })
//    }
// }
//
// user.hi()


// const user = {
//    group: 'Samurai',
//    students: ['Hanna', 'Alex'],
//
//    showGroup() {
//       this.students.forEach(function (student) {
//          console.log(this.group + ' ' + student)
//       })
//    }
// }
//
// user.showGroup()


//'use strict';

function foo() {
   console.log(this.name)
}

foo.call(undefined)




