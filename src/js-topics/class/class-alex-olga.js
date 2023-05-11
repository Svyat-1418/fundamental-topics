//class

// =============== BASE SYNTAX =============
// class User {
//
//     age = 23
//
//     someFunc = () => {}
//
//     someFunc2 = function () {}
//
//     constructor(name) {
//         this.name = name
//     }
//
//     sayHi() {
//         console.log(this.name)
//     }
//
// }
//
//
// const user = new User("Alex")
//
// console.log(user)

// function User(name) {
//     this.name = name
// }
//
// User.prototype.sayHi = function () {
//     console.log(this.name)
// }


// ================= NOT CLEAN SUGAR ================

//1 [[isClassConstructor]] ---> can not call without new
// class Test {}
//
// Test()// this --> undefined ---> window

//2 string repr

// class Test {}
// function User() {}
//
// console.log(Test)
// console.log(User)

//3 inside class ---> use strict

//4 все методы класса являются неперечисляемыми ( смотреть дескрипторы свойст (enumerable) )


// ================ static ================


// class User {
//     static MAX_NAME_LENGTH = 20
//     static validateUserName = (name) => {
//             if(name.length > this.MAX_NAME_LENGTH) {
//                 throw new Error('Invalid name')
//             }
//     }
//
//     constructor(name) {
//         User.validateUserName(name)
//         this.name = name
//     }
//
// }
//
//
// const alex = new User("Alex") //{ name: 'Alex' }
//
//
// class TodoApi {
//     static getTodos() {}
//
//     static deleteTodo(id) {}
// }
//
// TodoApi.deleteTodo()
// TodoApi.getTodos()


// ================== PRIVATE FIELD ===============

// class User {
//     #name;
//
//     constructor(name) {
//         this.#name = name
//     }
//
//     getName() {
//         return this.#name
//     }
// }
//
// const alex = new User("Alex")
//
// //console.log(alex.#name) -- Error
//
// console.log(
//     alex.getName()
// )


// ================ GET, SET =================

// class User {
//
//     static LENGTH = 10
//
//     #name;
//
//
//     constructor(name) {
//         this.#name = name
//     }
//
//     get name() {
//         return this.#name
//     }
//
//     set name(value) {
//         if(value.length > User.LENGTH ) throw new Error('Invalid name')
//         return this.#name = value
//     }
// }
//
// const alex = new User("Alex")
//
// alex.name = 'New name'
//
// console.log(
//     alex.name
// )


// ====================== EXTENDS =============
// class Car {
//     static WHEELS_COUNT = 4
//     run() {
//         console.log('Car running')
//     }
// }
//
//
// class Ford extends Car {}
//
// const ford = new Ford()
//
// ford.run()


// ================== super ===========

// class Car {
//     constructor(model) {
//         this.model = model
//     }
//
//     showModel() {
//         console.log(this.model)
//     }
// }
//
// class Ford extends Car {
//     constructor(model) {
//         super(model)
//     }
//
//     showModel() {
//         console.log("Hello")
//     }
// }





