// Bind Method
// Phương thức bind cho phép ràng buộc `this` cho một phương thức (function).

// 1. Đặc tính
// - Phương thức bind trả về một hàm mới.
// - Hàm mới này có thể nhận các đối số như hàm ban đầu.

// VD1
// this.fullName = "A";
// const teacher = {
//   fullName: "B",
//   getFullName(data1, data2) {
//     console.log(data1, data2);
//     return `${this.fullName}`;
//   },
// };
// const student = {
//   fullName: "C",
// };
// console.log(teacher.getFullName()); // > "B"
// const getFullName1 = teacher.getFullName;
// console.log(getFullName1 === teacher.getFullName); // > true
// console.log(getFullName1()); // > "A"
// const getFullName2 = teacher.getFullName.bind(teacher);
// console.log(getFullName2 === teacher.getFullName); // > false
// console.log(getFullName2()); // > "B"
// const getFullName3 = teacher.getFullName.bind(student);
// console.log(getFullName3("Test 1", "Test 2")); // > "Test 1 Test 2" & "C"
// const getFullName4 = teacher.getFullName.bind(student, "Test 3", "Test 4");
// console.log(getFullName4("Test 1, Test 2")); // > "Test 3 Test 4" & "C"

// VD2: `this` is bind to teacher.
// const teacher = {
//   fullName: "A",
//   getFullName() {
//     console.log(this.fullName);
//   },
// };
// const button = document.querySelector("button");
// button.onclick = function () {
//   teacher.getFullName(); // > "A"
// };

// VD3: `this` is bind to button.
// const teacher = {
//   fullName: "A",
//   getFullName() {
//     console.log(this.fullName);
//   },
// };
// const button = document.querySelector("button");
// button.onclick = teacher.getFullName; // > undefined

// VD4: `this` is bind to teacher by using bind method.
// const teacher = {
//   fullName: "A",
//   getFullName() {
//     console.log(this.fullName);
//   },
// };
// const button = document.querySelector("button");
// button.onclick = teacher.getFullName.bind(teacher); // > "A"
