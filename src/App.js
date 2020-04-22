import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Link, Switch } from "react-router-dom";
import data from "./data";
import ItemsList from "./components/ItemsList";
import Item from "./components/Item";
import About from "./components/About";
import Contact from "./components/Contact";
import Form from "./components/Form";

export default function App() {
  const [products, setProducts] = useState(data);
  return (
    <div className="App">
      <nav>
        <div className="main-nav-header">
          <img src="http://honeybeescrochet.com/images/logo.png" alt="" />
          <h1 className="store-header">HoneyBee's Crochet</h1>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/the-shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/the-form">Order Form</Link>
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
        <Route path="/the-form">
          <Form />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
      <div className="footer">
        <h4>&copy; 2020 by BeeDev IT Services</h4>
      </div>
    </div>
  );
}
