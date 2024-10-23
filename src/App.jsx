import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Register from "./pages/Register";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
