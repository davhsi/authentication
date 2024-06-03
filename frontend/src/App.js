import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Cards from './Pages/Cards';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>    
        <Route exact path='/register' element={<Register/>}/>   
        <Route exact path='/' element={<Cards/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
