import { useState } from 'react';
import './App.css';

let title = "글제목임";
let content = "글내용임"


function Post() {
  return (
    <div>
      <div className='Post-decorator'>
        { title }
      </div>
      <div className='Post-decorator'>
        { content }
      </div>
    </div>
  );
}

function ShowNum() {
  let [count, countController] = useState(1);

  function incrementNum() {
    countController(++count);
  }

  return (
    <div>
      <h1 onClick={ incrementNum }>
        숫자 증가
      </h1>
      <h1>
        { count }
      </h1>
    </div>
  )
}

function ShowText() {
  const [element, elementController] = useState(['aaa', 'bbb', 'ccc']);

  function arrayChanger() {
    let copy =[...element];
    copy[0] = 'ddddd';
    elementController(copy);
  }

  return (
    <div>
      <h1 onClick={ arrayChanger }>
        문자 변경
      </h1>
      <h1>
        { element[0] }
      </h1>
    </div>
  )
}
function App() {
  return (
    <div>
      <Post></Post>
      <ShowNum></ShowNum>
      <ShowText></ShowText>
    </div>
  );
}

export default App;
