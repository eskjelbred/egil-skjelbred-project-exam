import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Moment from "react-moment";
import placeholderImage from "../../assets/images/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
import { BASE_URL, COMMENTS_PATH } from "../../constants/api";

function MessageList() {
	const { register, handleSubmit } = useForm();

	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState();

	useEffect(() => {
		axios
			.get(BASE_URL + COMMENTS_PATH)
			.then((response) => {
				setMessages(response.data);
			})
			.catch((err) => {
				setError(true);
				setErrorMsg(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	const filteredBookings = messages.filter((message) => message.post !== 206);

	return loading ? (
		<p>Loading content...</p>
	) : error ? (
		<p>{errorMsg}</p>
	) : (
		<>
			<Container className="d-flex flex-column flex-lg-row justify-content-center  mt-3">
				{messages.length == 0 ? (
					<p>No Bookings</p>
				) : (
					<div className="col">
						<h3>Bookings</h3>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>Date Added</th>
									<th>Name</th>
									<th>Email</th>
									<th>Booking</th>
								</tr>
							</thead>
							<tbody>
								{filteredBookings.map((message) => (
									<tr key={message.id}>
										<td>
											<Moment format="D MMM YY">{message.date}</Moment>
										</td>
										<td>{message.author_name}</td>
										<td>{message.author_url.replace("http://", "")}</td>
										<td dangerouslySetInnerHTML={{ __html: message.content.rendered }} />
									</tr>
								))}
							</tbody>
						</Table>
					</div>
				)}
			</Container>
		</>
	);
}

export default MessageList;
