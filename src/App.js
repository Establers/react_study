/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // { .. } 데이터 바인딩
  let post = '강남 우동 맛집'; 
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']); // 자료를 잠깐 보관하는 방법
  // a : 자유롭게 작명 --> 보관했던 자료가 나옴
  // b : 자유롭게 작명 --> state 변경을 도와주는 함수
  // JS Destructuring -> let num = [1, 2]; let a = num[0] 하거나 num[1] 을 뽑을 수 있는데
  // let [a, c] = [1, 2]; 1대1 매칭해주는 것을 desturucturing
  // 굳이 state 써야하는 이유
  // 일반 변수는 갑자기 변경되면 html에 자동으로 반영 안됨
  let [logo, setLogo] = useState('ReactBlog');
  // 굳이 로고같이 변경할 일 없는거 굳이 State 로 할 필요 없음
  // 그냥 변수가 나음
  
  let [likes, setLikes] = useState(0);



  function setFirstTitle(){
    // title[0] = '여자 코트 추천';
    // setTitle(title);
    // 원본을 수정하는 것 보단 원본을 복사해서 수정하는 게 나음

    let copy = title;
    copy[0] = '여자 코트 추천';
    // setTitle(title); // 화면 바뀌지 않음
    // 기존 state랑 신규 stater가 같은경우(==) 변경 안해줌.
    setTitle([...copy]);
    // ... : unpacking 하고 다시 array로 만들어 주는 것
    // 즉 새로운 state 처럼 되는 것

    // 혹은
    // let copy1 = [...title];
    // setTitle(copy) 해도 됨
  }

  // array/object 특징이
  let arr = [1,2,3];
  // arr 의 경우 1, 2, 3이 어딨는지 나타내주는 포인터만 가지고 있음
  // 그래서 변수 값만 바꿀 경우 포인터는 그대로니까 state가 변경되지 않았다고 판단해
  // useState 안댐
  // copy를 해도 화살표가 복사라 바뀌지 않음.
  // 즉 array, object는 reference data type 이라서 그럼


  // onclick 같은 곳에는 함수가 들어가야함
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color :'red', fontSize:'16px'} }>{logo}</h4>
      </div>
        <button onClick={setFirstTitle}>글 변경 버튼</button>
        <button onClick={()=>{
          let copy = [...title];
          copy.sort();
          setTitle(copy);
          console.log(title);
        }}>가나다 순 정렬</button>
      <div className='list'>
        <h4>{title[0]} <span onClick={ ()=>{ setLikes(likes + 1)} }>😊</span>{likes}</h4>
        <p4>2월 17일 발행</p4>
      </div>

      <div className='list'>
        <h4>{title[1]}</h4>
        <p4>2월 17일 발행</p4>
      </div>

      
      <div className='list'>
        <h4>{title[2]}</h4>
        <p4>2월 17일 발행</p4>
      </div>
    </div>
  );

}

export default App;
