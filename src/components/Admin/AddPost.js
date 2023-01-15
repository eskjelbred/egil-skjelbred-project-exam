import axios from "axios";
import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BASE_URL, MEDIA_PATH, POSTS_PATH } from "../../constants/api";

function AddPost() {
	const { register, handleSubmit } = useForm();

	const [imageUrl, setImageUrl] = useState("");
	const [newPostId, setNewPostId] = useState("");
	const token = localStorage.getItem("token");
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState();
	const [successMessage, setSuccessMessage] = useState();

	const onSubmit = async (inputs, event) => {
		const imageData = new FormData();
		imageData.append("file", imageUrl);

		try {
			const response = await axios.post(BASE_URL + MEDIA_PATH, imageData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log("response", response.data);
			setNewPostId(response.data.id);
		} catch (error) {
			console.log("error", error);
		}

		const setValues = { featured_media: newPostId, categories: 3, status: "publish" };
		const allInputs = { ...setValues, ...inputs };

		try {
			const response = await axios.post(BASE_URL + POSTS_PATH, allInputs, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setSuccess(true);
			console.log("response", response.data);
			setSuccessMessage("The operation was successful!");
			setError(false);
		} catch (error) {
			setError(true);
			console.log("error", error);
			setErrorMsg(error);
		}
	};

	return (
		<div className="col m-3">
			<h3>Add hotel</h3>
			<Form className="d-flex flex-wrap align-content-start" onSubmit={handleSubmit(onSubmit)}>
				<Form.Group className="mb-3 col-8" controlId="title">
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" placeholder="Enter title" {...register("title")} />
				</Form.Group>

				<Form.Group className="mb-3 col-4" controlId="fields.price">
					<Form.Label>Price</Form.Label>
					<Form.Control type="number" placeholder="Enter price" {...register("fields.price")} />
				</Form.Group>

				<Form.Group className="mb-3 col-8" controlId="fields.address">
					<Form.Label>Address</Form.Label>
					<Form.Control type="text" placeholder="Enter address" {...register("fields.address")} />
				</Form.Group>

				<Form.Group controlId="formFile" className="mb-3 col-4">
					<Form.Label>Image upload</Form.Label>
					<Form.Control
						type="file"
						onChange={(event) => {
							console.log(event);
							setImageUrl(event.target.files[0]);
						}}
					/>
				</Form.Group>

				<Form.Group className="mb-3 col-8" controlId="content">
					<Form.Label>Description</Form.Label>
					<InputGroup>
						<Form.Control as="textarea" aria-label="With textarea" {...register("content")} />
					</InputGroup>
				</Form.Group>

				<Form.Group className="mb-3 col-4" controlId="fields.rating">
					<Form.Label>Rating</Form.Label>
					<Form.Select {...register("fields.rating")}>
						<option>Select rating:</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-3 col-4" controlId="tags">
					<Form.Label>Tags</Form.Label>
					<Form.Select multiple {...register("tags")}>
						<option value="10">Bar</option>
						<option value="5">Breakfast included</option>
						<option value="6">Internet access</option>
						<option value="8">No smoking</option>
						<option value="11">Parking available</option>
						<option value="4">Petfriendly</option>
						<option value="12">Reception 24/7</option>
						<option value="14">Restaurant</option>
						<option value="7">Trainingroom</option>
						<option value="9">Wi-fi included</option>
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-3 col-4" controlId="fields.languages">
					<Form.Label>languages</Form.Label>
					<Form.Select multiple {...register("fields.languages")}>
						<option value="Norwegian">Norwegian</option>
						<option value="English">English</option>
						<option value="Spanish">Spanish</option>
						<option value="Swedish">Swedish</option>
						<option value="Italian">Italian</option>
						<option value="French">French</option>
						<option value="German">German</option>
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-3 col-4" controlId="fields.facilities">
					<Form.Label>facilities</Form.Label>
					<Form.Select multiple {...register("fields.facilities")}>
						<option value="Cleaning once per stay">Cleaning once per stay</option>
						<option value="Fitness center">Fitness center</option>
						<option value="A safe at the reception">A safe at the reception</option>
						<option value="Luggage storage">Luggage storage</option>
						<option value="Baby bed/cot (for a fee)">Baby bed/cot (for a fee)</option>
					</Form.Select>
				</Form.Group>

				<Button className="mt-3 w-25" variant="primary" type="submit">
					Submit
				</Button>
			</Form>
			{error && errorMsg.response.status === 400 && (
				<>
					<p className="mt-3 text-red">{errorMsg.message}</p>
					<p>Please try again, it usually works the second time</p>
				</>
			)}
			{success && (
				<>
					<p className="mt-3 text-green">{successMessage}</p>
				</>
			)}
		</div>
	);
}

export default AddPost;
