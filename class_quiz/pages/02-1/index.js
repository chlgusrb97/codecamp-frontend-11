import {useState} from 'react'

export default function BtnTextChange () {

  
  


  const [button, setButton] = useState('안녕하세요');

  function changeBtn() {

    setButton('반갑습니다')

  }

  
  let btn = document.getElementById('btn');

  function changeBtn2() {
    btn.innerText = '반갑습니다'
  }


  return (
    <div>
      <button onClick={changeBtn}>{button}</button>
      <button id='btn' onClick={changeBtn2}>안녕하세요</button>
    </div>
  )

}