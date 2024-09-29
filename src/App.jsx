import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from "../src/pages/home"
import { MorePizzas } from './pages/more-pizzas';
import { Info } from './pages/info';

function App() {
  
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-pizzas" element={<MorePizzas />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App