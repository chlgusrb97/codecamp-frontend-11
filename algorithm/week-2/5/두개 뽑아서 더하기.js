// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.
// 입출력 예
// numbers	result
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]
// 입출력 예 설명
// 입출력 예 #1

// 2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
// 3 = 2 + 1 입니다.
// 4 = 1 + 3 입니다.
// 5 = 1 + 4 = 2 + 3 입니다.
// 6 = 2 + 4 입니다.
// 7 = 3 + 4 입니다.
// 따라서 [2,3,4,5,6,7] 을 return 해야 합니다.
// 입출력 예 #2

// 2 = 0 + 2 입니다.
// 5 = 5 + 0 입니다.
// 7 = 0 + 7 = 5 + 2 입니다.
// 9 = 2 + 7 입니다.
// 12 = 5 + 7 입니다.
// 따라서 [2,5,7,9,12] 를 return 해야 합니다.


function solution(numbers) {
  const answer = [];
  
  for(let i = 0; i < numbers.length; i++) {
      // 합산될 첫번째 인덱스 값을 구해오는 반복문
      console.log(i, numbers[i])
      for(let l = i + 1; l < numbers.length; l++) {
          // 합산될 두번째 인덱스 값을 구해오는 반복문
          const sum = numbers[i] + numbers[l]
          console.log(i, l, "==>", sum, answer, answer.includes( sum ))
          
          // 배열에 합산될 결과를 찾았을 때, 없는 경우에만 배열에 넣어준다.
          // (includes의 결과가 false일 때만)
          if( answer.includes(sum) === false) {
              answer.push(numbers[i] + numbers[l])
          }
      }
  }
  return answer.sort( (a, b) => a - b );
  // answer.sort( (a, b) => { return a - b } )

  //   arr = [8, 1, 11, 33 , 3, 9 ,4, 2]
  // // 큰 순서대로 나열
  // // [1, 2, 3, 4, 8, 9]

  // // sort 메소드는 첫번째 자릿수만 기준으로 따진다. Ex 33 => 3
  // arr.sort( (a, b) => {
  //   console.log(a, b, a - b)
  //   return a - b
  // }) // 오름차순 (큰 숫자가 뒤로 간다.)

  // arr.sort( (a, b) => {
  //   return b - a
  // }) // 내림차순 (큰 숫자가 앞으로 간다.)
}




function solution(numbers) {
  const answer = new Set();
  
  for(let i = 0; i < numbers.length; i++) {
      
      for(let l = i + 1; l < numbers.length; l++) {
          const sum = numbers[i] + numbers[l]
          answer.add( sum )  
      }
  }
  console.log(answer)
  return Array.from(answer).sort( (a, b) => a - b );
}


function solution(numbers) {
  const answer = []
  // const answer = new Set();
  
  // 1. 첫번째 인덱스 값을 가져오는 forEach
  numbers.forEach( (num1, i) => {
      // 2. 첫번째 인덱스 값보다 하나 큰 인덱스 값부터 시작하는 배열을 자른 후,
      // 3. 두번째 인덱스 값을 가져오기 위한 forEach
      numbers.slice( i + 1 ).forEach( num2 => {
          const sum = num1 + num2;
          
          if( answer.includes( sum ) === false ) {
              answer.push(sum)
              // answer.add(sum)
          }
      })
      // console.log(num1, numbers, i, numbers.slice( i + 1 ))
  })
  // return Array.from(answer).sort( (a, b) => a - b)
  return answer.sort((a, b) => a - b)
}

// includes가 계속 찾아주기때문에 속도면에서 newSet()이 빠르다.