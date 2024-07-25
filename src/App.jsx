import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Weather1 from './components/Weather1'
import Weather from './components/Weather'
import Navebar from './components/Navebar';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navebar />
        <Routes>
          <Route path='/Weather' element={<Weather/>} />
          <Route path='/Weather1' element={<Weather1/>} />
        </Routes>  
      </BrowserRouter>  
    </>
  )
}

export default App
