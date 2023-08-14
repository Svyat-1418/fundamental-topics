// this

// ================== MODE ===================

// !use strict ---> object
// use strict ---> any data type

//'use strict';

// function test() {
//   console.log(this)
// }
//
// test.call(10)

// ==================================================

// 1. Global Scope ---> global object(window - browser)
// 2. Inside functions ( not arrow functions ) ---> как именно вызывается функция!!!
//    -- вызвана с помощью ключевого слова new --> this === {}
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

// function example() {
//   console.log(this)
// }
//
// example() // -> undefined === window

// const user = {
//   example
// }
//
// user.example() // user

 const svyat = {
  name: "Svyat",
  showName() {
    console.log(this.name)
  }
}

const vika = {
  name: "Vika",
  showName: svyat.showName
}

//svyat.showName() // Svyat
//vika.showName() // Vika

// =============== CALL APPLY BIND ==========

function view(a, b) {
  console.log(a, b)
  console.log(this)
}

//view.call(svyat, 1, 2) // 1 2 svyat
//view.apply(vika, [1, 2]) // 1 2 vika

//const viewWrapper = view.bind(svyat)
//viewWrapper()
//view.bind(vika)()

//view.bind(svyat, 1, 2)() // 1 2 svyat
//view.bind(vika, 1)(2) // 1 2 vika

function losingContext(someFn) {
  someFn()
}

//losingContext(svyat.showName) // undefined --> потеря контекста
//losingContext(svyat.showName.bind(svyat)) // Svyat --> контекст привязан

const john = {
  age: 53,
  showAge() {
    console.log(this.age)
  }
}

// setTimeout(john.showName, 300) // undefined
// setTimeout(john.showAge.bind(john), 300) // 53
// setTimeout( () => john.showAge(), 300) // 53

const globalShowName = john.showAge
globalShowName() // undefined

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

// const student = {
//   group: "52",
//   students: ["Max", "Katya", "Svyat"],
//   showGroupStudent() {
//     this.students.forEach( stud => {
//       console.log(this.group + "" + stud)
//     })
//   }
// }
// student.showGroupStudent()
