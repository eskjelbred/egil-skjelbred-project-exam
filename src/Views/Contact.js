import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import AddMessage from "../components/Contact/AddMessage";
import ContactInfo from "../components/Contact/ContactInfo";
import { Container } from "react-bootstrap";

function Contact() {
	return (
		<>
			<Container>
				<Navigation />
				<div className="main-content ">
					<Container>
						<h2 className="text-center py-3">Contact us</h2>
						<p className="text-center">Welcome! If you have any questions, please feel free to fill out the form.</p>
						<div className="d-flex justify-content-center flex-column flex-md-row-reverse">
							<ContactInfo />
							<AddMessage />
						</div>
					</Container>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Contact;
