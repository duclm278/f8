function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

User.prototype.className = "F8";
User.prototype.getClassName = function () {
  return this.className;
};

var user1 = new User("AA", "BB", "Avatar");
user1.title = "Chia sẻ dạo tại F8";
var user2 = new User("CC", "DD", "Avatar");
user2.comment = "Comment dạo tại F8";
console.log(user1);
console.log(user1.getName());
console.log(user2);
console.log(user2.getName());
console.log(user2.constructor === User);
