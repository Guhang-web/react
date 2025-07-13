import React, { useState } from 'react'


//  클릭이벤트 및 마우스 호버
const Event01 = () => {
const [count, setCount] = useState(0)
const [msg, setMsg] = useState('마우스 올려보세요.')
const handleClick = () =>{
    setCount(count +1);
}

const handleMouseOver = () => { setMsg('마우스HOVER')};
const handleMouseOut = () => { setMsg('마우스OUT')};

    // 클릭이벤트
  return (
    <>
    <p>클릭 횟수 : {count}</p>
    <button onClick={handleClick}>클릭</button>


{/* 버블링 발생 */}
    <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{msg}</p>
{/* 버블링 발생안함 */}
    <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{msg}</p>


    </>
  )
}

export default Event01