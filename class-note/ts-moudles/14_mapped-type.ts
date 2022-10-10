// 맵드 타입

type Heroes = 'Hulk' | 'Capt' | 'Thor'
type HereAges = { [K in Heroes]: number }
const ages: HereAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
}

var arr4 = ['a', 'b', 'c'];
for (var key in arr4) {
  console.log(key);
}