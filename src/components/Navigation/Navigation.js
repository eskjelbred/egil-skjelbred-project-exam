import React, { useState, useEffect } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import axios from "axios";
import SearchFilter from "../SearchFilter/SearchFilter";
import { getToken, removeToken } from "../../constants/settings";

function Navigation() {
	const [pages, setPages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState();

	useEffect(() => {
		axios
			.get("http://92.220.233.201/wp-json/wp/v2/pages")
			.then((response) => {
				setPages(response.data);
			})
			.catch((err) => {
				setError(true);
				setErrorMsg(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	const logout = () => {
		removeToken();
		window.location.replace("/");
	};

	return loading ? (
		<p>Loading pages...</p>
	) : error ? (
		<p>{errorMsg}</p>
	) : (
		<Navbar bg="secondary" expand="lg">
			<Container>
				<Navbar.Brand href="/" className="text-white">
					HOLIDAZE
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll" className="justify-content-end">
					<Nav className=" my-2 my-lg-0">
						<Nav.Link href="/" className="text-white">
							Home
						</Nav.Link>

						<Nav.Link href="/contact" className="text-white">
							Contact
						</Nav.Link>
						{getToken() === null ? (
							<Nav.Link href="/login" className="text-white me-3">
								Login
							</Nav.Link>
						) : (
							<>
								<Nav.Link href="/admin" className="text-white me-3">
									Admin
								</Nav.Link>
								<Nav.Link className="text-white me-3" onClick={logout}>
									Logout
								</Nav.Link>
							</>
						)}

						<Form className="d-flex">
							<SearchFilter />
						</Form>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
