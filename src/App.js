import React, { useState } from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import MainProvider from "./components/Store/MainContext"
function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false)
  const cartVisibilityHandler = () => {
    if (cartIsVisible === false) {
      setCartIsVisible(true)
    } else { setCartIsVisible(false) }
  }
  return (
    <>
      {cartIsVisible && <Cart onClose={cartVisibilityHandler} />}
      <Header onClick={cartVisibilityHandler} />
      <Meals />
    </>
  );
}
export default App;
