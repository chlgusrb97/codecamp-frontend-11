// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.
// 입출력 예
// s	answer
// "pPoooyY"	true
// "Pyy"	false

function solution(s) {
  let sLower = s.toLowerCase().split("");
  let pCount = 0;
  let yCount = 0;

  console.log(sLower);

  for (let i = 0; i < sLower.length; i++) {
    if (sLower[i] === "p") {
      pCount += 1;
    } else if (sLower[i] === "y") {
      yCount += 1;
    }
  }
  if (pCount === yCount) {
    return true;
  } else {
    return false;
  }
}

// 코드 리뷰 문제 풀이

// 1.
function solution(s) {
  let p = 0;
  let y = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      p++; // p = p + 1
    } else if (s[i] === "y" || s[i] === "Y") {
      y++;
    }
  }
  return p === y;
}

// 2.
function solution(s) {
  s = s.toLowerCase();
  const obj = {};

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === undefined) obj[s[i]] = 0;
    obj[s[i]]++;
  }
  return obj.p === obj.y;
}

// 3.
function solution(s) {
  const obj = {};
  const answer = s
    .toLowerCase()
    .split("")
    .forEach((letter) => {
      obj[letter] === undefined
        ? (obj[letter] = 1)
        : // 기존에 알파벳이 없다면 1을 초기값을 설정
          obj[letter]++;
      // 기존의 알파벳의 개수만 1 증가
    });
  return obj.p === obj.y;
}
