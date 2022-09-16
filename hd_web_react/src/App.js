import "./App.css";
import { useState } from "react";
import Header from "./component/Header";
import MainVisual from "./component/MainVisual";
import MainContent from "./component/MainContent";
import Portfolio from "./component/Portfolio";
import Solution from "./component/Solution";
import Promotion from "./component/Promotion";

const App = () => {
  const [pstate, setPstate] = useState(false);

  const parentFunction = (pstate) => {
    setPstate(pstate);
  };
  return (
    <div className={`Wrap ${pstate ? "on" : ""}`}>
      <Header parentFunction={parentFunction} pstate={pstate} />
      <main>
        <MainVisual />
        <MainContent />
        <Portfolio />
        <Solution />
        <Promotion />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default App;

/*
img 경로
html 파일: %PUBLIC_URL%
JavaScript 파일: process.env.PUBLIC_URL
#index.html 파일에 작성하는 경우
<img src="%PUBLIC_URL%/이미지경로/이미지파일.jpg" />
%PUBLIC_URL% 라고 환경변수를 경로에 작성합니다.

#JavaScript 파일에 작성하는 경우
<img src={process.env.PUBLIC_URL + '/img/logo.png'} />
process.env.PUBLIC_URL라고 환경변수를 경로에 작성합니다.

#컴포넌트 쉽게 관리하기 
https://velog.io/@rimo09/React%EC%97%90%EC%84%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B2%BD%EB%A1%9C-%EA%B9%94%EB%81%94%ED%9E%88-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0
*/

/*
  자식에서 부모로 데이터를 전송하고 싶어서 해본 방법 / https://technicolour.tistory.com/56

  1. 부모에서 자식으로 데이터 전달하는 방법
→ props를 이용한다.

 

*props란, properties를 줄인 표현으로 컴포넌트 속성을 설정할 대 사용하는 요소이다.

부모 컴포넌트에서 설정할 수 있으며, 부모에서 자식으로만 데이터를 줄 수 있다.

(자식이 props를 통해 부모에게 데이터를 줄 수 없다는 뜻이다.)

 

 

Parent.js

 

import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
  const [number, setNumber] = useState(0);

  const onClick = () => {
    setNumber(number + 1);
  }

  //number가 props다.
  return (
    <div>
      <Child number={number}></Child>
      <button onClick={onClick}>+</button>
    </div>
  )
}

export default Parent;
 

 

Child.js

 

import React from 'react'

//number는 props다.
const Child = ({ number }) => {
  return (
    <div>
      <p>여기는 child입니다 : {number}</p>
    </div>
  )
}

export default Child;
 

 

 

2. 자식에서 부모로 데이터를 전송하는 방법
→ 함수를 이용한다.

 

자식은 props를 사용해서 부모에게 데이터를 건네줄 수 없다.

따라서 부모가 함수를 넣어 props로 자식에게 넘겨주면, 자식이 데이터를 파라미터로 넣어 호출하는 방식으로 동작한다.

 

즉, 부모가 props로 함수를 넣어주면 자식이 그 함수를 이용해 값을 건네주는 방식이다.

 

 

Parent.js

 

import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
  const [number, setNumber] = useState(0)

  const getData = (number) => {
    setNumber(number);
  }

  return (
    <div>
      <p>여기는 부모입니다 : {number}</p>
      <Child number={number} getData={getData}></Child>
    </div>
  )
}

export default Parent;
 

 

Child.js

 

import React from 'react'

const Child = ({ number, getData }) => {

  const onClick = () => {
    console.log(number);
    getData(number + 1);
  }

  return (
    <div>
      <button onClick={onClick}>+</button>
    </div>
  )
}

export default Child;
*/
