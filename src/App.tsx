import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { Train } from './pages/Train/Train';
import { Seats } from './pages/Seats/Seats';
import { Passengers } from './pages/Passengers/Passengers';
import { Payment } from './pages/Payment/Payment';
import { Confirmation } from './pages/Confirmation/Confirmation';
import { Final } from './pages/Final/Final';

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/train' element={<Train />} />
      <Route path='/seats' element={<Seats />} />
      <Route path='/passengers' element={<Passengers/>} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/confirmation' element={<Confirmation />} />
      <Route path='/final' element={<Final />} />
    </Routes>
  )
}

export default App
