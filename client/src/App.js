import React from 'react';
import './App.css';
import { Redirect, Router, Link, navigate } from "@reach/router";

import axios from "axios";

import NewProduct from "./views/NewProduct";
import AllProducts from "./views/AllProducts";
import OneProduct from "./views/OneProduct";
import EditProduct from "./views/EditProduct";
import LogReg from "./views/LogReg";
import UserList from "./views/UserList";
import NavBar from "./views/NavBar";
import Cart from "./components/Cart";


function App() {
  const logout = () => {
    axios
      .post(
        "http://localhost:8000/api/logout",
        {},
        {
          // need to send the cookie in request so server can clear it
          withCredentials: true
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(console.log);

    navigate("/login");
  };

  return (
    <div className="App">
      <NavBar />
      <Cart></Cart>
      <br />
      <button onClick={logout}>Logout</button>
      <Link to="/all/products">All Products </Link>{" "}
      <Link to="/product/new">New Product </Link>
      <Link to="/users">Get Users List </Link>
      <Router>
        <Redirect from="/" to="/products" noThrow="true" />
        {/* <NotFound default /> */}
        <LogReg path="/login" />
        <UserList path="/users" />
        <NewProduct path="/product/new" />
        <AllProducts path="/all/products" />
        <OneProduct path="/product/:id" />
        <EditProduct path="/product/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
