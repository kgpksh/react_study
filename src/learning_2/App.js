import dummyData from '../data.json'
function App() {
    return (
      <ul>
        {dummyData.words.map(word => (
            <li>
                Book : {word.kor}
            </li>
        ))}
      </ul>
    );
  }
  
  export default App;