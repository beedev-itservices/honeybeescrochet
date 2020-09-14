import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Link, Switch } from "react-router-dom";
import data from "./data";
import ItemsList from "./components/ItemsList";
import Item from "./components/Item";
import About from "./components/About";
import Contact from "./components/Contact";
import ShoppingCart from "./components/ShoppingCart";

export default function App() {
  // var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  //   (function(){
  //     var s1=document.createElement("script"),
  //       s0=document.getElementsByTagName("script")[0];
  //       s1.async=true;
  //       s1.src='https://embed.tawk.to/5c04089140105007f37aa009/default';
  //       s1.charset='UTF-8';
  //       s1.setAttribute('crossorigin','*');
  //       s0.parentNode.insertBefore(s1,s0);
  //     })();
  const [products, setProducts] = useState(data);
  return (
    <div className="App">
      <nav>
        <div className="main-nav-header">
          <img src="https://images.craftsnherbs.com/crochet/logo.png" alt="" />
          <h1 className="store-header">HoneyBee's Crochet</h1>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/the-shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Shopping Cart</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/the-shop/:itemID">
          <Item items={products} />
        </Route>
        <Route path="/the-shop">
          <ItemsList items={products} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/cart">
          <ShoppingCart />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
      <div className="footer">
        <div className="webmaster">
          <a href="mailto:webmaster@honeybeescrochet.com">Webmaster</a>
        </div>
        <div className="madeby">
        <img src="https://images.craftsnherbs.com/beelogo.jpg" alt="" />
        <h4>&copy; 2020 by BeeDev IT Services</h4>
        </div>
      </div>
    </div>
  );
}
