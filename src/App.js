import './App.css';

import { lazy, Suspense } from 'react';

import { Route, Link } from 'react-router-dom';
// import Calculator from './pages/calculator.component';
// import Tasklist from './pages/tasklist.component';
// import Library from './pages/library/library.component';
// import Users from './pages/users/users.component';
import ErrorHandler from './components/errors/error-handler.component';

const Calculator = lazy(() => import('./pages/calculator.component'));
const Tasklist = lazy(() => import('./pages/tasklist.component'));
const Library = lazy(() => import('./pages/library/library.component'));
const Users = lazy(() => import('./pages/users/users.component'));

function App() {
  return (
    <div className="app">
      <h2>Welcome to my utility app</h2>
      <div className='menu'>
        <Link to='/calc'>Calculator app</Link> | <Link to='/todos'>Task list app</Link> | <Link to='/library'>Library management app</Link> | <Link to='/users'>Users</Link>
      </div>
      <ErrorHandler>
        <Suspense fallback={<h2>Loading route.... Please wait</h2>}>
          <Route path='/calc' component={Calculator}/>
          <Route path='/todos' component={Tasklist}/>
          <Route path='/library' component={Library}/>
          <Route path='/users' component={Users}/>
        </Suspense>
      </ErrorHandler>
      <footer>
        All rights reserved 2021
      </footer>
    </div>
  );
}

export default App;
