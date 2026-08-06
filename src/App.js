import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import { books } from "./data";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  function addItemToCart(book) {
    setCart((oldCart) => {
      const dupeItem = oldCart.find((item) => item.id === book.id);
      return dupeItem
        ? oldCart.map((item) =>
            item.id === dupeItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...oldCart, { ...book, quantity: 1 }];
    });
  }

  function updateCart(item, newQuantity) {
    const quantity = Number(newQuantity);
    if (!quantity) {
      return removeItem(item);
    }
    setCart((oldCart) =>
      oldCart.map((oldItem) => {
        if (oldItem.id === item.id) {
          return { ...oldItem, quantity };
        } else {
          return oldItem;
        }
      })
    );
  }

  function removeItem(item) {
    setCart((oldCart) => oldCart.filter((cartItem) => cartItem.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity;
    });
    return counter;
  }

  function calcPrices() {
    let total = 0;
    cart.forEach((item) => {
      total += (item.salePrice || item.originalPrice) * item.quantity;
    });
    return {
      subtotal: total * 0.9,
      tax: total * 0.1,
      total,
    };
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" element={<Home books={books} />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={<BookInfo books={books} addItemToCart={addItemToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateCart={updateCart}
                removeItem={removeItem}
                totals={calcPrices()}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
