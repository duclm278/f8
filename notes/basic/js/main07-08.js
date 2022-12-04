var coursesApi = "http://localhost:3000/courses";
function start() {
  getCourses(renderCourses);
  handleCreateForm();
}

start();

// Functions
function getCourses(callback) {
  fetch(coursesApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function createCourses(data, callback) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(coursesApi, options)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function handleDeleteCourse(id) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(coursesApi + "/" + id, options)
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      var courseItem = document.querySelector(".course-item-" + id);
      if (courseItem) {
        courseItem.remove();
      }
    });
}

// handleEditCourse()
function updateCourse(data, id, callback) {
  var options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(coursesApi + "/" + id, options)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function handleEditCourse(id) {
  var courseItem = document.querySelector(".course-item-" + id);
  var name = document.querySelector("input[name='name']");
  name.value = courseItem.querySelector("h4").textContent;
  var description = document.querySelector("input[name='description']");
  description.value = courseItem.querySelector("p").textContent;

  var createBtn = document.querySelector("#create");
  createBtn.textContent = "Save";
  createBtn.onclick = function () {
    var newName = document.querySelector("input[name='name']");
    var newDescription = document.querySelector("input[name='description']");
    var formData = {
      name: newName.value,
      description: newDescription.value,
    };
    updateCourse(formData, id, function () {
      getCourses(renderCourses);
      newName.value = "";
      newDescription.value = "";
      createBtn.textContent = "Create";
      handleCreateForm();
    });
  };
}

function renderCourses(courses) {
  var listCoursesBlock = document.querySelector("#list-courses");
  var htmls = courses.map(function (course) {
    return `
      <li class='course-item-${course.id}'>
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        <button onclick="handleEditCourse(${course.id})">Edit</button>
        <button onclick="handleDeleteCourse(${course.id})">Delete</button>
      </li>
    `;
  });
  listCoursesBlock.innerHTML = htmls.join("");
}

function handleCreateForm() {
  var createBtn = document.querySelector("#create");
  createBtn.onclick = function () {
    var name = document.querySelector("input[name='name']");
    var description = document.querySelector("input[name='description']");
    var formData = {
      name: name.value,
      description: description.value,
    };
    createCourses(formData, function () {
      getCourses(renderCourses);
      name.value = "";
      description.value = "";
    });
  };
}
