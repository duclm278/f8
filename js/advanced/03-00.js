// This Keyword
// Từ khóa this trong JavaScript đề cập đến đối tượng mà nó thuộc về.

// 1. Đặc tính
// - Trong một phương thức, `this` tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu `.`)
// - Đứng ngoài phương thức, `this` tham chiếu tới đối tượng `window`

// 2. Lưu ý
// - `this` gọi trong hàm constructor là đại diện cho đối tượng sẽ được tạo
// - `this` gọi trong một hàm không thông qua đối tượng là `undefined` khi ở `strict mode`
// - Các phương thức `bind()`, `call()`, `apply()` có thể tham chiếu `this` tới
// một đối tượng khác

// VD1
// const myPhone = {
//   name: "iPhone",
//   color: "Black",
//   takePhoto: function () {
//     console.log(this);
//   },
//   objChild: {
//     name: "objChild",
//     methodChild: function () {
//       console.log(this);
//     },
//   },
// };
// myPhone.takePhoto(); // > {name: "iPhone", color: "Black", objChild: {…}, takePhoto: ƒ}
// myPhone.objChild.methodChild(); // > {name: "objChild", methodChild: ƒ}

// VD2
// function Car(name, color, weight) {
//   this.name = name;
//   this.color = color;
//   this.weight = weight;
//   this.run = function () {
//     console.log(this);
//   };
// }
// const myCar = new Car("BMW", "Black", 1500);
// myCar.run(); // > Car {name: "BMW", color: "Black", weight: 1500, run: ƒ}

// VD3: `this` in method
// const button = document.querySelector("button");
// button.onclick = function () {
//   console.log(this.innerText);
// };

// VD4: HTML equivalent. `this` is also in method.
// <button onclick="console.log(this.innerText)">Click me</button>

// VD5: Global `this` is `window` object.
// console.log(this); // > Window

// VD6: Non-strict. `this` in function is `window` object.
// function myFunc() {
//   console.log(this);
// }
// myFunc(); // > Window

// VD7: Strict. `this` in function is `undefined` but is `window` if called with
// `window` object.
// "use strict";
// function myFunc() {
//   console.log(this);
// }
// myFunc(); // > undefined
// window.myFunc(); // > Window

// VD8
// function Car(name, color, weight) {
//   this.name = name;
//   this.color = color;
//   this.weight = weight;
//   this.run = function () {
//     // `this` in function assigned indirectly to method
//     function test() {
//       console.log(this);
//     }
//     test();
//   };
// }
// const myCar = new Car("BMW", "Black", 1500);
// myCar.run(); // > Non-strict: Window, Strict: undefined

// VD9: Arrow functions don't provide their own `this` binding (it retains
// `this` value of enclosing lexical context). Instead, they inherit the one
// from parent scope.
// function Car(name, color, weight) {
//   this.name = name;
//   this.color = color;
//   this.weight = weight;
//   this.run = function () {
//     const test = () => {
//       console.log(this);
//     };
//     test();
//   };
// }
// const myCar = new Car("BMW", "Black", 1500);
// myCar.run(); // > Car
