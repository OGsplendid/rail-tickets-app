import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { Train } from './pages/Train/Train';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Train />} />
      {/* <Route path='/' element={<MainPage />} />
      <Route path='/movies/*' element={<Movies />} />
      <Route path='/search/:id' element={<MovieItem />} />
      <Route path='/favorite' element={<Favorite />} />
      <Route path='*' element={<BadRequest />} /> */}
    </Routes>
  )
}

export default App
