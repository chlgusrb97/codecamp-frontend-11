import { useState } from 'react';

export default function randomNumber() {

  // function random() {
  //   let num = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
  //   let target = document.getElementById('target')

  //   target.innerText = num;
    
  // }

  const [random, setRandom] = useState('000000');

  function randomNum() {
    setRandom(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"))
  }

  return (
    <div>
      {/* <div id='target'>000000</div>
      <button onClick={random}>인증번호 전송</button> */}

      <div>{random}</div>
      <button onClick={randomNum}>인증번호 전송</button>
    </div>
  )

}