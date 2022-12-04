// npm init
// npm install json-server
// M1:
// - Run: npx json-server --watch db.json
// M2:
// - Add: package.json > "scripts" > "start": "json-server --watch db.json"
// - Run: npm start

// Fake API | Mock API
var courseApi = "http://localhost:3000/courses";
fetch(courseApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (courses) {
    console.log(courses);
  });
