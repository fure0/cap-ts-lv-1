// function logText(text: any) {
//   console.log(text);
//   return text;
// }
// logText('');

function logText<T>(text: T):T {
  console.log(text);
  return text;
}
const str3 = logText<string>('a');
str3.split('');
const login = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown {
  value: string;
  selected: boolean;
}

const obj3: Dropdown = {
  value: 'abc',
  selected: false
};

interface Dropdown2<T> {
  value: T;
  selected: boolean;
}

const obj4: Dropdown2<number> = {
  value: 10,
  selected: false
};

// 제네릭 타입 제한
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {

  }); 
  return text;
}
logTextLength(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength2('abc');
logTextLength2({ length: 10 });
// logTextLength2(10);

// 제네릭 타입 제한 3 - keyof
interface ShoopingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoopingItem>(itemOption: T): T {
  return itemOption;
}
getShoppingItemOption("name");