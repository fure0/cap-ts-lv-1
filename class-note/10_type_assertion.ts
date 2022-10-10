// 타입 단언(type assertion)
var aa;
aa = 20;
aa = 'a';
var bb = aa as string;

// DOM API 조작
// 실행시 반드시 있다는 보장이 없기 때문에 as로 단언을 적어 줘야 if를 안써도 된다.
var div = document.querySelector('div') as HTMLDivElement;
if (div) {
  div.innerHTML;
}