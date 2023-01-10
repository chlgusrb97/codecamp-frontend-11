import { useState } from 'react'
import styled from '@emotion/styled'

export const RedText = styled.div`
  color: red;
`


export default function SignUpForm() {

  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  const [emailError, setEmailError] = useState('')
  const [passwordError1, setPasswordError1] = useState('')
  const [passwordError2, setPasswordError2] = useState('')


  function onChangeEmail(event) {
    setEmail(event.target.value)
  }

  function onChangePassword1(event) {
    setPassword1(event.target.value)
  }

  function onChangePassword2(event) {
    setPassword2(event.target.value)
  }

  function checkBtn(event) {
    
    if(email.includes('@') === false) {
      setEmailError('이메일 형식이 아닙니다')
    } else {
      setEmailError('')
    }

    if(password1 !== password2) {
      setPasswordError2('비밀번호가 다릅니다')
    } else {
      setPasswordError2('')
    }
    

  }

  return  (
    <div>
      <input type="text" placeholder='이메일' onChange={onChangeEmail}/>
      <RedText>{emailError}</RedText>
      <input type="password" placeholder='비밀번호' onChange={onChangePassword1} />
      <input type="password" placeholder='비밀번호 확인' onChange={onChangePassword2} />
      <RedText>{passwordError2}</RedText>
      <button onClick={checkBtn}>가입하기</button>
    </div>
  )

}