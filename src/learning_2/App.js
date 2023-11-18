import DayList from './DayList'
import Day from './Day'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path='/' element={<DayList/>}/>
                    <Route path='/day' element={<Day/>}/>
                </Routes>
            </div>
        </BrowserRouter>
        
    );
  }
  
  export default App;