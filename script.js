// // POW

// function numberPow(number, pow) {
//     if (number === 0) {
//         return 0;
//     } else if (pow === 0) {
//         return 1;
//     } else {
//         let result = 1;
//         for (let i = 0; i < pow; i++) {
//             result *= number;
//         }
//         return (result);
//     }
// }
// function test(checkTest) {
//     if (!checkTest) {
//         if (checkTest === null) {
//             alert("Отмена");
//         } else {
//             alert("Вы ничего не ввели");
//         }
//         return false;
//     } else {
//         if (+checkTest) {
//             return true;
//         } else {
//             alert("Введите числа, а не символы")
//             return false;
//         }
//     }
// }
// let userNumber = prompt("Введите число");
// let resultNumber = test(userNumber);
// if (resultNumber) {
//     let userPow = prompt("Введите степень");
//     let resultPow = test(userPow);
//     if (resultNumber && resultPow) {
//         let res = numberPow(+userNumber, +userPow);
//         alert(res);
//     }
// }




// //Arguments


// function logArgsFunc() {
//     if (!arguments.length) {
//         console.log("No arguments in function")

//     } else {
//         for (let i = 0; i < arguments.length; i++) {
//             if (typeof arguments[i] === "function") {
//                 arguments[i]()
//                 console.log("function was called")
//             } else {
//                 console.log(`${arguments[i]} , type, ${typeof (arguments[i])}`)
//             }
//         }
//     }
// }

// function uselessFunction() {
//     console.log("I'm a function")
// }

// logArgsFunc();
// logArgsFunc(100);
// logArgsFunc(100, 'test', uselessFunction);


// // Palindrome


function testString(test) {
    let strLen = test.length;
    for (let i = 0; i < strLen; i++) {
        if (test[i] === test[strLen - 1 - i]) {
            return "true"
        } else {
            return "false"
        }
    }
}
let userString = prompt('Введите строку для проверки!');
let resultString = testString(userString);
alert(resultString)

// for (let i = 1; i < strLen; i++) {
//     if (test[i] === test[strLen - i])