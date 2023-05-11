

// ================ extends ===============


// class Car {
//     constructor(name, age) {
//         console.log('Car constructor')
//         this.name = name
//         this.age = age
//     }

//     start() {
//         console.log('Started by default!')
//     }
// }

// class Ford extends Car { //Ford.prototype.__proto__ -> Car.prototype && Ford.__proto__ = Car

// }

// class ForMondeo extends Ford { //ForMondeo.prototype.__proto__ -> Ford.prototype && ForMondeo.__proto__ = Ford

//     constructor(name, age, mondeoFeature) {
//         super(name, age)
//         this.mondeoFeature = mondeoFeature
//     }
// }

// const mondeo = new ForMondeo("Mondeo", 25)

// mondeo.start()

// const carStarter = (car) => {
//     car.start()
// }

// carStarter(new Ford())
// carStarter(new FordMondeo())


// class Car {

//     static CAR_NAME = 'base'

//     start() {
//         console.log('Started!')
//     }
// }

// class Ford extends Car { //extends -> Ford.prototype.__proto__ = Car.prototype & Ford.__proto__ = Car

// }


// const f = new Ford()

// f.start()



// //FUCNTIONS
// function Car() { } // Car.prototype -> { constructor: Car }

// Car.prototype.start = function () { // Car.prototype -> { constructor: Car, start:f() {} }
//     console.log("Started!")
// }

// function Ford() { }//// Ford.prototype -> { constructor: Ford }

// Ford.prototype.__proto__ = Car.prototype

// const f = new Ford()

// f.start() // {}.start() .__proto__ -> Ford.prototype.__proto__ -> Car.prototype -> Object.prototype





///////================ get set =======================


// class BaseUser {

//     static MAX_USER_NAME_LENGTH = 5

//     #name;

//     constructor(name) {
//         this.#name = name
//     }

//     get name() {
//         return `Your name is ${this.#name}`
//     }

//     set name(value) {
//         if (value.length > BaseUser.MAX_USER_NAME_LENGTH) {
//             throw new Error("Invalid user name")
//         }
//         this.#name = value
//     }

// }

// const baseUsr = new BaseUser("Alex")

// baseUsr.name = 'New23432'

// console.log(
//     baseUsr.name
// )


//Not cool
// class BaseUser {

//     constructor(name) {
//         this._name = name
//     }

// }

// const baseUsr = new BaseUser("Alex")
// console.log(
//     baseUsr._name
// )




///////================ static =======================

// class BaseUser {
//     static MAX_USER_NAME_LENGTH = 12

//     static validateUserName(name) {
//     }
// }


// //Вызов статических методов свойств
// BaseUser.MAX_USER_NAME_LENGTH
// BaseUser.validateUserName()

// const baseUsr = new BaseUser()

// //undefined
// console.log(baseUsr.MAX_USER_NAME_LENGTH)



//Отличия от функций конструкторов
//Строковое представлене
//'use strict'
//must with new
//все методы внутри класса являются неперечисляемыми //enumerable: false




/// TYPESCRIPT examples


//public protected private readonly



// class Car {

//     name: string
//     age: number

//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }

// }


// class Ford {

//     constructor(
//         readonly name: string,
//         public age: number,
//         private test: boolean,
//         protected protProp: boolean
//     ) { }

//     protected showName() {

//     }

//     publicShow() {
//         this.showName()
//     }

// }

// class FordMondeo extends Ford {
//     showTest() {
//         this.showName()
//     }
// }

// const f = new Ford("Mondeo", 10, true, false)

// f.name

// //Error:
// //f.name = "New name"

// f.age
// f.test
// f.protProp
