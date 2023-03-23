// Call Method
// Là phương thức trong prototype của Function constructor, phương thức này được
// dùng để gọi hàm và cũng có thể bind `this` cho hàm.

// 1. Gọi hàm với `call` method
// function random() {
//   console.log(Math.random());
// }
// random();
// random.call();

// 2. Gọi hàm và bind `this`, lưu ý strict mode vẫn có `this` nếu được bind
// const teacher = {
//   fullName: "Nguyen Van A",
// };
// const student = {
//   fullName: "Nguyen Van B",
//   showSelf() {
//     console.log(this);
//   },
// };
// student.showSelf.call(); // > Non-strict: Window, Strict: undefined
// student.showSelf.call(teacher); // > {fullName: "Nguyen Van A"}
// student.showSelf.call(this); // > Window

// 3. Thể hiện tính kế thừa (extends) của OOP
// 3.1.
// function Animal(name, weight) {
//   this.name = name;
//   this.weight = weight;
// }
// function Chicken(name, weight, legs) {
//   Animal.call(this, name, weight);
//   this.legs = legs;
// }
// const sonDang = new Chicken("Son Dang", 66, 2);
// console.log(sonDang);

// 3.2. Toán tử spread rải elements của args vào làm đối số hàm Animal
// function Animal(name, weight) {
//   this.name = name;
//   this.weight = weight;
// }
// function Chicken() {
//   Animal.call(this, ...arguments);
//   this.legs = legs;
// }
// const sonDang = new Chicken("Duc Le", 55, 2);
// console.log(sonDang);

// 4. Mượn hàm (function borrowing), thêm ví dụ với `arguments`
// 4.1. `arguments` giống như `Array` nhưng không phương thức của `Array`.
// function log() {
//   console.log(arguments);
//   arguments.forEach((item) => {
//     console.log(item);
//   });
// }
// log(1, 2, 3, 4, 5); // TypeError: arguments.forEach is not a function

// 4.2. Mượn hàm `forEach` của `Array` để sử dụng cho `arguments`. `forEach` bản
// chất dùng `this` để truy cập đến từng phần tử của `Array`, nên ta phải bind
// `this` cho `arguments` để `this` trỏ đến `arguments`.
// function log() {
//   console.log(arguments);
//   Array.prototype.forEach.call(arguments, (item) => {
//     console.log(item);
//   });
// }
// log(1, 2, 3, 4, 5); // > 1, 2, 3, 4, 5

// 4.3. Mượn hàm `slice` của `Array` để sử dụng cho `arguments`.
// function log() {
//   const arr = Array.prototype.slice.call(arguments);
//   arr.forEach((item) => {
//     console.log(item);
//   });
// }
// log(1, 2, 3, 4, 5); // > 1, 2, 3, 4, 5

// 4.4. Xử lý không dùng `call` method (Sử dụng `Array.from`)
// function log() {
//   const arr = Array.from(arguments);
//   arr.forEach((item) => {
//     console.log(item);
//   });
// }
// log(1, 2, 3, 4, 5); // > 1, 2, 3, 4, 5

// 4.5. Xử lý không dùng `call` method (Sử dụng spread operator)
// function log() {
//   const arr = [...arguments];
//   arr.forEach((item) => {
//     console.log(item);
//   });
// }
// log(1, 2, 3, 4, 5); // > 1, 2, 3, 4, 5

// 4.6. Xử lý không dùng `call` method (Sử dụng rest parameter)
// function log(...arr) {
//   arr.forEach((item) => {
//     console.log(item);
//   });
// }
// log(1, 2, 3, 4, 5); // > 1, 2, 3, 4, 5
