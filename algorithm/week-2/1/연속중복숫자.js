// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.

// 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.

// 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 

// 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

function solution(arr) {
  const answer = [];
  
  for(let i = 0; i < arr.length; i++) {    
    // 현재 인덱스 값으로 가져온 숫자와
    // 바로 뒤에 있는 인덱스 값으로 가져온 숫자를 비교했을 때
    // 서로 동일하지 않다면, 연속되지 않는다.
    if(arr[i] !== arr[i + 1]) {
        // 연속되지 않는다면, 현재 인덱스 갑으로 가져온 숫자를 배열에 넣는다.  
      answer.push(arr[i])
    }
  }
  
  return answer
}


// For-Of문

// function solution(arr) {
//   const answer = [];
    
//   let i = 0;
  
//   for( let key of arr ) {    
//       console.log(key)
//     if(key !== arr[i + 1]) {
//       answer.push(key)
//     }
//     i++
//   }
//   return answer
// }


// For-In문

// function solution(arr) {
//   const answer = [];
  
//   for( let i in arr ) { 
//     // for in문의 index값은 문자열로 가져오기 때문에 따로 number로 선언해주어야한다.
//       i = Number(i)
      
//     if(arr[i] !== arr[i] + 1]) { 
//       answer.push(key)
//     }
//     i++
//   }
//   return answer
// }