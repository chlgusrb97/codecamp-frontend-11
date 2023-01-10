import { useState } from 'react'

export default function CountUp() {
  
  // function NumberUp() {
  //   let count = Number(document.getElementById('number').innerText) + 1;
  //   document.getElementById('number').innerText = count;
  // }

  const [number, setNumber] = useState(0);

  function NumberUp() {
    setNumber(number + 1)
  }
  

  return (
    <div>
      {/* <span id="number">0</span>
      <button onClick={NumberUp}>카운트증가</button> */}

      <span>{number}</span>
      <button onClick={NumberUp}>카운트증가</button>
    </div>
  )

}