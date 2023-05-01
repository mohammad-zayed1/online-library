import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login-page/Login";
import "./App.css";
import Landing from "./components/landing-page/Landing";
import Register from "./components/sign-up-page/Register";
import RestPass from "./components/login-page/rest-password/RestPass";
import UserPage from "./components/user-page/UserPage";
import ShoppCart from "./components/shopping-cart-page/ShoppCart";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<ShoppCart />} />
          <Route path="/resetPassword" element={<RestPass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
