var headingElement = document.querySelector("h1");
headingElement.id = "heading";
headingElement.className = "heading";
headingElement.title = "Heading";
headingElement.setAttribute("class", "heading");
console.log(headingElement);

console.log(headingElement.getAttribute("class"));

headingElement.setAttribute("test", "hello");
console.log(headingElement.test); // > undefined
console.log(headingElement.getAttribute("test")); // > hello
