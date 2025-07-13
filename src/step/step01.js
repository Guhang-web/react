 import React from "react";

 const Step01 = () => {
    const title = 'REACT';
    // return 외부에는 자바스크립트 사용하듯 함
    //  JSX : javascript안에서 HTML을 작성할 수 있도록 해주는 리액트문법(return 안에서 JSX문법)
    //  하나의 부모 요소로 감싸서 return
    return (
        <>
            {/* 1. class 대신 className 사용 */}
            <div className='container'> class 대신 className 사용</div>
            {/* 2. 하나로만 되어있는 태크는 꼭 닫아줘야함 */}
            <img></img>
            <input></input>
            <input />
            {/* 위에 닫는건 같은거 */}
            {/* 3. {} 중괄호 안에서는 자바스크립트 문법 사용가능 */}
            <h1>{1+1}</h1>
            <h1> {title} </h1> {/*여기 주석도 자바스크립트 코드*/}
        </>
    )
 }

 export default Step01;