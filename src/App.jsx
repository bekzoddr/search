import Home from "./pages/home/Home";
import SingleRoute from "./pages/singleRoute/Single";
import Wishlist from "./pages/wishlist/Wishlist";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<SingleRoute />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
