import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "../pages/Home";
import Members from "../pages/Members";
import Events from "../pages/Events";
import Contact from "../pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
