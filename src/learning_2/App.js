import DayList from './DayList'
import Day from './Day'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/'>
                        <DayList></DayList>
                    </Route>
                    <Route>
                        <Day></Day>
                    </Route>
                    
                </Switch>
            </div>
        </BrowserRouter>
        
    );
  }
  
  export default App;