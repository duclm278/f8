// IIFE - Immediately Invoked Function Expression
// Self-Invoking Functions

// 1. IIFE trông như thế nào?
// (function () {
//   console.log("1");
// })();

// (() => {
//   console.log("2");
// })();

// (function (name) {
//   console.log("hello, " + name);
// })("Duc");

// 2. Dùng dấu ; trước IIFE
// 2.1. Trường phái dùng dấu ; thì không bị lỗi
// 2.2. Trường phái không dùng dấu ;
// let fullName = "Duc"
// (function (name) {
//   console.log("hello, " + name)
// })(fullName) // TypeError: "Duc" is not a function

// 2.3. Fix lỗi trên bằng cách dùng dấu ; trước IIFE
// let fullName = "Duc"
// ;(function (name) {
//   console.log("hello, " + name)
// })(fullName) // > "hello, Duc"

// 3. IIFE là hàm "private"
// 3.1. Không thể gọi hàm IIFE bên ngoài
// (function fun() {
//   console.log("hello, world");
// })();
// fun(); // ReferenceError: fun is not defined

// 3.2. Có thể gọi hàm IIFE bên trong
// let i = 0;
// (function fun() {
//   i++;
//   console.log(i);
//   if (i < 10) fun();
// })();

// 4. Sử dụng IIFE khi nào?
// 4.1. Không có tính sử dụng lại. Không cần đặt tên cho IIFE. Có thể đặt tên để
// giải thích hàm làm gì.
// 4.2. Thường sử dụng để chạy ngay đoạn mã
// 4.3. Giới hạn phạm vi, không làm ảnh hưởng đến phạm vi bên ngoài
// 4.4. Thư viện thường dùng IIFE để tránh xung đột phạm vi

// 5. Các cách tạo ra một IIFE
// (function () {
//   console.log("IIFE");
// })(); // Valid

// (function () {
//   console.log("IIFE");
// }()); // Valid

// function fun() {
//   console.log("IIFE");
// }(); // Invalid

// +function () {
//   console.log("IIFE");
// }(); // Valid

// -function () {
//   console.log("IIFE");
// }(); // Valid

// !function () {
//   console.log("IIFE");
// }(); // Valid

// 6. Ví dụ sử dụng IIFE
// 6.1. Ví dụ app không an toàn
// const app = {
//   cars: [],
//   add(car) {
//     this.cars.push(car);
//   },
//   edit(index, car) {
//     this.cars[index] = car;
//   },
//   delete(index) {
//     this.cars.splice(index, 1);
//   },
// };
// app.cars = null;
// app.add("BMW"); // TypeError: Cannot read property 'push' of null

// 6.2. Ví dụ app an toàn
// const app = (function () {
//   // Private
//   // Biến cars chỉ có thể truy cập trong IIFE
//   const cars = [];

//   // Public
//   // Các hàm add, edit, delete vẫn có thể truy cập vào biến cars
//   return {
//     add(car) {
//       // Ở đây this là app không có thuộc tính cars nên sẽ bị lỗi
//       // this.cars.push(car); // TypeError: Cannot read properties of null (reading 'push')
//       // Sửa lại thành cars.push(car) để truy cập vào biến cars trong IIFE
//       cars.push(car);
//     },
//     edit(index, car) {
//       cars[index] = car;
//     },
//     delete(index) {
//       cars.splice(index, 1);
//     },
//   };
// })();
// app.cars = null; // Không thể phá hỏng ứng dụng
// app.add("BMW");
