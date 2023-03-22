// Closure
// https://javascript.info/closure
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

// A closure is the combination of a function bundled together (enclosed) with
// references to its surrounding state (the lexical environment). In other
// words, a closure gives you access to an outer function's scope from an inner
// function. In JavaScript, closures are created every time a function is
// created, at function creation time.
// function makeCounter() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }
// let counter = makeCounter();
// console.log(counter()); // > 0
// console.log(counter()); // > 1
// console.log(counter()); // > 2

// 1. Ứng dụng
// 1.1. Viết code ngắn gọn hơn
// 1.1.1. Before
// console.log("[Info] Bắt đầu gửi mail");
// console.log("[Error] Xảy ra lỗi tại x. Message: x");
// console.log("[Error] Xảy ra lỗi tại x. Message: x");
// console.log("[Error] Xảy ra lỗi tại x. Message: x");
// console.log("[Info] Bắt đầu gửi mail");

// 1.1.1. After
// function makeLogger(type) {
//   return function (message) {
//     console.log(`[${type}] ${message}`);
//   };
// }
// const infoLogger = makeLogger("Info");
// infoLogger("Bắt đầu gửi mail");
// infoLogger("Gửi mail lỗi lần 1, thử gửi lại...");
// infoLogger("Gửi mail thành công cho user x");
// const errorLogger = makeLogger("Error");
// errorLogger("Email không tồn tại trong hệ thống");
// errorLogger("Xảy ra lỗi tại x. Message: x");

// 1.1.2. Nhóm thông tin liên quan đến nhau được JSON.stringify() thành một
// chuỗi lưu trong 1 key của localStorage chứ không phải nhiều key như trước!
// function createStorage(key) {
//   const data = JSON.parse(localStorage.getItem(key)) ?? {};
//   const save = () => {
//     localStorage.setItem(key, JSON.stringify(data));
//   };
//   return {
//     get(key) {
//       return data[key];
//     },
//     set(key, value) {
//       data[key] = value;
//       save();
//     },
//     remove(key) {
//       delete data[key];
//       save();
//     },
//   };
// }
// const profileSettings = createStorage("profile_settings");
// console.log(profileSettings); // > {get: ƒ, set: ƒ, remove: ƒ}
// console.log(profileSettings.get("name")); // > undefined
// profileSettings.set("name", "Duc");
// console.log(profileSettings.get("name")); // > Duc
// profileSettings.set("age", 20);
// profileSettings.set("address", "Hanoi");
// const themeSettings = createStorage("theme_settings");
// themeSettings.set("theme", "dark");

// 1.2. Biểu diễn, ứng dụng tính private trong OOP
// VD2 có hàm createStorage() trả về 1 object có các hàm get(), set(), remove()
// công khai (public) để thao tác với dữ liệu lưu trong localStorage. Tuy nhiên,
// biến data và hàm save() không được công khai (private).

// VD3
// let cars;
// function createApp() {
//   const cars = [];
//   return {
//     addCar(car) {
//       cars.push(car);
//     },
//     show() {
//       console.log(cars);
//     },
//   };
// }
// const app = createApp();
// console.log(app); // > {addCar: ƒ, show: ƒ}
// app.show(); // > []
// app.addCar("BMW");
// app.addCar("Honda");
// app.addCar("Porsche");
// cars = "Hello"; // Không ảnh hưởng đến biến cars trong hàm createApp()
// app.show(); // > ["BMW", "Honda", "Porsche"]

// 2. Lưu ý: Biến được tham chiếu (referenced) bởi một closure có thể không bị
// xoá khỏi bộ nhớ khi hàm cha thực thi xong.
