interface User {
  age: number;
  name: string;
}

// 변수에 활용한 인터페이스
var seho: User = {
  age: 33,
  name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

const capt = {
  age: 34,
  name: 'zz'
}

getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number
}

var sum3: SumFunction;
sum3 = function(a: number, b:number) {
  return a+b;
}

// 인덱싱
interface StringArray {
  [index: number]: string
}

var arr2: StringArray = ['a', 'b', 'c'];
// arr2[0] = 10;


// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj2: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFIle: /\.js$/,
}
// obj2['cssFile'] = 'a';

Object.keys(obj2).forEach(function(value) {

})


// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  langeuage: string;
}

var capt2: Developer = {
  name: 'cap',
  age: 100,
  langeuage: 'ts'
}