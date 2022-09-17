import './App.css';
import HomePage from "./components/pages/homepage/homepage.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from './components/pages/shop/shop.component';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path='/shop' element={<ShopPage/>} />
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
