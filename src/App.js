import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/homepage' element={<HomePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
