import React from "react";
import { Button } from "react-bootstrap";

function Hero() {
	return (
		<main>
			<div className="d-flex flex-column align-items-center">
				<div className="d-flex flex-column justify-content-center align-items-center text-white h-100">
					<h1 className="text-center">Enjoy your holiday stay in the heart of Norwegian fjords</h1>
					<p className="mt-3 text-center w-75">
						As a European city of culture, world heritage city and UNESCO food city, Bergen offers experiences and
						culture at a high level.
					</p>
				</div>
			</div>
		</main>
	);
}

export default Hero;
