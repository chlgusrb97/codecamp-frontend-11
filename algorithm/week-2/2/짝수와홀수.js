// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.

function solution(num) {
  if(num % 2) {
      return "Odd"
  } else {
      return "Even"
  }
}


function solution(num) {    // 삼항연산자 풀이법
  return num % 2 === 0 // 어떠한 숫자를 2로 나눴을 때 짝수인자를 판별
  ? "Even"     //    나머지 값이 0일 때 === 짝수가 맞을 때
  : "Odd"     //    나머지 값이 1일 때 === 짝수가 아닐 때
}