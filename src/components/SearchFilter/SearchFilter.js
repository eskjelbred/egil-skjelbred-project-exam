import axios from "axios";
import React, { useState } from "react";
import { Form, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchFilter() {
	const [isLoading, setIsLoading] = useState(false);
	const [searchResults, setSearchResults] = useState([]);
	const [showResults, setShowResults] = useState(false);

	const handleSearch = (query) => {
		setIsLoading(true);
		axios.get("http://92.220.233.201/wp-json/wp/v2/search?search=" + query.target.value).then((response) => {
			setIsLoading(false);
			setShowResults(true);
			setSearchResults(response.data);
		});
	};

	const handleSearchBtnClick = (query) => {
		if (query.target.form[0].value !== "") {
			window.location.replace("/results/" + query.target.form[0].value);
		}
	};

	const handleSearchClick = (query) => {
		window.location.replace("/booking/" + query.target.id);
	};

	const filteredSearch = searchResults.filter((result) => result.id !== 206);

	return (
		<>
			<Form.Control type="search" placeholder="Search" onChange={handleSearch} className="me-2" aria-label="Search" />

			<Button
				variant="outline-light text-white"
				disabled={isLoading}
				onClick={!isLoading ? handleSearchBtnClick : null}
			>
				Search
			</Button>
			<div className="search-result">
				<ListGroup className="">
					{filteredSearch.map((result, index) => {
						return (
							<ListGroupItem key={index} id={result.id} onClick={handleSearchClick}>
								{result.title}
							</ListGroupItem>
						);
					})}
				</ListGroup>
			</div>
		</>
	);
}

export default SearchFilter;
