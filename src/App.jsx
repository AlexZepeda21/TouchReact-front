import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Navbar from "./layouts/header";

function App() {
  return (
    <BrowserRouter>
      <div className="p-4">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
