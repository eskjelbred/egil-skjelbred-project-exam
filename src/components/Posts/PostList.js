import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import PostItem from "./PostItem";
import placeholderImage from "../../assets/images/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";

function PostList(showPosts) {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState();

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

	const filteredPosts = posts.filter((post) => post.categories[0] === 3);

	return loading ? (
		<p>Loading content...</p>
	) : error ? (
		<p>{errorMsg}</p>
	) : (
		<>
			<h2 className="text-center my-3">Newest additions</h2>
			<Container className="d-flex flex-column flex-lg-row flex-wrap justify-content-center align-items-center gap-3 my-3">
				{filteredPosts.slice(0, showPosts.showPosts).map((post, index) => {
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
	);
}

export default PostList;
