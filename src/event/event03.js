import React, { useState } from 'react'


// input
const Event03 = () => {
const [key, setKey] = useState('');
const handleKeyDown = (e) => {
  // console.log(e.key);
  // setKey(e.key);
  setKey(e.target.value);
}

  return (
    <>
  <input onKeyDown={handleKeyDown} type='text' placeholder='키 눌러보세요'/>
    <p>{key}</p>

    
    
    </>
  )
}

export default Event03