import React from 'react'

const Step03 = () => {
  const handleClick = () => {
    alert('버튼 클릭함')
  }
//   JS 작성법
    return (
    <>
    {/* 
        onClick={실행할함수}
        onClick = {function(){실행할코드}}   << 함수
        onClick = { () => {실행할코드}}   <<  화살표 함수
    */}
        <button onClick={()=>alert('버튼클릭함')}>클릭</button>
        <button style={{color : 'red', backgroundColor : 'blue'}} onClick={handleClick}>클릭</button>
    
    </>
  )
}

export default Step03;