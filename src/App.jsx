import { Route, Routes } from 'react-router-dom';
import Container from './components/container';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Container />}></Route>
    </Routes>
  )
}

export default App
