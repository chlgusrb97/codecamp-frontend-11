// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true




function solution(s) {
  if(s.length !== 4 && s.length !== 6) {
    return false;
  }
    
    console.log(s.split(""))
  const answer = s.split("").filter((el) => {
      console.log(el)
//       문자인 것만 새로운 배열에 남겨준다.
      return Number.isNaN(Number(el))
  });
  return answer.length === 0
}




// function solution(s) {
//   if(s.length !== 4 && s.length !== 6) {
//     return false;
//   }

//   for(let i = 0; i < s.length; i++) {
//     if(Number.isNaN(Number(s[i])) === true) {
//       // 문자열 전체중에 하나라도 숫자가 아닌 문자가 포함되어 있는 경우
//       return false;
//     }
//   }
//   return true;
// }



// function solution(s) {
//   if(s.length !== 4 && s.length !== 6 ) {
//     // 1, 2, 3, 5, 7, 8 글자일 때 적용    
//       return false; 
//   }
//     if( Number.isNaN(Number(s)) === true) {
//     // NaN값이 맞다면, 숫자가 아니다. === false를 리턴
//        return false;
//        } else {
//     // NaN값이 아니라면, 숫자가 맞다. === true를 리턴
//            return true
//        }
//     console.log(s, Number.isNaN( Number(s) ) )
// }


// // isNaN("a") // true라면, NaN값이 맞다. === 숫자가 아니다
// // isNaN("1123") // false라면, NaN값이 아니다 === 숫자가 맞다

// // isNaN("a") // 받은 데이터를 자동으로 숫자타입으로 변환한다.
// // Number.isNaN(Number("a")) // 숫자타입으로 변환하지 않고 NaN이 맞는지를 체크

// // Number( undefined )  // NaN
// // isNaN( undefined ) // true
// // Number.isNaN( undefined ) // false

