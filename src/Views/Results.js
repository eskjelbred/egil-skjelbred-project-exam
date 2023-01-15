import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { Container } from "react-bootstrap";
import PostList from "../components/Posts/PostList";
import PostItem from "../components/Posts/PostItem";
import placeholderImage from "../assets/images/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
import { useParams } from "react-router-dom";

function Results() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState();

	const { query } = useParams();

	useEffect(() => {
		axios
			.get("http://92.220.233.201/wp-json/wp/v2/posts?_embed")
			.then((response) => {
				setPosts(response.data);
			})
			.catch((err) => {
				setError(true);
				setErrorMsg(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	const filteredPosts = posts.filter((post) => post.id !== 206);

	const handleFilter = (filteredPosts, query) => {
		return filteredPosts.filter(
			(post) =>
				post.title.rendered.toLowerCase().includes(query.toLowerCase()) ||
				post.content.rendered.toLowerCase().includes(query.toLowerCase())
		);
	};

	return loading ? (
		<p>Loading content...</p>
	) : error ? (
		<p>{errorMsg}</p>
	) : (
		<>
			<Container>
				<Navigation />
				<div className="main-content">
					<>
						<h2 className="text-center my-3">Search results</h2>
						<Container className="d-flex flex-column flex-lg-row flex-wrap justify-content-center align-items-center gap-3 my-3">
							{handleFilter(filteredPosts, query).map((post, index) => {
								const id = post.id;
								const title = post.title.rendered;
								const excerpt = post.excerpt.rendered;
								const rating = post.acf.rating;
								let image = placeholderImage;
								{
									post.featured_media === 0
										? (image = placeholderImage)
										: (image = post._embedded["wp:featuredmedia"][0].source_url);
								}

								return <PostItem key={id} id={id} title={title} excerpt={excerpt} image={image} rating={rating} />;
							})}
						</Container>
					</>
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Results;
