import React, { useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { Container } from "react-bootstrap";
import PostList from "../components/Posts/PostList";

function Home() {
	return (
		<>
			<Container>
				<Navigation />
				<div className="main-content">
					<Hero />
					<PostList showPosts={3} />
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Home;
