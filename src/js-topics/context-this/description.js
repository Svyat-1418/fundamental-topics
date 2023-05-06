// this

// !use strict ---> object
// use strict ---> any data type

// 1. Global Scope ---> global object(window - browser)
// 2. Inside functions ( not arrow functions ) ---> как именно вызывается функция!!!
//    -- вызвана с помощью ключевого слова new
//    -- с помощью методов call apply bind
//    -- вызывается от имени объекта ---> this === то что слева от точки
//    -- simple call ===> this === undefined ( !use strict === window )
// 3. Arrow functions ---> this берётся из внешннго scope

// =================== GLOBAL SCOPE ================

//console.log(this) -> // window

//console.log(this === window) -> // true

//this.age = 23

//console.log(this.age) // -> 23

// =============== INSIDE FUNCTIONS =============

// function foo() {
//   console.log(this)
// }

//foo() // -> undefined === window

// const user = {
//   foo: foo
// }

//user.foo() // user

// const svyat = {
//   name: "Svyat",
//   showName() {
//     console.log(this.name)
//   }
// }

// const vika = {
//   name: "Vika",
//   showName: svyat.showName
// }

//svyat.showName() // Svyat
//vika.showName() // Vika

// =============== CALL APPLY BIND ==========

// function foo(a, b) {
//   console.log(a, b)
//   console.log(this)
// }
//
// const svyat = {
//   name: "Svyat"
// }
//
// const vika = {
//   name: "Vika"
// }

//foo.call(svyat, 1, 2) // 1 2 svyat
//foo.apply(vika, [1, 2]) // 1 2 vika

//const fooWrapper = foo.bind(svyat)
//fooWrapper()
//foo.bind(vika)()

//foo.bind(svyat, 1, 2)()
//foo.bind(vika, 1)(2)

//

//foo(svyat.showAge) // undefined --> потеря контекста
//foo(svyat.showAge.bind(svyat)) // контекст привязан

// setTimeout(svyat.showAge, 300) // undefined
// setTimeout(svyat.showAge.bind(svyat), 300) // 23
// setTimeout( () => svyat.showAge(), 300) // 23

// ================= KEYWORD NEW =================

// function User(name) {
//   // this = {}
//
//   this.name = name
//
//   // return this
// }

//const man = new User("Man")
//console.log(man) // { name: "Man" }

// function bar() {
//   console.log(this)
// }
// bar() // undefined -> window
// const alex = {
//   age: 24,
//   showAge: bar
// }
// alex.showAge() // alex
// alex.showAge.bind({ one: 1 })() // { one: 1 }
// function Car() {
//   console.log(this)
// }
// new (Car.bind({ two: 2 }))() // {}

// =================== ARROW FUNCTIONS ===============

// const foo = () => {
//   console.log(this)
// }
// foo() // window

// const user = {
//   age: 21,
//   showAde() {
//     const bar = () => {
//       console.log(this.age)
//     }
//
//     bar.call({ age: 18 })
//   }
// }
//
// user.showAde.call({ age: 25 }) // 25

// const student = {
//   group: "52",
//   students: ["Max", "Katya", "Svyat"],
//   showGroupStudent() {
//     this.students.forEach((function (stud) {
//       console.log(this.group + "" + stud)
//     }).bind(this))
//   }
// }

const student = {
  group: "52",
  students: ["Max", "Katya", "Svyat"],
  showGroupStudent() {
    this.students.forEach( stud => {
      console.log(this.group + "" + stud)
    })
  }
}
student.showGroupStudent()