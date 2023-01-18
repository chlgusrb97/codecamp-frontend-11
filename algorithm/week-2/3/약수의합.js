// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
// 입출력 예
// n	return
// 12	28
// 5	6
// 입출력 예 설명
// 입출력 예 #1
// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

// 입출력 예 #2
// 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.




function solution(n) {
    
  const answer = new Array(n)
                      .fill(1)
                      .reduce( (acc, cur, i) => {
                          const num = cur + i;
                          console.log(acc, cur, i, num)
                          
                          return acc + (
                              n % num === 0
                                  ? num // 약수가 맞을 경우
                                  : 0 // 약수가 아닌 경우
                          );
                          
                      }, 0)
  
  return answer
  
  // return new Array(n)
}




// 반복문에서 n을 2로 나눠서 반복하는 횟수를 2배 줄여 속도를 높였음.
function solution(n) {
  let answer = n;
  
  for( let i = 1; i <= n / 2; i++) {
      
      if(n % i === 0) {
          // 어떠한 숫자를 어떤 값으로 나눴을 때에 나머지 값이 0이면 약수이다.
          answer += i
      }
  }
  return answer
}




// function solution(n) {
//   let answer = 0;
  
//   for( let i = 1; i <= n; i++) {
//     if(n % i === 0) {
//         // 어떠한 숫자를 어떤 값으로 나눴을 때에 나머지 값이 0이면 약수이다.
//           answer += i
//       }
//   }
//   return answer
// }