// Lexical Environment - скрытый объект содержащий значения конкретного scope

//Lexical Enviroment Object
// {
//   enviromentRecords: { ... },
//
//   outer: Reference to the external Lexical environment
// }
// // Shorthand
// LE { enviromentRecords } --> Reference to the external Lexical environment

// Для чего создаётся Lexical Environment

// - Функции
// - Блоки кода КРОМЕ литерала объекта

// FUNCTION DECLARATION / FUNCTION EXPRESSION

// Function declaration (function someName() {} ) и переменные объявленные с
// keyword var СРАЗУ запишутся в LE

// Function expression запишется в LE ТОЛЬКО когда чтение скрипта дойдёт до
// этой строки кода в момент выполнения программы

// В globalLE ссылка outer === null

// [[Environment]]

// В момент объвления функции в ней создаётся скрытая переменная [[Environment]]
// котора содержит ссылку на Lexical Environment в котором эта функция объявлена.
// Затем в момент вызова функции создастся её собственный Lexical Environment и
// outer будет присвоена ссылка из [[Environment]].

// Замыкание

// Замыкание - способность функции запоминать лексическое окружение в котором она
// создана и использование этого для определения значений переменных

// Пример замыкания

// const counterCreator = () => {
//   let count = 0
//
//   return () => {
//     console.log(count++)
//   }
// }
//
// const counter = counterCreator()
// const counter2 = counterCreator()
//
// counter()
// counter2()
// counter()
// counter2()
// counter()
// counter2()

// Рекурсия

// Рекурсия - вызов функции внутри самой себя

// Рекурсия работает благодаря stack
// Stack - структура данных, представляющая собой упорядоченный наиор элементов,
// в каторой добавление новых и удаление существующих производится с конца, называемого
// вершиной stack-a

// Stack есть программный и аппаратный

// Программный

// const stack = []
// stack.push("Yo!")
// stack.pop()

// Аппаратный

// Аппаратный stack - участок памяти в ппоцессе( структура данных, создаваемая
// операционной системой под каждею программу ) на который складываются вызовы
// функции. Каждый вызов функции в stack называется stack frame.
// При вызове функции она кладётся на stack frame, отрабатывает и удаляется со
// stack frame.
// В случае когда внутри функции происзодит вызов функции, создаётся ещё один
// stack frame2 и кладётся на текущий stack frame1. Функция отрабатывает и stack
// frame2 удаляется, отрабатывает stack frame1, удаляется.

// Работа рекурсия в stack

// Рекурсия состоит из Базового шага рекурсии и Шага рекурсии

// const pow = (x, n) => {
//   if (n === 1) {
//     return x      // <- Базовый шаг рекурсии
//   } else {
//     return x * pow(x, n - 1)   // <- Шаг рекурсии
//   }
// }

//console.log(pow(5, 3))

//     Stack
//       |

// const pow = (x, n) => {
//   if (n === 1) {
//     return x      // <- Базовый шаг рекурсии
//   } else {
//     return x * pow(x, n - 1)   // <- Шаг рекурсии
//   }
// }
// const pow = (5, 2) => {
//   if (2 === 1) {
//     return 5      // <- Базовый шаг рекурсии
//   } else {
//     return 5 * pow(5, 2 - 1)   // <- Шаг рекурсии
//   }
// }
// const pow = (5, 3) => {
//   if (3 === 1) {
//     return 5      // <- Базовый шаг рекурсии
//   } else {
//     return 5 * pow(5, 3 - 1)   // <- Шаг рекурсии
//   }
// }
//
// console.log(pow(5, 3))