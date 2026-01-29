
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import About from './pages/About';
import Contact from './pages/Contact';
import Stories from './pages/Stories';
import Compare from './pages/Compare';
import SizeGuide from './pages/SizeGuide';
import AIChat from './components/AIChat';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { CompareProvider } from './context/CompareContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <CompareProvider>
          <Router>
            <div className="min-h-screen flex flex-col bg-white overflow-x-hidden relative">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/stories" element={<Stories />} />
                  <Route path="/compare" element={<Compare />} />
                  <Route path="/size-guide" element={<SizeGuide />} />
                </Routes>
              </main>
              <Footer />
              <AIChat />
            </div>
          </Router>
        </CompareProvider>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
