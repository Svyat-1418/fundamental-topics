const itIncubatorAge = 6
const itIncubatorMainSensey = 'Dimych'
const isItIncubatorTheBest = true
const itIncubatorTeachers = ['Viktor', 'Igor', 'Valera the Elder', 'Denis', 'Valera Safronov']
const itIncubatorYoutubeChannel = {
    subscribers: 10.7,
    videos: 362,
    registrationDate: '23/04/2015',
    views: 597106,
}
function isExamPassed(student, exam, passedQuestions, totalQuestions) {
    return passedQuestions >= totalQuestions / 2
        ? `${student.id} passed ${exam.id} exam`
        : `${student.id} failed ${exam.id} exam`
}
class ItIncubator {
    constructor(samuraiName) {
        this.name = samuraiName
    }

    educateMiddleDeveloper(student, direction) {
        return {...student, educatedMuddleDeveloper: direction}
    }
}
const giveAnswerToBotQuestion = (student, answerText) => {
    return `${student.id} is giving the following answer: ${answerText}`
}


// console.log(itIncubatorAge.__proto__ === itIncubatorAge.prototype) // ?
// console.log(Number.prototype === itIncubatorAge.prototype) // ?
// console.log(itIncubatorAge.__proto__ === Number.prototype) // ?
// console.log(itIncubatorAge.toString().__proto__ !== String.prototype) // ?

// console.log(itIncubatorMainSensey.__proto__ === String.__proto__)
// console.log(String.prototype === itIncubatorMainSensey.__proto__)
// console.log(itIncubatorMainSensey.__proto__ === itIncubatorAge.__proto__)

// console.log(isItIncubatorTheBest.prototype === Boolean.prototype)
// console.log(Boolean.prototype === isItIncubatorTheBest.__proto__)

// console.log(itIncubatorTeachers.prototype === Array.__proto__)
// console.log(Array.prototype === itIncubatorTeachers.__proto__)
// console.log(Array.__proto__.__proto__) // === ???

// console.log(itIncubatorYoutubeChannel.__proto__ === Object.__proto__)
// console.log(itIncubatorYoutubeChannel.__proto__ === Object.prototype)
// console.log(itIncubatorYoutubeChannel.__proto__.__proto__ === Object.prototype)

// console.log(isExamPassed.prototype === isExamPassed.__proto__.__proto__)
// console.log(isExamPassed.__proto__ === Function.prototype)
// console.log(Function.prototype.__proto__ === Object.prototype)
//
// console.log(ItIncubator.prototype === Function.prototype)
// console.log(ItIncubator.prototype === ItIncubator.__proto__)
// console.log(ItIncubator.__proto__ === Function.__proto__)
// console.log(ItIncubator.__proto__ === Function.prototype)

// console.log(isExamPassed.prototype === ItIncubator.prototype)
// console.log(ItIncubator.__proto__ === isExamPassed.__proto__)
// console.log(ItIncubator.__proto__.__proto__ === null)

// console.log(Function.prototype === giveAnswerToBotQuestion.__proto__)
// console.log(giveAnswerToBotQuestion.prototype) // === ???


const shogun = new ItIncubator(itIncubatorMainSensey)
// console.log(shogun.__proto__.__proto__) // === ???
// console.log(shogun.__proto__.constructor.__proto__) // === ???
// console.log(shogun.__proto__.__proto__.__proto__) // === ???



// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование
//Task 01
// Реализовать Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают


//Task 02
// Реализовать Monkey на базе Animal, конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают


//Task 03
// Реализовать Human на базе Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично Animal
// проверить, что все методы работают


