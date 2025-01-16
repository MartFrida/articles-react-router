import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header.jsx'
import Register from './pages/Register/Register.jsx';
import ArticlesList from './pages/Articles/ArticlesList.jsx';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<h1>Homepage</h1>} />
        <Route path='/articles' element=<ArticlesList /> />
        <Route path='/register' element=<Register /> />
      </Routes>
    </div>
  );
}

export default App;
