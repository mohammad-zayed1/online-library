import {BrowserRouter , Routes , Route }from 'react-router-dom'
import Login from "./components/login-page/Login";
import "./App.css";
import Landing from './components/landing-page/Landing';
import Register from './components/sign-up-page/Register';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
      </BrowserRouter>
     
    
    </div>
  );
}

export default App;
