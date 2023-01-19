// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수
// 입출력 예
// N	answer
// 123	6
// 987	24


function solution(n) {
  let answer = String(n)
        .split("")
        .reduce( (acc, cur) => {
            return acc + Number(cur)
    }, 0)
    return answer;
}



function solution(n) {
  let answer = 0;
  
    String(n)
        .split("")
        .forEach((el) => {
        answer += Number(el)
    }) 
    return answer;
}



function solution(x, n) {
  var answer = [];
  
  let result = 0
  
  for(let i = 1; i <= n; i++) {
      result = result + x
      answer.push(result)
  }
  
  return answer;
}