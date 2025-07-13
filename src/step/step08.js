import React from 'react'
import img from './logo192.png'

const Step08 = () => {
  return (
    <>
    {/* 1. public폴더에 있는 이미지 불러오기 */}
    <img src='logo192.png' alt='이미지'></img>
    {/* 2. public에서 불러올떄 꼭 이렇게 불러오기! (아래처럼 안하면 다 꺠짐) */}
    <img src={process.env.PUBLIC_URL + 'logo192.png'} alt='이미지'></img>

    {/* 3. css이미지 파일불러오기 */}
    <div className='bg-main'></div>
    {/* 4. 번 방법 */}
    <div className='w-40 h-40 bg-cover' style={{backgroundImage : `url(${process.env.PUBLIC_URL}/logo192.png`}}></div>
    {/* 5번 방법 이미지 폴더로 옮기고 import형식 */}
    <img src={img} alt='이미지'></img>
    
    </>

  )
}

export default Step08