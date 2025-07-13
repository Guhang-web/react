0. node,js 설치가 안되면 npm이 안됨
1. 폴더 생성은 무조건 영문(소문자)으로 시작 생성!
- 상위폴더도 한글이 있으면 안됨!
2. cmd = VScode의 TERMINAL (powershell) 렉이 가끔 걸림
3. npx create-react-app@latest ./  << 터미널 시작 명령어
4. 터미널에 npm start 하면 리엑트 화면 나옴
5. 편집은  src 폴더 > App.js 에서 편집
6. 리엑트 버전 변경 방법 > 터미널에서 -> npm i react@18 react-dom@18
(18버전으로 변경) / 19버전은 최신
7. npm start한 터미널 놔두고 새로운 터미널 추가하여 그 터미널에서 조정하면됨. 
8. ES7+ React/Redux/React-Native snippets (확장프로그램) >> 리엑트 자동완성
9. 자동완성 rface 하고 엔터

## node JS
- 브라우저 JS(자바스크립트)를 실행 프로그램
javascript는 브라우저에서만 동작했지만,
Node.js 덕분에 브라우저 밖에서도 javascript를 사용

* 브라우저 - html,css, js를 읽어주는 프로그램
---

## npm
npm : Node Package Manager
javascript 프로젝트에서 필요한 패키지(라이브러리, 도구)를 설치하고 관리하는데 사용하는 명령어

npx : 일회성 실행 - 설치하지 않고 패키지를 바로 실행할 때 사용

---

## 기본세팅

npx create-react-app@latest ./
(폴더이름은 영문자소문자 + 숫자로만 구성)
(상위폴더도 마찬가지)
(react라는 폴더명 금지)
(영문자소문자로 시작)

## 폴더/파일 구성

1. node_modules
- js들이 있는곳

2. public
- 이미지를 넣는곳

3. src
- 코드를 넣는곳

4. gitignore
- git hub에 쓸모없는것도 같이 올라가지 않게 하는것.

5. package.json
- js 설치에 대한 로그 (자동생성)

## 버전변경 (터미널에서) > 확인은 package.json
npm i react@18 react-dom@18
(18버전으로 변경)

## App.js작성방법
return (  html 작성공간 );
function App() {
  return (
    <Comp></Comp>
  );
}  << App()  메인공간
function Comp() {
  return <div>컴포넌트</div>
}  >> 컴포넌 : 재사용가능한 코드조각

## tailwindCSS
> CSS 실시간 쉽게 하는법
1. https://v3.tailwindcss.com/
버전 3 사용!!!
2. DOCS로 이동
3. Tailwind CLI
터미널에다가 
>  npm i -D tailwindcss@3
>  npx tailwindcss init
5. tailwind.config.js에 "./src/**/*.{html,js}" 붙이기
6. index.css에 붙이기
@tailwind base;
@tailwind components;
@tailwind utilities