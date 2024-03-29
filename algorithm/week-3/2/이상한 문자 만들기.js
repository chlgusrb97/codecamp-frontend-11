// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
// 입출력 예
// s	return
// "try hello world"	"TrY HeLlO WoRlD"

// 1.
function solution(s) {
  let answer = "";
  let idx = 0; // 단어별로 인덱스 값을 저장하는 역할

  for (let i = 0; i < s.length; i++) {
    console.log(s[i], idx);
    if (s[i] === " ") {
      answewr += " "; // andwer += d[i]
      idx = 0; // idx를 0으로 초기화
    } else {
      answer +=
        idx % 2 === 0
          ? // 짝수라면 대문자를 추가
            s[i].toUpperCase()
          : // 홀수라면 소문자를 추가
            s[i].toLowerCase();
      idx++;
    }
  }
  return answer;
}

// 2.
function solution(s) {
  const answer = s
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((letter, i) => {
          return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join("");
    })
    .join(" ");
  return answer;
}
