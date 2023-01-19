import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Product/Product';
import OrderReview from './components/OrderReview/OrderReview';
import Invantory from './components/Invantory/Invantory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <Routes>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/Orders' element={<OrderReview/>}/>
        <Route path='/inventory' element={<Invantory/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
