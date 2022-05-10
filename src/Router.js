import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";
import Auth from "./pages/Auth/Auth";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProductList from "./pages/ProductList/ProductList";
import LogIn from "./pages/User/LogIn/LogIn";
import SignUp from "./pages/User/SignUp/SignUp";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/kakaoauth" element={<Auth />} />
        <Route path="/" element={<Main />} />
        <Route path="/products:id" element={<ProductList />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
