// prototype, __proto__

//1. Прототип (prototype) - объект, на который указывает скрытая ссылка
//   [[Prototype]] в другом объекте
//2. X.__proto__ ----> XConstructor.prototype
//3. functionName.prototype

// ===========================================================

//1. .prototype есть только в функциях и классах (НО НЕ в стрелочных функциях)
//2. __proto__ есть у каждого объекта
//3. __proto__ === get / set of Object.prototype

// ===========================================================


// ==============================================================
function Person(name) {
    this.name = name
}
const john = new Person("John")

// fConstructor === person
// Person.prototype --->
//                         ----> { constructor: fConstructor } <-- default
// (true).__proto__ --->
// fConstructor === Boolean

// ===========================================================

function userConstructor(age) {

     const userPrototype = {
         constructor: userConstructor
     }

    const newUser = {}

    newUser.__proto__ = userPrototype

    newUser.age = age

    return newUser

}

const harry = userConstructor(32)
console.log(harry)

function User(age) {
    this.age = age
}
const ron = new User(33)
console.log(ron)
// с "new" под капюшоном выполняется следующее:
// this.__proto__ = { constructor: userConstructor }

// ===========================================================

// ===========================================================

function Animal(type) {
    this.type = type
}

const lion = new Animal("cat")
console.log(lion)
const python = new lion.constructor("snake")
console.log(python)

// new Animal( ... ) === new lion.constructor( ... )

// ===========================================================

console.log(Object.__proto__ === Function.prototype)

console.log(Object.prototype.__proto__ === null)

console.log((1).__proto__ === Number.prototype)
