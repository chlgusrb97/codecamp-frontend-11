// 41**. 조건문 실전 적용 - 점수에 따른 등급** 

// **`문제 설명`**

// ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2a7c4e64-7fed-4057-af3a-6c85b2e006f2/_2021-04-21__3.46.01.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2a7c4e64-7fed-4057-af3a-6c85b2e006f2/_2021-04-21__3.46.01.png)

// 입력되는 score에 따라 알맞은 등급을 적어야 합니다.

// 100~90 → "A"

// 89~80 → "B"

// 79~70 → "C"

// 69~60 → "D"

// 59점 이하는 "F"

// 100점 초과나 0점 미만은 "잘못된 점수입니다"라는 문구를 띄워주세요.

// **`입력 인자`**

// - score - 숫자열

// **`주의 사항`**

// - 

// **`예상 결과`**

// ```jsx
// grade(105)  // "잘못된 점수입니다"
// grade(-10)  // "잘못된 점수입니다"
// grade(97)   // "A"
// grade(86)   // "B"
// grade(75)   // "C"
// grade(66)   // "D"
// grade(52)   // "F"
// ```

function grade(score) {
  if(score > 100 || score < 0) {
    return "잘못된 점수입니다"
  } else if(score >= 90 && score <= 100) {
    return "A"
  } else if(score >= 80 && score < 90) {
    return "B"
  } else if(score >= 70 && score < 80) {
    return "C"
  } else if(score >= 60 && score < 70) {
    return "D"
  } else if (score < 60) {
    return "F"
  }
}