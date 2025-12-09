import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import './App.css';
import NavBarComponent from './components/NavBarComponent';
import Search from './pages/Search';
function App() {
  return (
    <div className="App">
    <NavBarComponent/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/search" element={<Search />}/>
      </Routes>
    </div>
  );
}

export default App;
