import "./css/style.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import Booking from "./Views/Booking";
import Contact from "./Views/Contact";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
