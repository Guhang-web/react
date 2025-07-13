import logo from './logo.svg';
import './App.css';
import Step01 from './step/step01';
import Step02 from './step/step02';
import Step03 from './step/step03';
import Step04 from './step/step04';
import Step05 from './step05';
import Step06 from './step/step06';
import Step07 from './step/step07';
import Step08 from './step/step08';
import Event01 from './event/event01';
import Event02 from './event/event02';
import Event03 from './event/event03';
import Event04 from './event/event04';
import Event05 from './event/event05';
import Event06 from './event/event06';

function App() {
  // APP는 부모
  return (
    <>
      {/* 컴포넌트 : 재사용가능한 코드조각(버튼, 텍스트, 이미지 등등....) */}
{/* 여러개 사용시 <div>여기 안에서 해야됨</div> */}
      {/* <Comp></Comp>
      <Comp></Comp> */}
      {/* <Step01></Step01> */}
      {/* 외부 컴포넌트 사용할시  위에 import로 연동 */}
    {/* <Step02></Step02> */}
    {/* <Step03></Step03> */}
    {/* <Step04 title='제목제목' content='게시판 내용!!!' name='게시판작성자1'></Step04> */}
    {/* 오브젝트로 넘어감 > title = 키값 , content = 벨류값 */}
    {/* <Step04 title='제목2' content='게시판 내용222' name='게시판작성자2'></Step04> */}
    {/* <Step05></Step05> */}
    {/* <Step06></Step06> */}
    {/* <Step07></Step07> */}
    {/* <Step08></Step08> */}
    {/* <Event01></Event01> */}
    {/* <Event02></Event02>  여기 보완해야됨*/}
    {/* <Event03></Event03> */}
    {/* <Event04></Event04> */}
    {/* <Event05></Event05> */}
    <Event06></Event06>
    </>
  );
}

//  같은 파일에서 컴포넌트 생성
//  긴 HTML을 한 단어로 깔끔하게 치환할 수 있는 문법,
//  작명시 영어 대문자로 시작!!!!!
// 함수 표현식, 함수선언식 둘 다 가능
function Comp() {
  return <div>컴포넌트</div>
}

export default App;
