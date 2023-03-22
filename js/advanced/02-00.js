// Hoisting - Kéo lên/Đưa lên

// 1. Hoisting với `var` và `function`
// Đưa các khai báo biến `var` và các khai báo hàm `function` lên đầu scope.
// Lưu ý: Phần khai báo được đưa lên, phần gán giá trị không được đưa lên.
// 1.1.
// console.log(a); // > undefined
// console.log(b); // ReferenceError: b is not defined
// var a = 7;

// 1.2.
// console.log(sum(2, 3)); // > 5
// function sum(a, b) {
//   return a + b;
// }

// 2. Hoisting với `let` và `const`
// Lưu ý: Khai báo biến `let` và `const` khi được hoisted không được tạo giá trị
// và được đưa vào "Temporal Dead Zone".
// 2.1.
// {
//   console.log(a); // ReferenceError: Cannot access 'a' before initialization
//   let a = 7;
// }

// 2.2.
// let a = 1;
// {
//   let a = 2;
//   {
//     // Hoisting prevents log from accessing outer scope.
//     // Errors happen because `a` of this scope is in "Temporal Dead Zone".
//     console.log(a); // ReferenceError: Cannot access 'a' before initialization
//     let a = 3;
//   }
// }

// 2.3.
// const counter = makeCouter();
// console.log(counter()); // > 1
// function makeCouter() {
//   let count = 0;
//   return increase;
//   function increase() {
//     return ++count;
//   }
// }

// 3. What will be the output of the following code?
// var tip = 100;
// (function () {
//   console.log("I have $" + husband());
//   function wife() {
//     return tip * 2;
//   }
//   function husband() {
//     return wife() / 2;
//   }
//   var tip = 10;
// })();

// - Ở đây chúng ta có một IIFE (Biểu thức hàm được gọi ngay lập tức)
// - Biến tip sẽ là undefined vì var tip = 10 đã được khai báo bên trong hàm.
// Biến tip bên trong hàm được hoisted với giá trị mặc định là undefined. Khi
// thực hiện tính toán với 1 biến có giá trị là undefined thì kết quả trả về sẽ
// là NaN.
// - Nếu chúng ta không khai báo var tip = 10 ở cuối hàm thì đáp án sẽ là "I
// have $100".
