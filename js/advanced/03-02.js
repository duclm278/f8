// Bind Method
// Phương thức bind cho phép ràng buộc `this` cho một phương thức (function).

// 1. Document Object Binding
// VD1
// const $ = document.querySelector;
// const $$ = document.querySelectorAll;
// console.log($("h1").innerText); // TypeError: Illegal invocation

// VD2
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
// console.log($("h1").innerText); // hello, body

// 2. DOM Event Listeners (03-01.js)
// const teacher = {
//   fullName: "A",
//   getFullName() {
//     console.log(this.fullName);
//   },
// };
// const button = document.querySelector("button");
// button.onclick = teacher.getFullName.bind(teacher); // > "A"

// 3. Object Methods + DOM Event Listeners
// NB! Look at what calls method to see what `this` is.
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
// const app = (() => {
//   const cars = ["BMW"];
//   const root = $("#root");
//   const input = $("#input");
//   const submit = $("#submit");
//   return {
//     add(car) {
//       cars.push(car);
//     },
//     delete(index) {
//       cars.splice(index, 1);
//     },
//     render() {
//       const html = cars
//         .map(
//           (car, index) => `
//             <li>${car}
//               <span class="delete" data-index="${index}">&times</span>
//             </li>`
//         )
//         .join("");
//       root.innerHTML = html;
//     },
//     // V1: Handle DOM events. Use `function`. Wrong.
//     init() {
//       submit.onclick = function () {
//         const car = input.value;
//         this.add(car); // `this`: `submit`
//         this.render();
//         input.value = null;
//         input.focus();
//       };
//       this.render(); // `this`: `app`
//     },
//     // V2: Handle DOM events. Use `function`. Correct.
//     init() {
//       const that = this; // `this`: `app`
//       submit.onclick = function () {
//         const car = input.value;
//         that.add(car); // `that`: `app`
//         that.render();
//         input.value = null;
//         input.focus();
//       };
//       this.render(); // `this`: `app`
//     },
//     // V3: Handle DOM events. Use arrow function. Correct.
//     init() {
//       submit.onclick = () => {
//         const car = input.value;
//         this.add(car); // `this`: `app`
//         this.render();
//         input.value = null;
//         input.focus();
//       };
//       this.render(); // `this`: `app`
//     },
//     handleDelete(e) {
//       // Use closest() to find the closest parent element
//       const deleteBtn = e.target.closest(".delete");
//       if (deleteBtn) {
//         const index = deleteBtn.dataset.index;
//         this.delete(index);
//         this.render();
//       }
//     },
//     // V4: Add handleDelete. Wrong.
//     init() {
//       submit.onclick = () => {
//         const car = input.value;
//         this.add(car);
//         this.render();
//         input.value = null;
//         input.focus();
//       };
//       // `this` in `handleDelete` is `root` not `app`.
//       // `this.delete` needs to be `app.delete` to work. Same for `this.render`.
//       root.onclick = this.handleDelete;
//       this.render();
//     },
//     // V5: Add handleDelete. Correct.
//     init() {
//       submit.onclick = () => {
//         const car = input.value;
//         this.add(car);
//         this.render();
//         input.value = null;
//         input.focus();
//       };
//       // `this` in `handleDelete` is `app` now.
//       root.onclick = this.handleDelete.bind(this);
//       this.render();
//       // NB! `app` will also in Lexical Environment of `init`.
//       // Binding to `app` is valid but not recommended as it's fixed.
//       // root.onclick = this.handleDelete.bind(app);
//       // this.render();
//     },
//   };
// })();
// app.init();
