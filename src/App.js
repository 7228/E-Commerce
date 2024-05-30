import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Pages/Home';
import { AppContext } from './Context/AppContext';
import { useEffect, useState } from 'react';
import { Footer } from './Components/Footer/Footer';
import { ItemDetail } from './Components/ItemDetail/ItemDetail';
import { Category } from "./Pages/Category/Category";
import { Login } from './Pages/Login/Login';
import { Register } from './Pages/Register/Register';
import { Cart } from './Components/Cart/Cart';


function App() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
  },[])

  console.log(products);

  return (
    <div className="App">
      <AppContext.Provider value={{products}}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/men' element={<Category type="men's clothing"/>}></Route>
            <Route path='/women' element={<Category type="women's clothing" />}></Route>
            <Route path='/jewelery' element={<Category type="jewelery"/>}></Route>
            <Route path='/electronics' element={<Category type="electronics"/>}></Route>
            <Route path='/item' element={<ItemDetail />}>
              <Route path=':id' element={<ItemDetail />}></Route>
            </Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
