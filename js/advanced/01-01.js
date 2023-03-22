// Scope - Phạm vi

// 1. Các loại phạm vi
// 1.1. Global scope
// 1.2. Block scope: let, const
// 1.3. Function scope: var, function

// 2. Khi gọi mỗi hàm luôn có môi trường mới (Lexical Environment) được tạo. Một hàm có thể gọi nhiều lần
// và mỗi lần gọi sẽ tạo ra một môi trường mới (Lexical Environment).
// Có bốn phạm vi được tạo ra ở đây! Mỗi hàm được gọi tạo ra một phạm vi mới.
// Source: https://javascript.info/closure
// function log(name) {
//   console.log(name);
// }
// log("A");
// log("B");
// log("C");

// 3. Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên
// ngoài nó: Itself & outer, not inner.
// Bên trong được truy cập vào phạm vi của nó và phạm vi của bên ngoài
// Bên ngoài được truy cập vào phạm vi của nó nhưng không được truy cập vào phạm
// vi khác của bên trong
// const outer = "outer";
// function log() {
//   const inner = "inner";
//   console.log(outer); // outer
//   console.log(inner); // inner
// }
// console.log(outer); // outer
// console.log(inner); // ReferenceError: inner is not defined

// 4. Cách thức một biến được truy cập
// 4.1. Dòng log dùng biến age ở phạm vi gần nhất
// const age = 18;
// {
//   const age = 16;
//   {
//     const age = 14;
//     {
//       const age = 12;
//       console.log(age); // > 12
//     }
//     console.log(age); // > 14
//   }
//   console.log(age); // > 16
// }
// console.log(age); // > 18

// 4.2. Dòng log dùng biến age ở phạm vi gần nhất nhưng chưa được khai báo
// const age = 18;
// {
//   console.log(age); // ReferenceError: Cannot access 'age' before initialization
//   const age = 16;
// }

// 5. Khi nào một biến bị xóa khỏi bộ nhớ
// 5.1. Biến toàn cầu? Bị xóa khi đóng trình duyệt, đóng tab, reload tab, với
// NodeJS thì bị xóa khi exit chương trình.

// 5.2. Biến trong block & trong hàm?
// VD: Thoát khỏi block, engine sẽ xóa biến age khỏi bộ nhớ vì không còn có chỗ sử dụng nó nữa
// {
//   const age = 18;
//   console.log(age); // > 18
// }

// VD: Thoát khỏi hàm, engine sẽ xóa biến age khỏi bộ nhớ vì không còn có chỗ sử dụng nó nữa
// function log() {
//   const age = 18;
//   console.log(age); // > 18
// }
// log();

// 5.3. Biến trong hàm được tham chiếu bởi một hàm?
// Biến counter sẽ không bị xóa khỏi bộ nhớ vì hàm increase (myCounter) vẫn đang tham chiếu đến nó
// function makeCounter() {
//   let counter = 0;
//   function increase() {
//     return ++counter;
//   }

//   return increase;
// }

// const myCounter = makeCounter();
// console.log(myCounter()); // > 1
// console.log(myCounter()); // > 2
// console.log(myCounter()); // > 3
