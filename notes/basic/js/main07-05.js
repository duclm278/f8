var postsApi = "https://jsonplaceholder.typicode.com/posts";
// var postsApi = "https://123jsonplaceholder.typicode.com/posts";

// Fetch API
fetch(postsApi)
  // Retrieve ReadableStream
  .then(function (response) {
    // JSON.parse()
    return response.json();
    // JSON -> JavaScript types
  })
  .then(function (posts) {
    var htmls = posts.map(function (post) {
      return `<li>
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        </li>
      `;
    });
    var html = htmls.join("");
    document.getElementById("post-block").innerHTML = html;
  })
  .catch(function (err) {
    console.log(err);
  });
