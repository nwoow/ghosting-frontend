import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Checkout from "./Pages/Checkout.js";
import Login from "./Pages/Login.js";
// profile section
import Profile from "./Pages/Profile/Profile.js";
import Purchase from "./Pages/Profile/Purchase.js";
import Help from "./Pages/Profile/Help.js";
// import Subcat from "./Pages/Subcategory.js";
import Thankyou from "./Pages/Thankyou.js";
import ProductDetail from "./Components/ProductDetail.js";
import Header from "./Components/header.js";
import Footer from "./Components/Footer.js";
import Subcategory from '../src/Pages/Subcategory.js'
import CardCheckoutPage from "./Components/CardCheckoutPage.js";
import TermsConditions from "./Components/TermsConditions.js";
import PrivacyPolice from "./Components/PrivacyPolice.js";
import RefundPolicy from "./Components/RefundPolicy.js";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mypurchase" element={<Purchase />} />
        <Route path="/help" element={<Help />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/subcategory/:slug" element={<Subcategory />} />
        <Route path="/cardcheckoutpage" element={<CardCheckoutPage />} />
        <Route path="/terms&conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolice />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
