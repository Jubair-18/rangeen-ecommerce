
import { Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import Product from './screens/Product';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>

  );
}

export default App;
