var users = [
  {
    id: 1,
    name: "A",
  },
  {
    id: 2,
    name: "B",
  },
  {
    id: 3,
    name: "C",
  },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "hello, B",
  },
  {
    id: 2,
    user_id: 2,
    content: "hello, A",
  },
  {
    id: 3,
    user_id: 1,
    content: "bye, B",
  },
];

// Fake API call
function getComments() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var result = comments;
      resolve(result);
    }, 2000);
  });
}

function getUsersByIds(commentUserIds) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      var result = users.filter(function (user) {
        return commentUserIds.includes(user.id);
      });
      resolve(result);
    }, 2000);
  });
}

getComments()
  .then(function (commentData) {
    var commentUserIds = commentData.map(function (comment) {
      return comment.user_id;
    });
    return getUsersByIds(commentUserIds).then(function (userData) {
      return {
        users: userData,
        comments: commentData,
      };
    });
  })
  .then(function (dataBlock) {
    var commentBlock = document.getElementById("comment-block");
    var html = "";
    dataBlock.comments.forEach(function (comment) {
      var user = dataBlock.users.find(function (user) {
        return user.id === comment.user_id;
      });
      html += `<li>${user.name}: ${comment.content}</li>`;
    });
    commentBlock.innerHTML = html;
  });
