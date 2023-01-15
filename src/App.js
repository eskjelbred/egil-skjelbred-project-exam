import "./css/style.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Contact from "./Views/Contact";
import Single from "./Views/Single";
import Login from "./Views/Login";
import Admin from "./Views/Admin";
import Results from "./Views/Results";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/login" element={<Login />} />
				<Route path="/booking/:id" element={<Single />} />
				<Route path="/results/:query" element={<Results />} />
			</Routes>
		</>
	);
}

export default App;
