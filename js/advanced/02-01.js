// Strict Mode - Nghiêm ngặt
// Báo lỗi hoặc ngăn chặn khi sử dụng những đoạn mã không an toàn hay dễ gây nhầm lẫn

// 1. Cách sử dụng
// - Thêm `"use strict"` vào đầu file .js
// - Thêm `"use strict"` vào ngay sau thẻ mở <script>
// - Thêm `"use strict"` vào đầu phạm vi hàm

// 2. Đặc trưng
// 2.1. Không thể khai báo biến mà không sử dụng từ khóa var, let, cons
// 2.1.1. Non-strict. Biến global chỉ được giải phóng khi chương trình dừng lại.
// Hoặc có thể trùng với tên biến ở ngoài phạm vi và làm sai giá trị đó đi.
// fullName = "Nguyen Van A"; // Tạo biến fullName ở phạm vi global
// function testFunc() {
//   age = 18; // Tạo biến age ở phạm vi global
// }
// testFunc();
// console.log(fullName);
// console.log(age);

// 2.1.2. Strict
// "use strict";
// fullName = "Nguyen Van A"; // ReferenceError: fullName is not defined
// function testFunc() {
//   age = 18; // ReferenceError: age is not defined
// }
// testFunc();

// 2.1.3. Strict
// fullName = "Nguyen Van A"; // OK!
// function testFunc() {
//   "use strict";
//   age = 18; // ReferenceError: age is not defined
// }
// testFunc();

// 2.2. Báo lỗi khi gán lại giá trị cho thuộc tính có `writable: false`
// 2.2.1. Writeable: true
// const student = {
//   fullName: "Nguyen Van A",
// };
// student.fullName = "Nguyen Van B";
// console.log(student.fullName); // > "Nguyen Van B"

// 2.2.2. Non-strict. Writeable: false
// const student = Object.freeze({
//   fullName: "Nguyen Van A",
// });
// student.fullName = "Nguyen Van B";
// console.log(student.fullName); // > "Nguyen Van A"

// 2.2.3. Strict. Writeable: false
// "use strict";
// const student = Object.freeze({
//   fullName: "Nguyen Van A",
// });
// student.fullName = "Nguyen Van B";
// console.log(student.fullName); // TypeError: Cannot assign to read only property 'fullName' of object '#<Object>'

// 2.2.4. Strict. Writeable: false
// "use strict";
// const student = {};
// Object.defineProperty(student, "fullName", {
//   value: "Nguyen Van A",
//   writable: false, // Default: false. Just for clarity.
// });
// student.fullName = "Nguyen Van B";
// console.log(student.fullName); // TypeError: Cannot assign to read only property 'fullName' of object '#<Object>'

// 2.2.5. Non-strict. Có thể xóa thuộc tính của object nhưng không thể xóa object.
// const student = {
//   fullName: "Nguyen Van A",
// };
// delete student;
// console.log(student.fullName); // > "Nguyen Van A"

// 2.2.6. Strict. Có thể xóa thuộc tính của object nhưng không thể xóa object.
// "use strict";
// const student = {
//   fullName: "Nguyen Van A",
// };
// delete student; // SyntaxError: Delete of an unqualified identifier in strict mode.
// console.log(student.fullName);

// 2.3. Báo lỗi khi hàm có tham số trùng tên
// 2.3.1. Non-strict
// function sum(a, a) {
//   return a + a;
// }
// console.log(sum(6, 9)); // > 18

// 2.3.2. Strict
// "use strict";
// function sum(a, a) {
//   return a + a;
// }
// console.log(sum(6, 9)); // SyntaxError: Duplicate parameter name not allowed in this context

// 2.4. Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi code block
// 2.4.1. Non-strict
// {
//   function sum(a, b) {
//     return a + b;
//   }
// }
// console.log(sum(6, 9)); // > 15

// 2.4.2. Strict
// "use strict";
// {
//   function sum(a, b) {
//     return a + b;
//   }
// }
// console.log(sum(6, 9)); // ReferenceError: sum is not defined

// 2.5. Không đặt tên biến, tên hàm bằng một số từ khóa "nhạy cảm" của ngôn ngữ
// 2.5.1.
// "use strict";
// const private = 7; // SyntaxError: Unexpected strict mode reserved word

// 2.5.2.
// "use strict";
// const protected = 7; // SyntaxError: Unexpected strict mode reserved word

// 3. Công dụng
// 3.1. Tránh "quên" từ khóa khai báo biến
// 3.2. Tránh trùng tên biến dẫn tới lỗi logic
// 3.3. Sử dụng bộ nhớ hiệu quả vì tránh tạo biến global
