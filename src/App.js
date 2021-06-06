import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [listTitle, newListTitle] = useState(['useState 활용', '두번째 게시글', '세번째 게시글']);
  let [like, changeLike] = useState(0);

  let addLikeCnt = () => {
    return changeLike(like+1);
  }

  let changeTheTitle = () => {
    let newArr = [...listTitle]; // 복사본을 하나 만들어야한다!!
    newArr[0] = '바뀐 useState 활용'
    newListTitle(newArr);
  }

  return (
    <div className="App">
      <div className="gray-nav">
        <div>React Basic</div>
      </div>
      <button className="button" onClick={changeTheTitle}>타이틀이 변경되는 버튼</button>
      <div className="list">
        <h3>{listTitle[0]} <span onClick={addLikeCnt}>👍</span> {like} </h3>
        <p>4월 9일</p>
        <hr />
      </div>
      <div className="list">
        <h3>{listTitle[1]}</h3>
        <p>5월 10일</p>
        <hr />
      </div>
      <div className="list">
        <h3>{listTitle[2]}</h3>
        <p>6월 10일</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
