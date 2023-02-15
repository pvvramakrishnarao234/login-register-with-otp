import './App.css';
import Landing from './Components/landing';
import {  
  BrowserRouter,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom';  
import Login from './Components/login';
import Register from './Components/register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}> </Route>
          <Route path='/login' element={<Login/>}> </Route>
          <Route path='/register' element={<Register/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
