// Apply Method
// Phương thức này cho phép gọi một hàm với một `this` (bind) và truyền đối số cho hàm gốc dưới dạng mảng.
// Lưu ý: `apply` truyền đối số dưới dạng mảng còn `call` truyền đối số dưới dạng danh sách.

// VD1
// const teacher = {
//   fullName: "Minh Thu",
// };
// function greet(greeting, message) {
//   return `${greeting} ${this.fullName}. ${message}`;
// }
// let result1 = greet.apply(teacher, ["Em chào cô", "Cô dạy môn gì thế?"]);
// let result2 = greet.call(teacher, "Em chào cô", "Cô dạy môn gì thế?");
// console.log(result1);
// console.log(result1 === result2); // true

// VD2: Function borrowing
// const teacher = {
//   fullName: "Minh Thu",
//   isOnline: false,
//   goOnline() {
//     this.isOnline = true;
//     console.log(`${this.fullName} is online`);
//   },
//   goOffline() {
//     this.isOnline = false;
//     console.log(`${this.fullName} is offline`);
//   },
// };
// const student = {
//   fullName: "Duc Le",
//   isOnline: false,
// };
// teacher.goOnline();
// teacher.goOnline.apply(student);
// teacher.goOffline.call(student);

// VD3: Extends
// function Animal(name, weight) {
//   this.name = name;
//   this.weight = weight;
// }
// function Parrot() {
//   Animal.apply(this, arguments);
//   this.speak = function () {
//     console.log("Nhà có khách!");
//   };
// }
// const myPet = new Parrot("Blue", 0.75);
// myPet.speak();

// So sánh `bind`, `call`, `apply`
// Giống nhau
// - Là các methods được kế thừa từ Function.prototype
// function fn() {}
// console.log(fn.bind === Function.prototype.bind); // > true
// console.log(fn.call === Function.prototype.call); // > true
// console.log(fn.apply === Function.prototype.apply); // > true

// Khác nhau
// 1. `bind`
// - Trả về một hàm mới với `this` tham chiếu tới `thisArg`
// - Không gọi thực hiện gọi hàm
// - Nếu được bind kèm `arg1, arg2, ...` thì các đối số này sẽ được ưu tiên hơn
// const newFn = fn.bind(thisArg, arg1, arg2, ...);
// newFn(arg1, arg2, ...);

// 2. `call`
// - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
// - Nhận các đối số cho hàm gốc từ `arg1, arg2, ...`
// fn.call(thisArg, arg1, arg2, ...);

// 3. `apply`
// - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
// - Nhận các đối số cho hàm gốc bằng đối số thứ 2 dưới dạng mảng `[arg1, arg2, ...]`
// fn.apply(thisArg, [arg1, arg2, ...]);
