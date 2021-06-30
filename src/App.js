import './App.css';

import { Route, Link } from 'react-router-dom';
import Calculator from './pages/calculator.component';
import Tasklist from './pages/tasklist.component';
import Library from './pages/library.component';

function App() {
  return (
    <div className="app">
      <h2>Welcome to my utility app</h2>
      <div className='menu'>
        <Link to='/calc'>Calculator app</Link> | <Link to='/todos'>Task list app</Link> | <Link to='/library'>Library management app</Link>
      </div>
      <Route path='/calc' component={Calculator}/>
      <Route path='/todos' component={Tasklist}/>
      <Route path='/library' component={Library}/>
      <footer>
        All rights reserved 2021
      </footer>
    </div>
  );
}

export default App;
