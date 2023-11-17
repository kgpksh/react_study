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
function App() {
  return (
    <div>
      <Post></Post>
    </div>
  );
}

export default App;
