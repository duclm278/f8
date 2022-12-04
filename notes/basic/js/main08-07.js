// Spread
var arr1 = [1, 2];
var arr2 = [3, 4, 5];
var arr3 = [...arr1, ...arr2];
console.log(arr3);
var arr3 = [...arr2, ...arr1];
console.log(arr3);

var obj1 = {
  name: "JavaScript",
};
var obj2 = {
  price: 1000,
};
var obj3 = { ...obj1, ...obj2 };
console.log(obj3);
