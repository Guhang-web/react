import React from 'react'

const Step07 = () => {
//  for문 사용가능
const stu = [ '짱구', '짱아', '흰둥이']

  return (
    <>
    {/* for문 사용불가 */}
    <ul>
        {/* key : 리엑트에서 반복문 사용시 각 요소를 구분하기위한 고유의 값 */}
    {stu.map((v, i)=> <li key={i}>{v}</li>)}
    </ul>
    </>
  )
}

export default Step07