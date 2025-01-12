import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header.jsx'
import Articles from './pages/Articles/Articles.jsx';
import Register from './pages/Register/Register.jsx';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<h1>Homepage</h1>} />
        <Route path='/articles' element=<Articles /> />
        <Route path='/register' element=<Register /> />
      </Routes>
    </div>
  );
}

export default App;
