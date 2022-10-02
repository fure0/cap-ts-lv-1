// enum Shoes {
//   Nike,
//   Adidas
// }

enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스'
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 나이키

// 예제
enum Answer {
  yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.yes) {
    console.log('정답입니다.');
  }
  if (answer === Answer.No) {
    console.log('오답입니다.');
  }
}
askQuestion(Answer.yes);
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');