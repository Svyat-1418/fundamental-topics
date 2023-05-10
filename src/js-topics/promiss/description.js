// ============== Чтщ такще promise ==============================

// Promise - объект, у которого есть скрытые поля [[PromiseState]] и [[PromiseResult]]
// а также 3 метода: then, catch, finally

// [[PromiseState]] - состояние промиса. При инициализации промиса содержит значение "pending",
// "fulfilled" при успешном выполнении, "rejected" в случае ошибки.

// [[PromiseResult]] содержит данные, передаваемые в resolve() либо reject(). При инициализации
// промиса содержит значение undefined.

// ==================== Создание promise ====================

// - вызов класса new Promise()
// - передача в качестве аргумента функцию executor
// - функция executor принимает в себя 2 функции: resolve , reject.

// const pr = new Promise((resolve, reject) => {
//   // Logic
// })

// ====================== Работа со скрытыми полями ==============

// resolve
// - выывается при успешном выполнении асинх. кода
// переводит [[PromiseState]] в состояние "fulfilled"
// присваивает [[PromiseResult]] данные, которые получает в паромер

// reject
// - выывается при выполнении асинх. кода с ошибкой
// переводит [[PromiseState]] в состояние "rejected"
// присваивает [[PromiseResult]] данные, которые получает в парамер

// !!!ВАЖНО
// RIGHT - "pending" --> "fulfilled" || "rejected"
// WRONG - "fulfilled" --> "rejected" || "rejected" --> "fulfilled"

const createPrRandomTimeout = (randomNum) => {
  return new Promise((res, rej) => {
    if (randomNum < 5) {
      console.log("Random number " + randomNum + " less than 5")
      rej(randomNum)
    } else {
      console.log("Random number " + randomNum + " more than 5")
      res(randomNum)
    }
  })
}

const rNum = () => Math.ceil(Math.random() * 10)

//console.log(createPrRandomTimeout(rNum()))
//console.log(createPrRandomTimeout(rNum()))
//console.log(createPrRandomTimeout(rNum()))

// ==================== Методы then catch finally ==============

// Методы then catch finally позволяют подписаться на promise и обработать его результат.
// Методы ожидают получить callback в параметр которого поступает результат promise
// - попадание в .then при состоянии "fulfilled"
// - попадание в .catch при состоянии "rejected"
// - попадание в .finally в любом случае
// Методы then catch finally возвращают promise что позволяет реализовать цепочку
// promise-ов (chaining).

// ==================== Chaining ================
// При успешном выполнении callback в .then попадаем в следующий по
// цепочке .then , иначе в .catch

const promise = createPrRandomTimeout(rNum())
  // .then( data => {
  //   console.log("Then1 " + data)
  //
  //   // return вернёт результат выполнения promise который
  //   // венёт createPrRandomTimeout()
  //   return createPrRandomTimeout(rNum())
  // },
  //   err => console.log("Обработка ошибки в .then " + err))

  .then( data => {
      console.log("Then1 " + data)

      // return вернёт результат выполнения promise который
      // венёт createPrRandomTimeout()
      return createPrRandomTimeout(rNum())
    })
  .then( data => {
    console.log("Then2 " + data)

    // если promise перейдёт в "rejected" то попадём
    // в .catch
    return createPrRandomTimeout(rNum())
  })
  .catch( err => {
    // .catch отлавливает ошибки вверх по цепочке
    // до ближайшего .catch

    console.log("Catch1 " + err)
    return "Yo!"
  })
  .then( data => {
    console.log("Then3 " + data)
  })
  .finally(() => {
    // .finally в цепочке отработает сразу после объявления
    // поэтому его следует использовать в конце цепочки

    console.log("Finally")
  })

// ============= Промисификация, ( async/await - try/catch/finally) ====================

// Промисификация - преобразование функции принимающей callback в
// функцию, возвращающую промис

import fs from "fs"
import path from "path"

// callback hell
// fs.writeFile(path.resolve("./", "text.txt"), "I'm cool ", (err) => {
//     if (err) {
//         throw err
//     } else {
//       console.log("Файл записан")
//       fs.appendFile(path.resolve("./", "text.txt"), "and you also are ", (err) => {
//         if (err) {
//           throw err
//         } else {
//           console.log("Файл записан")
//           fs.appendFile(path.resolve("./", "text.txt"), "cool !", (err) => {
//             if (err) {
//               throw err
//             }
//             console.log("Файл записан")
//           })
//         }
//         console.log("Файл записан")
//       })
//     }
//
// })


const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
    if (err) {
      reject(err.message)
    }
    resolve()
  }))
}

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
    if (err) {
      reject(err.message)
    }
    resolve()
  }))
}

writeFileAsync(path.resolve("./", "text.txt"), "I'm cool ")
    .then(() => appendFileAsync(path.resolve("./", "text.txt"), "and you also are "))
    .then(() => appendFileAsync(path.resolve("./", "text.txt"), "cool !"))
    .catch((err) => console.log(err))

