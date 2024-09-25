import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from "../src/pages/home"
import { MorePizzas } from './pages/more-pizzas';

function App() {
  
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-pizzas" element={<MorePizzas />} />
      </Routes>
    </Router>
  );
}

export default App