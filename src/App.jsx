import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import ServicesTarget from "./components/ServicesTarget";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Employment from "./pages/Employment";

function App() {
  return (
    <BrowserRouter>
      <div className="p-4">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/servicest" element={<ServicesTarget />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
