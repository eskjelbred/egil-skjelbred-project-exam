import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image, ListGroup, Button, Modal, Form, InputGroup, ModalFooter } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BASE_URL, COMMENTS_PATH } from "../../constants/api";

function PostSingular() {
	const [post, setPost] = useState();
	const [show, setShow] = useState(false);
	const [fromDate, setFromDate] = useState("");
	const [toDate, setToDate] = useState("");
	const [bookingDate, setBookingDate] = useState("");
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState();
	const id = useParams();

	useEffect(() => {
		axios
			.get("http://92.220.233.201/wp-json/wp/v2/posts/" + id.id)
			.then((response) => {
				setPost(response.data);
			})
			.catch((error) => {
				setError(true);
				setErrorMsg(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [success]);

	useEffect(() => {
		if (fromDate && toDate) {
			setBookingDate("booking from " + fromDate + " to " + toDate);
		}
	}, [fromDate, toDate]);

	const { register, handleSubmit } = useForm();

	const onSubmit = async (inputs, event) => {
		const setValues = { post: id.id, content: bookingDate };
		const allInputs = { ...setValues, ...inputs };

		console.log(allInputs);

		try {
			const response = await axios.post(BASE_URL + COMMENTS_PATH, allInputs, {});
			console.log("response", response.data);
			setSuccess(true);
		} catch (error) {
			console.log("error", error);
		}
	};

	const handleFromDate = (event) => {
		console.log(event.target.value);
		setFromDate(event.target.value);
	};

	const handleToDate = (event) => {
		console.log(event.target.value);
		setToDate(event.target.value);
		setBookingDate({ fromDate, ...toDate });
	};

	const handleShow = () => {
		setShow(true);
	};

	return loading ? (
		<p>Loading content...</p>
	) : error ? (
		<p>{errorMsg}</p>
	) : (
		<>
			<Modal show={show} onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Book your stay</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="d-flex flex-column col" onSubmit={handleSubmit(onSubmit)}>
						<p className="text-left">
							This is the booking site, register your name, email and dates you want to stay at the hotell and we will
							register your stay.
						</p>
						<p className="text-left">If there is any questions the owner will contact you</p>
						<Form.Group className="mb-3 w-100" controlId="name">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" placeholder="Enter name" {...register("author_name")} />
						</Form.Group>

						<Form.Group className="mb-3 w-100" controlId="fields.address">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="Enter email" {...register("author_url")} />
						</Form.Group>

						<Form.Group className="mb-3 w-100" controlId="date">
							<Form.Label>Date from</Form.Label>
							<InputGroup>
								<Form.Control type="date" onChange={handleFromDate} />
							</InputGroup>
							<Form.Group className="mb-3 w-100" controlId="date"></Form.Group>

							<Form.Label>Date to</Form.Label>
							<InputGroup>
								<Form.Control type="date" onChange={handleToDate} />
							</InputGroup>
						</Form.Group>
						{success === true && <p>You have successfully booked this hotell</p>}

						{error === true && <p>{errorMsg}</p>}
						<ModalFooter className="justify-content-between">
							<Button className="mt-3 w-50" variant="primary" type="submit">
								Submit
							</Button>
							<Button className="mt-3 w-25" variant="none" onClick={() => setShow(false)}>
								Close
							</Button>
						</ModalFooter>
					</Form>
				</Modal.Body>
			</Modal>
			<div key={post.id}>
				<section className="d-flex row position-relative m-0">
					<Image src={post.acf.featured_image.url} height={400} style={{ objectFit: "cover", padding: "0" }} />
					<h1
						className="position-absolute card-title"
						style={{ bottom: "0px", height: "80px", lineHeight: "80px", fontSize: "2rem" }}
					>
						{post.title.rendered}
					</h1>
				</section>
				<Button className="mt-3" onClick={handleShow}>
					Book now
				</Button>
				<h2 className="my-3">About</h2>
				<h3 className="my-3">Description</h3>
				<div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
				<div className="row">
					<div className="col-md-4">
						<h3 className="my-3">Address</h3>
						<span>{post.acf.address}</span>
					</div>
					<div className="col-md-4">
						<h3 className="my-3">Rating</h3>
						{post.acf.rating}
					</div>
					<div className="col-md-4">
						<h3 className="my-3">Price</h3>
						{post.acf.price} Nok
					</div>
				</div>
				<div className="row">
					<div className="row col-md">
						<h3 className="my-3">Facilities</h3>
						<ListGroup className="col d-flex flex-row flex-wrap justify-content-between mx-3">
							{post.acf.facilities.map((facility, index) => {
								return (
									<span key={index} className="col-6 py-1">
										{facility}
									</span>
								);
							})}
						</ListGroup>
					</div>
					<div className="row col-md">
						<h3 className="my-3">Languages</h3>
						<ListGroup className="col d-flex flex-row flex-wrap justify-content-between mx-3">
							{post.acf.languages.map((language, index) => {
								return (
									<span key={index} className="col-6 py-1">
										{language}
									</span>
								);
							})}
						</ListGroup>
					</div>
				</div>
			</div>
		</>
	);
}

export default PostSingular;
