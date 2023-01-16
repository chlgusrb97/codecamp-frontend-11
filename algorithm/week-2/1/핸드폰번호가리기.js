// 문제 설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.

function solution(phone_number) {
  const answer = '';
  
  let secretNum = phone_number.slice(phone_number.length - 4)
  
  for(let i = 0; i < phone_number.length - 4; i++) {
    answer += "*" 
  }
  return answer += secretNum
}



// function solution(phone_number) {
//   const answer = '';
  
//   for(let i = 0; i < phone_number.length; i++) {
// //       뒷4글자보다 앞에 있는 것이 숫자일 때
// //       문자열 전체에서 4자리를 뺀 인덱스 값보다 미만일 때
//       if(i < phone_number.length - 4) {
//           answer += '*';
//       } else {
// //           전화번호 뒷 4글자에 포함될 때
// //           문자열 전체에서 4자리를 뺀 인덱스 값 이상일 때
//           answer += phone_number[i];
//       }
//       return answer;
//   }
// }



// function solution(phone_number) {
//   let answer = "";
//   answer = answer.padStart(phone_number.length - 4, "*");
//   answer += phone_number.substring(phone_number.length - 4)
  
//   return answer
// }