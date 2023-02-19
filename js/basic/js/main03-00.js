// Type 1: toString, join, pop, push, shift, unshift, splice, concat, slice

// Type 2: forEach, every, some, find, filter, map, reduce

const courses = [
  {
    id: 1,
    name: "JavaScript",
    coin: 250,
  },
  {
    id: 2,
    name: "HTML, CSS",
    coin: 0,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 0,
  },
  {
    id: 4,
    name: "PHP",
    coin: 400,
  },
  {
    id: 5,
    name: "ReactJS",
    coin: 500,
  },
  {
    id: 6,
    name: "Ruby",
    coin: 100,
  },
];

// forEach
// courses.forEach(function (course, index) {
//   console.log(index);
//   console.log(index, course);
// });

// every
// var isFree = courses.every(function (course, index) {
//   console.log(index);
//   return course.coin === 0;
// });
// console.log(isFree);

// some
// var isFree = courses.some(function (course, index) {
//   console.log(index);
//   return course.coin === 0;
// });
// console.log(isFree);

// find
// var course = courses.find(function (course, index) {
//   console.log(index);
//   return course.name === "Ruby";
// });
// console.log(course);

// filter
// var rubyCourses = courses.filter(function (course, index) {
//   console.log(index);
//   return course.name === "Ruby";
// });
// console.log(rubyCourses);

// map
// var newCourses = courses.map(function (course, index) {
//   console.log(index);
//   return {
//     id: course.id,
//     name: `Khoa hoc: ${course.name}`,
//     coin: course.coin,
//     coinText: `Gia: ${course.coin}`,
//   };
// });
// console.log(newCourses);

// reduce
// var totalCoin = courses.reduce(function (total, course) {
//   return total + course.coin;
// }, 0);
// console.log(totalCoin);
// var numbers = [250, 0, 0, 400, 500, 100];
// var sum = numbers.reduce(function (sum, number) {
//   return sum + number;
// });
// console.log(sum);

// Task: Flatten array
// var deepArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// var flatArray = deepArray.reduce(function (flatOut, deepItem) {
//   return flatOut.concat(deepItem);
// }, []);
// console.log(flatArray);

// Task: Get courses
var topics = [
  {
    topic: "Front-end",
    courses: [
      {
        id: 1,
        title: "HTML, CSS",
      },
      {
        id: 2,
        title: "JavaScript",
      },
    ],
  },
  {
    topic: "Back-end",
    courses: [
      {
        id: 1,
        title: "PHP",
      },
      {
        id: 2,
        title: "NodeJS",
      },
    ],
  },
];

// var newCourses = topics.reduce(function (courses, topic) {
//   return courses.concat(topic.courses);
// }, []);
// console.log(newCourses);
// var html = newCourses
//   .map(function (course) {
//     return `
//       <div>
//         <h2>${course.title}</h2>
//         <p>ID: ${course.id}</p>
//       </div>
//     `;
//   })
//   .join("");
// console.log(html);
