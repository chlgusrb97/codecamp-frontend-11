import {useState} from 'react'

export default function SignUpStatePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('')
  
  function onChangeEmail(event) { // 이벤트 핸들러 함수라 불린다. (이벤트를 다루는 함수)
    console.log(event) // 나의 활동
    console.log(event.target) // 작동된 태그
    console.log(event.target.value) // 작동된 태그에 입력된 값

    setEmail(event.target.value)
  }

  function onChangePassword(event) {

    setPassword(event.target.value)

  }

  function onClickSignup(event) {
    console.log(email) // 진짜 포장이 잘 됐는지 확인해보기
    console.log(password) // 진짜 포장이 잘 됐는지 확인해보기

    // 1. 검증하기
    if(email.includes('@') === false) {
      // alert('이메일 형식이 아닙니다!')
      // document.getElementById('myerror').innerText = '이메일 형식이 아닙니다!' ==> 옛날 방식

      setEmailError('이메일 형식이 아닙니다!')
    } else {
      // 2. 백엔드 컴퓨터에 보내주기(백엔드 개발자가 만든 함수. 즉, API)
      //    => 나중에

      // 3. 성공알람 보여주기
      alert('회원가입을 축하합니다!')
    }

    
  }

  return (
    <div>
      이메일: <input type='text' onChange={onChangeEmail} />
      {/* <div id='myerror'></div> ==> 옛날 방식 */}
      <div>{emailError}</div>
      비밀번호: <input type='password' onChange={onChangePassword} />
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  )

}