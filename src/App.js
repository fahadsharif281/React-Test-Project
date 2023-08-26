import { Route, Routes } from 'react-router-dom';
import './App.css';
import Make from './Components/Make';
import ListView from './Components/ListView/ListView';
import Code from './Components/Code/Code';
import Color from './Components/Color/Color';
import GeneratedText from './Components/GeneratedText';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ListView />} />
        <Route path='/code' element={<Code />} />
        <Route path='/color' element={<Color />} />
        <Route path='/make' element={<Make />} />
        <Route path='/text' element={<GeneratedText />} />
      </Routes>
    </>
  );
}

export default App;
