// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);

var seho2: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer2 {
  name: string;
  skill: string;
}

interface Person2 {
  name: string;
  age: number;
}

function askSomeone(soomeone: Developer2 | Person2) {
  // soomeone.name;
  // soomeone.skill;
  // soomeone.age;
}

askSomeone({ name: '디벨로퍼', skill: '웹 개발'});
askSomeone({ name: '캡틴', age: 100});

function askSomeone2(soomeone: Developer2 & Person) {
  soomeone.name;
  soomeone.skill;
  soomeone.age;
}

askSomeone2({ name: '디벨로퍼', skill: '웹 개발', age: 100});