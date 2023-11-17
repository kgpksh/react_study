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

function ShowText(props) {
  const [element, elementController] = useState(['aaa', 'bbb', 'ccc']);

  function arrayChanger() {
    let copy =[...element];
    copy[0] = 'ddddd';
    elementController(copy[0]);
    new Promise((res, rej) => {
      setTimeout(() => {
        res();
        
      }, 1500)
    }).then(function() {
      elementController(props.variable);
    });
  };
  return (
    <div>
      <h1 onClick={ arrayChanger }>
        문자 변경
      </h1>
      <h1>
        { element }
      </h1>
    </div>
  )
}

function Posts(props) {
  let posts = [];
  for(let post of props.posts) {
    posts.push(<li>
      <div>
        {post[0]}
      </div>
      <div>
        {post[1]}
      </div>
    </li>)
  }
  

  return (
    <ul>
      {posts}
    </ul>
  )
}
function App() {
  const posts = [['title1', 'content1'], ['title2', 'content2'], ['title3', 'content3']]
  return (
    <div>
      <Post></Post>
      <ShowNum></ShowNum>
      <ShowText variable = '최종변경'></ShowText>
      <Posts posts = {posts}></Posts>
    </div>
  );
}

export default App;
