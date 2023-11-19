import DayList from './DayList'
import Day from './Day'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
function App() {
    return (
        <BrowserRouter>
            <div>
                <Header></Header>
                <Routes>
                    <Route exact path='/' element={<DayList/>}/>
                    <Route path='/day/:day' element={<Day/>}/>
                </Routes>
            </div>
        </BrowserRouter>
        
    );
  }
  
  export default App;