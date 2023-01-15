import React from "react";
import LoginForm from "../components/Login/LoginForm.js";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { Container } from "react-bootstrap";

function Login() {
	return (
		<>
			<Container>
				<Navigation />
				<LoginForm />
			</Container>
			<Footer />
		</>
	);
}

export default Login;
