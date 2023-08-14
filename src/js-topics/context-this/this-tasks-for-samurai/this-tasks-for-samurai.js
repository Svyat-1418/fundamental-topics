//1.

// const user = {
//     name: "Mentor",
//     tic() {
//     this --> ?
//         setTimeout(function() {
//             console.log(this)
//         }, 1500)
//     }
// }

//2.

// const user = {
//     name: "Mentor",
//     tic() {
//     //this --> ?
//         setTimeout(() => {
//             console.log(this)
//         }, 1500)
//     }
// }
//
// document
//     .querySelector('#btn1')
//     .addEventListener('click', user.tic)




//3.

// const user = {
//     name: "Mentor",
//     tic() {
//         //this --> ?
//         setTimeout(() => {
//             console.log(this)
//         }, 1500)
//     }
// }

//4.

// const user = {
//     name: "Mentor",
//     tic() {
//         var that = this
//         setTimeout(function() {
//             console.log(that)
//             console.log(this)
//         }, 1500)
//     }
// }

// function Person(props) {
//     props.tic()
// }
//
// Person({tic: user.tic()})



//5.

function Man() {
    // this -> ?
}

let man1 = Man()
let man2 = new Man()