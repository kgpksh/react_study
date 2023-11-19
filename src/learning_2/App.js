import DayList from './DayList'
import Day from './Day'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import { CreateWord } from './CreateWord';
import { CreateDay } from './CreateDay';
function App() {
    return (
        <BrowserRouter>
            <div>
                <Header></Header>
                <Routes>
                    <Route exact path='/' element={<DayList/>}/>
                    <Route path='/day/:day' element={<Day/>}/>
                    <Route path='/create_word' element = {<CreateWord/>}></Route>
                    <Route path='/create_day' element = {<CreateDay/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
        
    );
  }
  
  export default App;