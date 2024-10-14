import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Home } from "../src/pages/home"
import { MorePizzas } from './pages/more-pizzas';
import { Info } from './pages/info';
import "./media/media.css"

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/more-pizzas" element={<MorePizzas />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App