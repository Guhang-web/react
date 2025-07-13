import React from 'react'

const Step06 = () => {
    // 조건문!
    // if문 사용가능 / return안에서는  if문 사용 불가
const isLoggedIn = true;

  return (
    <>
    {/* if문 사용 불가  : 삼항연산자 사용 */}
    {/* 삼항연산자 : 조건 ? 참일 때 실행 : 거짓일 때 실행 */}
    {isLoggedIn ? <h1>로그인됨</h1>: <h1>로그인하세요.</h1>}
    {/* &&연산자 사용 */}
    {/* AND  연산자 : 조건 && 실행할 코드 */}
    {isLoggedIn && <h1>로그인됨</h1>}
    </>
  )
}

export default Step06;