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
  let [ddabongs, setDdabongs] = useState([0, 0, 0])

  let [modal, setModal] = useState(false); // true.. UI의 상태를 보관 형식은 자유

  // map 함수 사용법
  // array 자료 갯수 만큼 함수안의 코드 실행 해줌 반복 실행
  // 파라미터를 넣으면 array에 넣었던 자료 iterate 방식으로..
  [1,2,3].map(function(a){
    console.log(a);
    return '1234' // return을 하면 array에 담아준다! // [1234, 1234, 1234]
  })
  // --> 좀 쉽게 반복문을 작성할 수 있다.

  let [title_idx, setTitle_idx] = useState(0); // 어떤 제목을 보여줄지



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
          
        }}>가나다 순 정렬</button>

      {/* 
      <div className='list'>
        <h4>{title[0]} <span onClick={ ()=>{ setLikes(likes + 1)} }>😊</span>{likes}</h4>
        <p4>2월 17일 발행</p4>
      </div>

      <div className='list'>
        <h4>{title[1]}</h4>
        <p4>2월 17일 발행</p4>
      </div>

      
      <div className='list'>
        <h4 onClick={ () => {
          setModal(!modal)
        }}>{title[2]}</h4>
        <p4>2월 17일 발행</p4>
      </div> 
      */}

      {/* { ... } 중괄호 안에서는 for 못쓰고 map 함수를 사용해야함 */}
      {/* 파라미터도 받을 수 있음! 두번째 파라미터 i는 반복문 돌 때 마다 0에서 1씩 증가하는 수 */}
      {
        title.map(function(a, i){
          return (
            <div className='list' key={i}>
            <h4 onClick={() => {setModal(!modal); setTitle_idx(i);}}>{a}
              <span onClick={() => {
                let copy = [...ddabongs];
                copy[i] = copy[i] + 1;
                setDdabongs(copy);
              }}>😁</span> {ddabongs[i]}
            </h4>
            <p4>2월 17일 발행</p4>
          </div>
          )
          // [안녕, 안녕, 안녕].. 근데 리액트에서는 array 안에 html 담아놔도 잘 보여줌
        })
      }
      {/* 글이 4개.. 몇개 있으면 하드코딩 X 
      title state보면 배열임 이걸 이용해서 하면됨 */}

      {/* <Modal></Modal>  */}
      {/* state가 true면 보여주세요~ {}에는 if못씀 ㅠ 삼항연산자 써야함 */}

      {
        modal == true ? <Modal  title={title} title_idx={title_idx} 
                                color={'yellow'} 글수정={setFirstTitle}/> : null
      }

      {/* 모달 UI를 계속 만들기 불편함 --> HTML 덩어리를 Component 문법으로 처리 가능 */}
      {/* 1. function 만들고 return()에 html 담기 */}
      
      {/* 동적 UI만드는 3Step 
      1. HTML CSS로 미리 디자인 완성
      2. UI의 현재 상태랄 State로 저장
      3. state에 따라 UI게 어떻게 보일지 작성*/}

    </div>
  );
}

// 1. 반복적인 html 축약할 때
// 2. 큰 페이지들
// 3. 자주 변경되는 것들
// --> 이럴 때 컴포넌트를 사용하면 좋다

// state에 있는 값들을 가져와야 하는데 변수 scope 때문에 바로 갖다 쓰지 못한다.
// props 문법을쓰면 된다
// 각각의 컴포넌트의 포함관계를 따져가며 state를 전송해 줄 수 있다. 
// 부모컴포넌트가 자식 컴포넌트에게는 가능
// 1. 부모 -> 자식 state 전송법
// 2. <자식 컴포넌트 새로운 작명={실제state이름}
// 3. 자식 컴포넌트 만드는 곳에서 props로 파라미터 추가(보통 props)
// 4. props.작명 으로 사용 (근데 보통 똑같이한다고..)
// 자식-> 부모 불가, 옆집 불가
// 구멍을 뚫어놔서 함수의 파라미터 처럼 가능 color 처럼..
// 그냥 color="yellow" 처럼 일반 문자도 전송 가능
function Modal(props){
  return(
    <div className='modal' style={{background : props.color}}> 
      <h4>{props.title[props.title_idx]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={props.글수정}>글수정</button>
    </div>
    // 하나의 Div 같이 하나만 가능 두개 불가

    // 굳이 div를 두개 하려면 다시 새로운 하나의 div로 감싸기
    // 의미 없는 div를 쓰기 귀찮으면 <></> 로 할 수 있다. fragnent
  );
}

function TestComponent(){
  return(
    <div>
      <h4> 안녕하세요 ... </h4>
      <span>Test...</span>
      <p>Test P tag</p>
    </div>
  )
}

export default App;
