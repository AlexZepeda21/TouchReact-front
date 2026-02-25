import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Header from "./layouts/header"; 
import Footer from "./layouts/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="p-4">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
