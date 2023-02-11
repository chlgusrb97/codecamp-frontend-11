// 완주하지 못한 선수
// 문제 설명
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.
// 입출력 예
// participant	completion	return
// ["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"
// 입출력 예 설명
// 예제 #1
// "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #2
// "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #3
// "mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

// ===========================================================

// 코드 실행 시 정답 처리는 되지만 제출했을 시 효율석 테스트 문제로 제출 처리 안됨.
function solution(participant, completion) {
  let result = "";

  for (let i = 0; i < participant.length; i++) {
    if (!participant.indexOf(completion[i])) {
      result = participant[i];
    } else if (completion.includes(participant[i]) === false) {
      result = participant[i];
    }
  }
  return result;
}

// ===========================================================

// 코드 실행 시 정답 처리는 되지만 제출했을 시 효율석 테스트 문제로 제출 처리 안됨.
for (let i = 0; i < completion.length; i++) {
  if (participant.includes(completion[i])) {
    participant.splice(participant.indexOf(completion[i]), 1);
  }
}
return participant[0];

// ===========================================================

function solution(participant, completion) {
  const obj = {};

  // 1. 참가자 명단을 구성 ( key: 참가자 이름, value: 참가자 수 )
  for (let i = 0; i < participant.length; i++) {
    if (obj[participant[i]] === undefined) {
      obj[participant[i]] = 0;
    }
    obj[participant[i]]++;
  }

  // 2. 참가자 명단에서 완주자의 수만큼 제거
  for (let i = 0; i < completion.length; i++) {
    obj[completion[i]]--;
  }

  // 3. 참가자 명단에 있지만, 완주자 명단에 없는 사람을 찾는다. (value 값이 0이 아닌 경우)
  for (let key in obj) {
    if (obj[key] !== 0) {
      return key;
    }
  }
}

// ===========================================================

function solution(participant, completion) {
  // 참가자와 완주자 명단을 오름차순으로 정렬
  participant.sort((a, b) => (a > b ? 1 : -1));
  completion.sort((a, b) => (a > b ? 1 : -1));

  let answer = "";
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      // console.log(i, participant[i], completion[i])
      answer = participant[i];
      break;
    }
  }
  return answer;
}

// ===========================================================

function solution(participant, completion) {
  // 참가자와 완주자 명단을 오름차순으로 정렬
  participant.sort((a, b) => (a > b ? 1 : -1));
  completion.sort((a, b) => (a > b ? 1 : -1));

  const answer = participant.filter((name, i) => {
    // console.log(name, i, completion[i])
    return name !== completion[i];
  });
  return answer[0];
}
