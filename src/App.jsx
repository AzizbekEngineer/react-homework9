import React from "react";
import { Fragment } from "react";
import Header from "./components/layout/header/Header";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/register" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
