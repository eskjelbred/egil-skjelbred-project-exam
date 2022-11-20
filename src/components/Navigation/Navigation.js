import React, { useState, useEffect } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import axios from "axios";

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
    console.log(pages);

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
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="m-auto my-2 my-lg-0">
                        <Nav.Link href="/" className="text-white">
                            Home
                        </Nav.Link>
                        <Nav.Link href="/booking" className="text-white">
                            Booking
                        </Nav.Link>
                        <Nav.Link href="/about" className="text-white">
                            About
                        </Nav.Link>
                        <Nav.Link href="/contact" className="text-white">
                            Contact
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-light text-white">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
