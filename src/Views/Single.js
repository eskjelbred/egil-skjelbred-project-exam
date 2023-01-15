import React from "react";
import { Container } from "react-bootstrap";
import PostSingular from "../components/Posts/PostSingular";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

function Single() {
	return (
		<>
			<Container>
				<Navigation />
				<div className="main-content">
					<PostSingular />
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Single;
