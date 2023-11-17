import { useState } from 'react';
import './App.css';

let title = "글제목임";
let content = "글내용임"


function Post() {
  let [count, countController] = useState(1);
  function incrementNum() {
    countController(++count);
  }

  return (
    <div>
      <div className='Post-decorator'>
        { title }
      </div>
      <div className='Post-decorator'>
        { content }
      </div>

      <div>
        <h1 onClick={ incrementNum }>
          숫자 증가
        </h1>
        <h1>
          { count }
        </h1>
      </div>
    </div>
  );
}
function App() {
  return (
    <div>
      <Post></Post>
    </div>
  );
}

export default App;
