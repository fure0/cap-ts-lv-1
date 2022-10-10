// 타입 호환

interface Developer3 {
  name: string;
  skill: string;
}
interface Person3 {
  name: string;
}

class Person4 {
  name: string;
}

var developer3: Developer3;
var person3: Person3;
// developer3 = person3; 불가능
// developer3 = new Person3(); 불가능
person3 = developer3; // 가능


// 함수
var add3 = function(a: number) {

}
var sum3 = function(a: number, b: number) {
  
}
sum3 = add3;
// add3 = sum3; 불가

// 제네릭
interface Empty<T> {

}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;

// notempty1 = notempty2; 불가
// notempty2 = notempty1; 불가
