import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Moment from "react-moment";
import placeholderImage from "../../assets/images/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";

function ShowPostList(props) {
	const { register, handleSubmit } = useForm();

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
			<Container className="col m-3">
				<h3>Hotels</h3>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Id</th>
							<th>Image</th>
							<th>Title</th>
							<th>Address</th>
							<th>Rating</th>
							<th>Date Added</th>
							<th>Date Modified</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{filteredPosts.map((post) => (
							<tr key={post.id}>
								<td>{post.id}</td>
								<td>
									{post.featured_media == 0 ? (
										"no image"
									) : (
										<img
											src={post._embedded["wp:featuredmedia"][0].source_url}
											width={30}
											height={30}
											style={{ objectFit: "cover" }}
										/>
									)}
								</td>
								<td dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
								<td>{post.acf.address}</td>
								<td>{post.acf.rating} stars</td>
								<td>
									<Moment format="D MMM YY">{post.date}</Moment>
								</td>
								<td>
									<Moment fromNow className="d-block">
										{post.modified}
									</Moment>
									<Moment format="D MMM YY" className="d-block text-muted">
										{post.modified}
									</Moment>
								</td>
								<td className="text-center">{post.acf.price} NOK</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>
		</>
	);
}

export default ShowPostList;
