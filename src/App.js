import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Register from './Product/Register';
import Update from './Product/Update';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/homepage' element={<HomePage/>}></Route>
        <Route path='/RegisterProduct' element={<Register/>}></Route>
        <Route path='/UpdateProduct:id' element={<Update/>}></Route>


      </Routes>
    </div>
  );
}

export default App;
