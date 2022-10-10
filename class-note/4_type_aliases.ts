interface Pserson {
  name: string;
  age: number;
}

// type Person = {
//   name: string;
//   age: number;
// }

var seho: Pserson = {
  name: '세호',
  age: 30
}

type MyString = string;
var str2: MyString = 'hello';

type Todo2 = {id: string, title: string, done: boolean};
function getTodo(todo: Todo2) {
  
}