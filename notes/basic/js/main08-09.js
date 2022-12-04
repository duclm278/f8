// Optional chaining (?.)
const person1 = {
  name: "A",
  cat: {
    name: "C",
  },
};

const person2 = {
  name: "B",
  dog1: {
    name: "D1",
    dog2: {
      name: "D2",
      dog3: {
        name: "D3",
        dog4: {
          name: "D4",
        },
      },
    },
  },
};

// Cannot read property "name" of undefined
// const p1Dog1Name = person1.dog1.name;

// ES5
let p1Dog3Name = undefined;
let p2Dog3Name = undefined;
if (
  person1.dog1 &&
  person1.dog1.dog2 &&
  person1.dog1.dog2.dog3 &&
  person1.dog1.dog2.dog3.dog4
) {
  p1Dog3Name = person1.dog1.dog2.dog3.dog4.name;
}
if (
  person2.dog1 &&
  person2.dog1.dog2 &&
  person2.dog1.dog2.dog3 &&
  person2.dog1.dog2.dog3.dog4
) {
  p2Dog3Name = person2.dog1.dog2.dog3.dog4.name;
}
console.log(p1Dog3Name);
console.log(p2Dog3Name);

// ES6+
console.log(person1.dog1?.dog2?.dog3?.dog4?.name);
console.log(person2.dog1?.dog2?.dog3?.dog4?.name);
console.log(person1.someNonExistentMethod?.());
