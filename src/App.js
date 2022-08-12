import "./App.css";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Women from "./pages/women";
import Men from "./pages/mens";
import SmartGear from "./pages/smartgears";
import Accessories from "./pages/accessories";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/SmartGear" element={<SmartGear />} />
          <Route path="/Accessories" element={<Accessories />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
