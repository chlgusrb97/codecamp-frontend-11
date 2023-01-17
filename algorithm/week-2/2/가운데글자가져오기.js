// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

function solution(s) {
  let answer = '';
  let halfLength = Math.floor(s.length / 2)
  
  if(s.length % 2 === 0) {
      answer = s[halfLength - 1].concat(s[halfLength])
  } else {
      answer = s[halfLength]
  }
  
  return answer;
}

function solution(s) {
  let halfLength = Math.floor(s.length / 2)
  
  return s.length % 2 ? s[halfLength - 1].concat(s[halfLength]) : s[halfLength]
}

function solution(s) {
  const center = Math.floor(s.length / 2);
  
  console.log(s, center)
  return s.length % 2
    ? s[center]
    : s.substring(center - 1, center + 1)
}