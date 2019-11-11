import React from 'react';
import { Switch,Route} from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage.component';


const HatsPage = () =>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
function App() {
  return (
    <div>
      <switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop/hats' component={HatsPage}/>

      </switch>
    </div>
  );
}

export default App;
