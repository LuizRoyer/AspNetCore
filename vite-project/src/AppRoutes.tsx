import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import Cart from "./pages/Cart";
import Product from "./pages/Product";


export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </Router>
    )
}