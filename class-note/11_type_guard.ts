// 타입 가드

interface Developer2 {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer2 | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making'}
}

var tony = introduce();
// console.log(tony.skill);

if ((tony as Developer2).skill) {
  var skill = (tony as Developer2).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}

function isDeveloper(target: Developer2 | Person): target is Developer2 {
  return (target as Developer2).skill !== undefined;

}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}