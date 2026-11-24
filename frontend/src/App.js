// ============================================
// App.js — Main Application Component
// ============================================
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Pages (to be implemented)
// import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import ProductsPage from './pages/ProductsPage';
// import ProductDetailPage from './pages/ProductDetailPage';
// import CartPage from './pages/CartPage';
// import CheckoutPage from './pages/CheckoutPage';
// import OrdersPage from './pages/OrdersPage';
// import AdminDashboard from './pages/AdminDashboard';
// import NotFoundPage from './pages/NotFoundPage';

// Components
// import ProtectedRoute from './components/common/ProtectedRoute';
// import AdminRoute from './components/common/AdminRoute';
// import Navbar from './components/common/Navbar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          {/* <Navbar /> */}
          <main>
            <Routes>
              {/* Public Routes */}
              {/* <Route path="/" element={<HomePage />} /> */}
              {/* <Route path="/login" element={<LoginPage />} /> */}
              {/* <Route path="/register" element={<RegisterPage />} /> */}
              {/* <Route path="/products" element={<ProductsPage />} /> */}
              {/* <Route path="/products/:id" element={<ProductDetailPage />} /> */}

              {/* Protected Routes (Customer) */}
              {/* <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} /> */}
              {/* <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} /> */}
              {/* <Route path="/orders" element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} /> */}

              {/* Admin Routes */}
              {/* <Route path="/admin/*" element={<AdminRoute><AdminDashboard /></AdminRoute>} /> */}

              {/* 404 */}
              {/* <Route path="*" element={<NotFoundPage />} /> */}

              {/* Temporary placeholder */}
              <Route path="/" element={<h1>SecureShop — Coming Soon</h1>} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
