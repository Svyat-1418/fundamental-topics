// setTimeout(function () {
//     console.log("timer 3000")
// }, 3000)
//
// console.log(1)
//
// setTimeout(function () {
//     console.log("timer 2000")
// }, 2000)
//
// console.log(2)
//
//
// setTimeout(function () {
//     console.log("timer 1000")
// }, 2)
//
// console.log(3)


// setTimeout(function timeout() {
//     console.log(1)
// }, 4000);
//
// setTimeout(function timeout() {
//     console.log(2)
// }, 1000);
//
//
// setTimeout(() => {
//     console.log(3)
// }, 1)
//
//
// new Promise((resolve, reject) => {
//     console.log(4)
//     resolve()
//     console.log(5)
// }).then(() => {
//     console.log(6)
// })
//
// console.log(7);


//============================


// /============================


// console.log(1)
//
// setTimeout(function timeout() {
//     console.log(2);
// }, 2);
//
// let p = new Promise(function (resolve) {
//     console.log(3);
//     resolve();
// });
//
// p.then(function () {
//     console.log(4);
// });
//
// console.log(5);


// ===============

// setTimeout(function () {
//     console.log("s1")
// }, 1);
//
//
// setTimeout(function () {
//     console.log("s2")
// }, 1000);
//
//
// new Promise(function (resolve) {
//     console.log("p1");
//     resolve();
//     console.log("p2");
// }).then(function () {
//     console.log("p3");
// });
//
// console.log("w1");
//
// async function test1() {
//     console.log("a1");
//     await test2()
//     console.log("a2");
//     console.log("lala")
// }
//
// async function test2() {
//     console.log("a3");
// }
//
// test1()
//
// console.log("w2")




// console.log(1);
//
// setTimeout(() => console.log(2), 1000);
//
// Promise.resolve().then(() => console.log(3));

// Promise.resolve()
//     .then(() => setTimeout(() => { console.log(4) }))
//     .then(() => console.log(5))
//
// Promise.resolve()
//     .then(() => console.log(6))
//     .then(() => console.log(6.1));

// Promise.resolve().then(() => console.log(7));
//
// setTimeout(() => console.log(8), 1);
//
// console.log(9);

//1 9 3 6 7 5 4 2 8


// console.log(1);
//
// setTimeout(() => {
//     console.log(2);
//     Promise.resolve()
//         .then(() => {
//             console.log(3)
//         });
// }, 200);
//
// new Promise((resolve) => {
//     console.log(4)
//     resolve(5)
// }).then((data) => {
//     console.log(data);
//
//     Promise.resolve()
//         .then(() => {
//             console.log(6)
//         })
//         .then((data) => {
//             console.log(7)
//
//             setTimeout(() => {
//                 console.log(8)
//             }, 100);
//         });
// })
//
// setTimeout(() => {
//     console.log(9);
// }, 200)
//
// console.log(10)



// Promise.resolve()
//     .then(() => console.log(1))
//     .then(() => console.log(2))
//     .then(() => console.log(3))
//     .then(() => console.log(4))
//
// Promise.resolve()
//     .then(() => console.log(5))
//     .then(() => console.log(6))
//     .then(() => console.log(7))
//     .then(() => console.log(8))



// Promise.resolve()
//     .then(() => {
//         return new Promise((res) => {
//            res(5)
//         })
//     })
//     .then(res => {
//         console.log(res)
//     })


