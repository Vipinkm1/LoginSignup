
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Components/Authentication/SignUp/Signup';
import Login from './Components/Authentication/Login/Login';
import Home from './Components/Home/Home';
import { useState } from 'react';
function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
   
      <BrowserRouter>
   
      <Routes>
        <Route path= '/' element={<Signup />}/>
        <Route path= '/login' element={<Login  setUser={setUser}/>}/>
        <Route path='home' element={<Home user={user}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
