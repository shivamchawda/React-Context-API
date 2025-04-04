import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import CartPage from "./components/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Home/>
      <CartPage/> */}
      <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="/cart" Component={CartPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
