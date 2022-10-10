// 타입 추론 기본 1

var a = 10;

function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

10 + '10' // 100

// 타입 추론 기본 2
interface Dropdown3<T> {
  value: T;
  title: string;
}
var shoppingItem: Dropdown3<string> = {
  value: 'abc',
  title: 'hello'
}

// 타입 추론 기본 3
interface Dropdown4<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<K> extends Dropdown4<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'dd',
  tag: 'vv'
}

// Best Common Type
var arr3 = [1,2,true];