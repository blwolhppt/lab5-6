import './App.css';
import {HashRouter as Router, Route, Link, Routes} from "react-router-dom";
import MainPage from "./MainPage";
import ProductPage from "./productPage";
import CartPage from "./Cart"
import {CartProvider} from "./CartContext";


function App() {
    return (
        <>
            <CartProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/product/:productId" element={<ProductPage />} />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </Router>
            </CartProvider>
        </>
    );
}

export default App;